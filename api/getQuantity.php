<?php
include("config.php");
$id = $_POST["id"];
$quantity = 0+ $_POST["quantity"];
$resp["status"] = mysqli_query($con,"UPDATE cart SET quantity='$quantity' WHERE id='$id'");

echo json_encode($resp);


?>