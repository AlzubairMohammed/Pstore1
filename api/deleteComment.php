<?php
include("config.php");
$id = $_POST["id"];

$resp["status"] = mysqli_query($con, "delete from comments where id='$id'");

echo json_encode($resp);


?>