<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */

include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

$_query = "SELECT * FROM `watchdog` WHERE timestamp between 1310630240 and 1310630300 ORDER BY timestamp ASC";

$result = db_result(db_query($_query));

while($element = db_fetch_array($result)) {

    echo $element['uid'];
    echo '\n';
    echo $element['type'];
    echo '\n';
    echo $element['message'];
    echo '\n';
}

?>

