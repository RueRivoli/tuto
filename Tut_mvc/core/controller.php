<?php

class Controller{

    public $vars = array();
    public $layout='default';

    function set($d){
        $this->vars = array_merge($this->vars, $d);
    }

    function render($filename){
        extract($this->vars);
        ob_start();
        require(ROOT.'views/'.get_class($this).'/'.$filename.'.php');
        $content_for_layout = ob_get_clean();
        if ($this->layout==false)
            echo $content_for_layout;
        else
            require(ROOT.'views/layout/'.$this->layout.'.php');
    }

    function loadModel($name)
    {
       require_once(ROOT.'model/'.strtolower($name).'.php');
       $this->$name = new $name();
    }
}

?>