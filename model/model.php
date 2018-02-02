<?php
class Model{

    public $table;

    public function read($fields=null){
        //$this->id = 2;
        if ($fields==null){
            $fields = '*';
        }
        $db = mysqli_connect('localhost', 'root', 'root', 'tuto');
        
        if (!$db)
            die("Connection failed: " . mysqli_connect_error());
        
        $sql = "SELECT $fields FROM $this->table WHERE id= $this->id ";
        $req = mysqli_query($db, $sql);
        if (!$req)
            die("Connection failed: " . mysqli_connect_error());
        
        $data = mysqli_fetch_assoc($req);
        foreach($data as $k=>$v){
            $this->$k = $v;
        }
    }

    public function save($data)
    {
        if (isset($data["id"]) && !empty($data["id"])){
            $sql = "UPDATE ".$this->table." SET ";
            foreach($data as $k=>$v)
            {
                if ($k != "id")
                    $sql .= "$k='$v',";
            }
            $sql = substr($sql, 0, -1);
            $sql .= "WHERE id=".$data["id"];
        }
        else {
            $sql = "INSERT INTO ".$this->table."(";
            unset($data["id"]);
            foreach($data as $k=>$v)
                $sql .= "$k,";
            $sql = substr($sql, 0, -1);
            $sql .=") VALUES (";
            foreach($data as $v){
                $sql .= "'$v',";
            }
            $sql = substr($sql, 0, -1);
            $sql .= ")";
        }
        
        $db = mysqli_connect('localhost', 'root', 'root', 'tuto');
        if (!$db)
            die("Connection failed: " . mysqli_connect_error());
        $req = mysqli_query($db, $sql);
        if (!$req)
            die("Connection failed: " . mysqli_connect_error());
        if (!isset($data["id"])){
            $this->id = mysqli_insert_id();
            //mysqli_insert_id retourne l'identifiant automatiquement généré par la derniere requete//
        }
        else
            $this->id = $data["id"];
    }

    public function find($data)
    {
        $conditions = "1 = 1";
        $fields = "*";
        $limit = "";
        $order = "id DESC";
        if (isset($data["conditions"])){ $conditions = $data["conditions"];}
        if (isset($data["fields"])){ $fields = $data["fields"];}
        if (isset($data["limit"])){ $limit = $data["limit"];}
        if (isset($data["order"])){ $order = $data["order"];}
        $sql = "SELECT $fields FROM $this->table WHERE $conditions ORDER BY $order $limit";
        $d = array();
        $db = mysqli_connect('localhost', 'root', 'root', 'tuto');
        if (!$db)
            die("Connection failed: " . mysqli_connect_error());
        $req = mysqli_query($db, $sql);
        while ($data = mysqli_fetch_assoc($req))
        {
            $d[] = $data;
        }
        return $d;
    }

    public function delete($id=null)
    {
        if ($id == null)
            $id = $this->id;
        $sql = "DELETE FROM $this->table WHERE id=$id";
        $db = mysqli_connect('localhost', 'root', 'root', 'tuto');
        if (!$db)
            die("Connection failed: " . mysqli_connect_error());
        echo "rentree";
        $req = mysqli_query($db, $sql);
        echo "rentree";
    }

    static function load($name)
    {
       include "$name.php";
       return new $name();
    }
}

?>