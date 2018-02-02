<?php
include "core.php";
$Category = Model::load("category");
?>

<?php
if (!empty($_POST)){
    $Category->save($_POST);
    $_GET["id"] = $Category->id;
}
if (isset($_GET["suppr"]))
{
    $Category->delete($_GET["suppr"]);
}
?>

<!DOCTYPE HTML>
<html>

<head>
        <title>Index php de POO</title>
        <meta charset="utf-8">
        <meta name="description" content="165c. uniques">
        <link rel="stylesheet" type="text/css" href="style.css" media="all"/>
</head>

<body>
    <div id="conteneur">
    <h1>La progra objet, ça fait peur</h1>
    <ul>
    <?php
    
        $cat = $Category->find(array("order" => "position ASC", "fields" => "id, name"));
        foreach($cat as $c)
        {
            ?>
            <li><a href="index.php?id=<?php echo $c["id"];?>"><?php echo $c["name"];?></a>
            <a href="index.php?suppr=<?php echo $c["id"];?>">[x]</a></li>
            <?php
        }
    ?>
    <li><a href="index.php">Ajouter une catégorie</a></li>
    </ul>
    </div>
    <p>
    <form method="post" action="index.php">
        <?php

        if (isset($_GET["id"])){
            $id = $_GET["id"];
            $Category->id = $id;
            $Category->read();
            
            $name = $Category->name;
            $position = $Category->position;
        }
        else{
            $id = $name= $position = "";
        }
        
    ?>
    <input type="hidden" name="id" value="<?php echo $id; ?>"/>
    <input type="text" name="name" value="<?php echo $name; ?>"/>
    <input type="position" name="position" value="<?php echo $position; ?>"/>
    <input type="submit" value="envoyer"/>
    </form>
    </p>
</body>
</html>