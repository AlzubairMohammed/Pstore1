<?php
include("config.php");
$productId = $_POST["productId"];

$resp["status"] = mysqli_query($con, "delete from products where id='$productId'");

echo json_encode($resp);


?>