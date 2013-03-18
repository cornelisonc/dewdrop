<?php

namespace Dewdrop;

class PathsTest extends \PHPUnit_Framework_TestCase
{
    protected $paths;

    protected $wpRoot;

    protected $pluginRoot;

    public function setUp()
    {
        $this->paths      = new Paths();
        $this->wpRoot     = realpath(__DIR__ . '/../../../../../../');
        $this->pluginRoot = realpath(__DIR__ . '/../../../');
    }

    public function testWpRoot()
    {
        $this->assertEquals($this->wpRoot, $this->paths->getWpRoot());
    }

    public function getDewdropLib()
    {
        $this->assertEquals($this->pluginRoot . '/lib/Dewdrop', $this->paths->getDewdropLib());
    }

    public function testPluginRoot()
    {
        $this->assertEquals($this->pluginRoot, $this->paths->getPluginRoot());
    }

    public function getAdmin()
    {
        $this->assertEquals($this->pluginRoot . '/admin', $this->paths->getAdmin());
    }

    public function getDb()
    {
        $this->assertEquals($this->pluginRoot . '/db', $this->paths->getDb());
    }

    public function getLib()
    {
        $this->assertEquals($this->pluginRoot . '/lib', $this->paths->getLib());
    }

    public function getModels()
    {
        $this->assertEquals($this->pluginRoot . '/models', $this->paths->getModels());
    }

    public function getShortCodes()
    {
        $this->assertEquals($this->pluginRoot . '/short-codes', $this->paths->getShortCodes());
    }

    public function getTests()
    {
        $this->assertEquals($this->pluginRoot . '/tests', $this->paths->getTests());
    }
}