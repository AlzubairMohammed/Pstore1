<?php
include("config.php");

$name = $_POST["name"];
$pass = $_POST["pass"]; 
$user = $_POST["email"];
$tel  = $_POST["tel"] ;

$img_name=$_FILES["img"]["name"];
move_uploaded_file($_FILES["img"]["tmp_name"],"../uploads/$img_name");


$resp["status"] = mysqli_query($con, "insert into users(name,pass,user,tel,img) values('$name','$pass','$user','$tel','uploads/$img_name')");

echo json_encode($resp);

?>