<?php
$con = mysql_connect("localhost","drupal6","drupal6.123");
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("drupal6", $con);

$result = mysql_query("SELECT * FROM apns_messages");

while($row = mysql_fetch_array($result))
{
    echo $row['pid'] . " " . $row['message'];
    echo "<br />";
}

mysql_close($con);
?>
