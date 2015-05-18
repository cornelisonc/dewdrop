<?php

namespace Dewdrop\Cli\Command;

use Dewdrop\Cli\Renderer\Mock as MockRenderer;
use PHPUnit_Framework_TestCase;

class InitTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var Init
     */
    protected $command;

    /**
     * @var \Dewdrop\Cli\Run|\PHPUnit_Framework_MockObject_MockObject
     */
    protected $runner;

    /**
     * @var MockRenderer
     */
    protected $renderer;

    public function setUp()
    {
        $this->renderer = new MockRenderer();
        $this->runner   = $this->getMock(
            '\Dewdrop\Cli\Run',
            array('halt'),
            array(array(), 'init', $this->renderer)
        );
        $this->command  = new Init($this->runner, $this->renderer);
    }

    public function testShouldNotExecuteInWpEnvironment()
    {
        $paths = $this->getMock(
            '\Dewdrop\Paths',
            array('getAppRoot')
        );

        $paths
            ->expects($this->once())
            ->method('getAppRoot')
            ->will($this->returnValue('/some/wordpress/path/wp-content/plugins/plugin'));

        $init = $this->getMock(
            '\Dewdrop\Cli\Command\Init',
            array('abort'),
            array($this->runner, $this->renderer, $paths)
        );

        $init
            ->expects($this->once())
            ->method('abort');

        $init
            ->parseArgs(array());
        $init->execute();
    }

    public function testShouldAbortWithMessage()
    {
        $paths = $this->getMock(
            '\Dewdrop\Paths',
            array('getAppRoot')
        );

        $paths
            ->expects($this->once())
            ->method('getAppRoot')
            ->will($this->returnValue('/some/wordpress/path/wp-content/plugins/plugin'));

        $init = new Init($this->runner, $this->renderer, $paths);

        $init->execute();

        $this->assertTrue($this->renderer->hasOutput('You appear to be running Dewdrop in a WP plugin. Run command wp-init instead.'));
    }
}
