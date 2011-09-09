<?
$charset = "UTF-8";
$boundary = uniqid(rand(),true);

$mail_array[to_name] = "웹디자이너";
$mail_array[to_email] = "aceknife@naver.com";

$mail_array[from_name] = "웹프로그래머";
$mail_array[from_email] = "teeple@uangel.com";

$mail_array[title] = "[소식] 홈페이지 정보 블로그" . date("YmdHi");

$mail_array[content] = "
<html>
<head>
<title>홈페이지 정보 블로그</title>
</head>
<body>
<a href='http://hompy.info/471' target='_blank'>홈페이지 정보 블로그</a><br>
<a href='http://hompy.info/471' target='_blank'>http://hompy.info/471</a><br>
</body>
</html>";

$mail_array[title] = '=?utf-8?b?'.base64_encode($mail_array[title]).'?=';
$mail_array[from_name] = '=?utf-8?b?'.base64_encode($mail_array[from_name]).'?=';
$mail_array[to_name] = '=?utf-8?b?'.base64_encode($mail_array[to_name]).'?=';
$recipient = $mail_array[to_name] . " <". $mail_array[to_email] . ">";

$headers = 
"From: ". $mail_array[from_name] . " <".$mail_array[from_email] . ">\n" .
"Return-Path: ".$mail_array[to_name] . " <" . $mail_array[from_email] . ">\n" .
"Subject: ".$mail_array[title] . "\n" .
"MIME-Version: 1.0\n" .
"Content-Type: multipart/alternative; boundary=\"" . $boundary . "\"";

$body = 
"--" . $boundary . "\n".
"Content-Type: text/plain; charset=" . $charset . "; format=flowed\n" .
"Content-Transfer-Encoding: base64\n" .
"Content-Disposition: inline\n\n" .
chunk_split(base64_encode(strip_tags($mail_array[content]))) . "\n\n" .
"--" . $boundary . "\n" .
"Content-Type: text/html; charset=" . $charset . "\n" .
"Content-Transfer-Encoding: base64\n" .
"Content-Disposition: inline\n\n" .
chunk_split(base64_encode($mail_array[content]))."\n\n" .
"--" . $boundary . "--\n";

mail($recipient , $mail_array[title], $body, $headers);
?>

