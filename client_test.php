<?php
$_SERVER['REMOTE_ADDR']= 'test.uangel.com';
include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);


$request_url = 'http://www.teeple.co.kr/tvchat/services/json';
$request_headers = array('Content-Type' => 'application/x-www-form-urlencoded');
$request_method = 'POST';


$edit = array(
    'sessid' => '"92q1eg5jddtlh8hkr6eshetbf2"',
    'method' => '"user.update"',
    'nick'   => '"넌 누구냐"',
    'todayMessage' => '"바머"',
);

$data = join('&', array_values($edit));
  
// Send the request.
$result = drupal_http_request($request_url, $request_headers, $request_method, $data, $request_retry);

echo $result;

?>
