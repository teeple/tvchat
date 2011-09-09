<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */
$_SERVER['REMOTE_ADDR'] = 'newbiz.uangel.com';

include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

$before = '<ajdkfasd<>ajdkfasd>';

echo json_encode($before);

echo '\n';

echo drupal_to_js($before);
?>

