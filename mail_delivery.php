<?php
echo $_POST['mail'];
echo $_POST['subject'];
echo $_POST['body'];

$email_to = $_POST['mail'];
$subject = $_POST['subject'];
$body = $_POST['body'];

// $email_to = "aceknife@naver.com";
// $email_to = "youngmin.k@gmail.com";
// $body = "from newbiz";
// $subject = "test test";

$header  = "Return-Path: teeple@uangel.com\n";
$header .= "From: teeple@uangel.com\n";
$header .= "Content-Type: text/html; charset=UTF-8; format=flowed\n";

error_log($email_to.$subject.$body.$header);
mail($email_to, $subject, $body, $header);

echo "Mail Sent";
?>

