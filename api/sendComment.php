<?php
include("config.php");
$name = $_POST["name"];
$comment = $_POST["comment"] ;
$img = $_POST["img"] ;

$resp["status"] = mysqli_query($con, "insert into comments(name,comment,img) values('$name','$comment','$img')");
echo json_encode($resp);


?>