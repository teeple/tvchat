<?php 
include_once './includes/bootstrap.inc'; 
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);
$app_download_url = variable_get('url_intro_shorten', 'http://tiny.cc/6g0cw');
echo $app_download_url;

/*
header( 'Location: '.$app_download_url);
*/
header('Location: http://itunes.apple.com/us/app/id452179691?mt=8');
?>
