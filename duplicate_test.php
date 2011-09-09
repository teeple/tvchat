<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */

include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

setlocale(LC_ALL, 'ko_KR.UTF-8');

$_query = "SELECT node1.nid nid , node1.title title FROM node node1, node node2 WHERE node1.type = 'tvshow' AND node2.type = 'tvshow' AND node1.nid <> node2.nid AND node1.title = node2.title ORDER BY node1.nid";

$result = db_query($_query);

while($node = db_fetch_object($result)) {

  echo "NODE: ".$node->nid;
  echo "<br>";
  echo "TITLE: ".$node->title;

  $node->status = 0;
  node_save($node);
}

?>


