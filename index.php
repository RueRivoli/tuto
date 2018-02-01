<?php

include "core.php";
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
    </div>
    <p>
    <?php
    
    $c = new Category();
    $c->id = 2;
    
    print_r($c->read("name"));
    ?>
    </p>
</body>
</html>