<?php
/**
 *
 * @file
 * Introduction to TV Social Service with heterogenious clients 
 * using Mobile Tools API
 *
 */
require_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

$device = mobile_tools_get_device();
$body = "device type:".$device["type"].", group:".$device["group"]; 
if(strcmp($device["group"],"iphone") != 0) {
    header('Location: http://itunes.apple.com/kr/app/birdie-buddy-golf-gps/id365498656?mt=8');
} else {
    $body = "iPhone Teeple 소개 페이지입니다";
}
?>

<html>
<head>
<title>A web page that points a browser to a different page after 2 seconds</title>
<meta http-equiv="refresh" content="0; URL=http://itunes.apple.com/kr/app/birdie-buddy-golf-gps/id365498656?mt=8">
<meta name="keywords" content="automatic redirection">
</head>
<body>
If your browser doesn't automatically go there within a few seconds, 
you may want to go to 
<a href="http://www.pa.msu.edu/services/computing/">the destination</a> 
manually.
</body>
</html>

