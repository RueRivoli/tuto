<?php

class tutoriels extends Controller{

    function index(){
        $this->loadModel('Tutoriel');
        $d['tutos'] = $this->Tutoriel->getLast(5);
        $this->set($d);
        $this->render('index');
    }

    function view($id)
    {
        $this->loadModel('Tutoriel');
        $d['tuto'] = $this->Tutoriel->find(array(
            'conditions' => 'id='.$id
        ));
        $d['tuto'] = $d['tuto'][0];
        $this->set($d);
        $this->render('view');
    }
}

?>