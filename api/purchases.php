<?php

include("config.php");
$name = $_POST["name"];
$price = $_POST["price"];
$descr = $_POST["descr"];
$type = $_POST["type"];
$modernity = $_POST["modernity"];
$img = $_POST["img"];
$id = $_POST["id"];




$resp["status"] = mysqli_query($con, "insert into cart(name,price,type,descr,modernity,img,id) values('$name','$price','$type','$descr','$modernity','$img','$id')"); 



echo json_encode($resp); 
?>