<?php

Class category {
    public $id;

    function read($fields){
        $db = mysqli_connect('localhost', 'root', 'root');
        mysqli_select_db($db, 'tuto');
        $sql = "SELECT $fields FROM categories WHERE id=".$this->id;
        $req = mysqli_query($db, $sql);
        if (!$req)
            die("Connection failed: " . mysqli_connect_error());
        
        $data = mysqli_fetch_assoc($req);
        return $data;
    }
}

?>