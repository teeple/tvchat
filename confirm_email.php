<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */

include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

setlocale(LC_ALL, 'ko_KR.UTF-8');

// get uid(user id) from Query String parameters 
//
$uid = substr($_GET['param'], 0, -10);

$user = user_load($uid);

$edit = array();
$edit['profile_email_confirmed'] = '1';

$values = array('profile_nickname', 'profile_APNS_token', 'profile_phone_no', 'profile_message_alarm', 'profile_tvshow_alarm');

$user_arr = (array)$user;

foreach($values as $value) {
    if($user_arr[$value]){ 
        $edit[$value] = $user_arr[$value];
    }
}

profile_save_profile($edit, $user, 'Personal information');

echo 'email이 인증되었습니다. 감사합니다.<br>';
echo '<html><body><a href="http://goo.gl/zfk5F/">Teeple Facebook Page로 가기</a></body></html>';

?>
