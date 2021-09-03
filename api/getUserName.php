<?php
include("config.php") ;
$id = $_POST["id"] ;
$result = mysqli_query($con,"select name from users where id = '$id'");
$data = mysqli_fetch_assoc($result);

echo json_encode($data);


?>