<?php
include("config.php");

$user = $_POST["user"];
$pass = $_POST["pass"]; // step 1

$result = mysqli_query($con , "select id,name,img,admin,tel from users where user='$user' and pass='$pass'");
if(mysqli_num_rows($result)==0)
    $resp["status"]=false;
else{
    $resp["status"]=true;
    $resp['data'] = mysqli_fetch_all($result,MYSQLI_ASSOC); // {"id":19}
}

echo json_encode($resp); // step 4

?>