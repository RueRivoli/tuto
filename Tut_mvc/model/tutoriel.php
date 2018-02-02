<?php

class Tutoriel extends Model{

    var $table = 'tuto';

    function getLast($num=5)
    {
        return $this->find(array(
            'limit' => $num,
            'order' => 'id DESC'
        ));
    }
}
?>