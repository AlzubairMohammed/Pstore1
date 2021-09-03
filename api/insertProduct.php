<?php

include("config.php");
$name = $_POST["name"];
$price = $_POST["price"];
$descr = $_POST["descr"];
$type = $_POST["type"];
$modernity = $_POST["modernity"];

$img_name=$_FILES["img"]["name"];
move_uploaded_file($_FILES["img"]["tmp_name"],"../uploads/$img_name");
// step 1

$resp["status"] = mysqli_query($con, "insert into products(name,price,type,descr,modernity,img) values('$name','$price','$type','$descr','$modernity','uploads/$img_name')"); // step 2 & 3

echo json_encode($resp); // step 4
?>