<?php


$db = mysqli_connect('localhost', 'root', 'root');
if (!$db)
	die("Connection failed: " . mysqli_connect_error());
mysqli_select_db('tuto');
mysqli_query("SET NAMES '\utf8'");

require "model/category.php";
?>