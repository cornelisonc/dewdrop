<?php

/**
 * Dewdrop
 *
 * @link      https://github.com/DeltaSystems/dewdrop
 * @copyright Delta Systems (http://deltasys.com)
 * @license   https://github.com/DeltaSystems/dewdrop/LICENSE
 */

namespace Dewdrop\Cli\Command;

use Dewdrop\Db\Driver\Pdo\Pgsql;
use Dewdrop\Exception;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

/**
 * Generate admin components & deploy scripts for Users & Security Levels.
 */
class GenUsersAndSecurityLevels extends GenAdminComponent
{
    use DatabaseGeneratorTrait;

    const TABLE_NAME_USERS = 'users';

    const TABLE_NAME_SECURITY_LEVELS = 'security_levels';

    /**
     * Username of admin user generated.
     *
     * @var string
     */
    private $adminUsername = null;

    /**
     * Plaintext password of admin user generated.
     *
     * @var string
     */
    private $adminPassword = null;

    /**
     * Email address of admin user generated.
     *
     * @var string
     */
    private $adminEmail = null;

    /**
     * Set basic command information, arguments and examples
     *
     * @inheritdoc
     */
    public function init()
    {
        $this
            ->setDescription('Generate models for Users and Security Levels, generate component for users, '.
                'create tables for users and security_levels if they do not already exist. (WP is not yet supported)')
            ->setCommand('gen-users-and-security-levels')
            ->addAlias('generate-users-and-security-levels');

        $this->addArg(
            'admin-username',
            'Username for generated admin user',
            self::ARG_OPTIONAL
        );

        $this->addArg(
            'admin-password',
            'Password for generated admin user (plaintext)',
            self::ARG_OPTIONAL
        );

        $this->addArg(
            'admin-email',
            'Email address for generated admin user',
            self::ARG_OPTIONAL
        );

        $this->addExample(
            'Generate Users & Security Levels; optionally also create admin user',
            './vendor/bin/dewdrop gen-users-and-security-levels --admin-username=admin --admin-password=password --admin-email=email@email.com'
        );
    }

    /**
     * Set the admin username.
     *
     * @param string $adminUsername
     * @return \Dewdrop\Cli\Command\GenUsersAndSecurityLevels
     */
    public function setAdminUsername($adminUsername)
    {
        $this->adminUsername = $adminUsername;

        return $this;
    }

    /**
     * Set the admin password.
     *
     * @param string $adminPassword
     * @return \Dewdrop\Cli\Command\GenUsersAndSecurityLevels
     */
    public function setAdminPassword($adminPassword)
    {
        $pimple = $this->runner->getPimple();

        if (!$pimple['auth']) {
            throw new Exception('You must configure the \Dewdrop\Auth service in your bootstrap to generate an admin user.');
        }

        $pimple['auth']->init();

        $encoder = $pimple['security.encoder.digest'];

        $this->adminPassword = $encoder->encodePassword($adminPassword, '');

        return $this;
    }

    /**
     * Set the admin email address.
     *
     * @param string $adminEmail
     * @return \Dewdrop\Cli\Command\GenUsersAndSecurityLevels
     */
    public function setAdminEmail($adminEmail)
    {
        $this->adminEmail = $adminEmail;

        return $this;
    }

    public function execute()
    {
        $this
            ->haltIfPrerequisitesNotMet()
            ->createDbTables()
            ->createModels()
            ->createAdmin();
    }

    /**
     * Define prerequisites for this command.
     *
     * @return $this
     * @throws Exception
     */
    private function haltIfPrerequisitesNotMet()
    {
        /* Only Pgsql driver is supported. */
        $driver = $this->runner->connectDb()->getDriver();
        if (!$driver instanceof Pgsql) {
            throw new Exception('This command does not yet support the database driver: '.get_class($driver));
        }

        /* If any admin user args are given, they must all be given */
        if ($this->adminUsername || $this->adminPassword || $this->adminEmail) {
            if (!$this->adminUsername || !$this->adminPassword || !$this->adminEmail) {
                throw new Exception('If you are trying to generate an admin user, you must provide all 3 args.');
            }
        }

        return $this;
    }

    /**
     * Create db tables for Users and Security Levels if they do not already exist.
     *
     * @return $this
     * @throws Exception
     */
    private function createDbTables()
    {
        $driver = $this->runner->connectDb()->getDriver();

        if ($driver instanceof Pgsql) {
            $dbPrefix = 'pg';
        } else {
            throw new Exception('This command does not yet support the database driver: '.get_class($driver));
        }

        // TableName => filename
        $tables = [
            self::TABLE_NAME_SECURITY_LEVELS => $dbPrefix.'-create-security-levels.sql',
            self::TABLE_NAME_USERS => $dbPrefix.'-create-users.sql'
        ];

        if ($this->adminUsername && $this->adminPassword && $this->adminEmail) {

            $templateReplacements = array(
                '{{createAdminUser}}' => sprintf(
                    "INSERT INTO users(security_level_id, username, email_address, password_hash) VALUES ('1', '%s', '%s', %s' );",
                    $this->adminUsername,
                    $this->adminEmail,
                    $this->adminPassword
                )
            );
        } else {
            $templateReplacements = array('{{createAdminUser}}' => '');
        }

        foreach ($tables as $tableName => $filename) {
            $this->createMigration($tableName, $filename, $templateReplacements);
        }

        $this->runner->executeCommand('Dbdeploy');

        return $this;
    }

    /**
     * Create a database migration, first checking if a given $tableName exists.
     *
     * @param $tableName
     * @param $filename
     * @param $templateReplacements
     */
    private function createMigration($tableName, $filename, $templateReplacements)
    {
        if (!$this->tableExists($tableName)) {
            $path     = $this->paths->getDb().'/'.$this->getDbRevision().'-'.$filename;
            $contents = file_get_contents(__DIR__."/gen-templates/users-and-security-levels/db/{$filename}");

            if ($templateReplacements) {
                $this->writeFile(
                    $path,
                    str_replace(
                        array_keys($templateReplacements),
                        $templateReplacements,
                        $contents
                    )
                );
            } else {
                $this->writeFile($path, $contents);
            }
        }
    }

    /**
     * Create Model files from their templates.
     *
     * @return $this
     */
    protected function createModels()
    {
        $source      = __DIR__.'/gen-templates/users-and-security-levels/models';
        $destination = $this->paths->getModels();

        $this->copyFilesAndFillTemplates($source, $destination);

        return $this;
    }

    /**
     * Create admin files from their templates.
     *
     * @return $this
     */
    protected function createAdmin()
    {
        $source      = __DIR__.'/gen-templates/users-and-security-levels/admin';
        $destination = $this->paths->getAdmin();

        $this->copyFilesAndFillTemplates($source, $destination);

        return $this;
    }

    /**
     * For a given $source directory, replace template values with a given set of $replacements,
     * and save them to the $destination directory (not altering any existing files that may
     * already exist in the $destination)
     *
     * @param $source
     * @param $destination
     * @param array $replacements
     * @return $this
     */
    protected function copyFilesAndFillTemplates($source, $destination, $replacements = [])
    {
        if (is_dir($destination)) {
            $this->createFolder($destination);
        }

        $source      = realpath($source);
        $destination = realpath($destination);
        $dirIterator = new RecursiveDirectoryIterator($source, RecursiveDirectoryIterator::SKIP_DOTS);
        $templates   = new RecursiveIteratorIterator($dirIterator, RecursiveIteratorIterator::CHILD_FIRST);
        foreach ($templates as $template) {
            // replace source with destination
            $newLocation = $destination.'/'.substr($template->getRealPath(), strlen($source) + 1);

            if ($template->isDir()) {
                $this->createFolder($template->getRealPath());
            } else {
                $this->writeFileFromTemplate($newLocation, $template, $replacements, false);
            }
        }

        return $this;
    }
}
