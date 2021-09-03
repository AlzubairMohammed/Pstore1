<?php
include("config.php");

$user = $_POST["user"];
$pass = $_POST["pass"]; // step 1

$result = mysqli_query($con , "select id from users where user='$user' and pass='$pass'");
if(mysqli_num_rows($result)==0)
    $resp["status"]=false;
else{
    $resp["status"]=true;
    $row = mysqli_fetch_assoc($result); // {"id":19}
    $resp["id"]=$row["id"];
}

echo json_encode($resp); // step 4

?>