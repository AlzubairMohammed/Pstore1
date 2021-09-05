<?php
include("config.php");
$id = $_POST["id"];
$result = mysqli_query($con,"select quantity from cart where id = '$id'");
$data = mysqli_fetch_assoc($result);
$quantity = $data["quantity"]+1;

echo json_encode($quantity);


?>