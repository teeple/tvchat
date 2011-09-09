<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */

 $_SERVER['REMOTE_ADDR'] = 'newbiz.uangel.com';
include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

module_load_include('inc', 'views_service');
module_load_include('inc', 'tvchat');
module_load_include('inc', 'user_service');
module_load_include('inc', 'anonymous_tvchat_service');

setlocale(LC_ALL, 'ko_KR.UTF-8');

anonymous_tvchat_service_login('cron', 'cron.123');

$ret = views_service_get('list_onair_show_json_crontest', null, null, 0, 0, FALSE);
error_log(print_r($ret));

foreach ($ret as $row) {

  $message = $row->node_title."(가)이 곧 시작합니다.";

  error_log('tvshow noti '.$message);

  $args[] = $row->nid;

  print_r($message);
  print_r($args);

  $favorite_users = views_service_get('flag_favorite_users', null, $args, 0, 0, FALSE);

  print_r($favorite_users);

  foreach($favorite_users as $user) {
      $recipientUids[] = $user->users_flag_content_uid;

  }

  // tvchat_send_apns_message(1, $recipientUids, $message, 0);
  tvchat_send_message(1, $recipientUids, $message, 0);
}

user_service_logout();

?>

