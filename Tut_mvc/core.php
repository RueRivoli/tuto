<?php
$db = mysqli_connect('localhost', 'root', 'root', 'tuto');
if (!$db)
	die("Connection failed: " . mysqli_connect_error());
mysqli_query("SET NAMES '\utf8'");
include "model/model.php";
?>