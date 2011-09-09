<?php
$row = 0;

//get nids where user is author
$my_result = db_query("SELECT t.nid, u.uid, u.name ".
"FROM content_type_tvshow_checkin t, users u ".
"WHERE t.field_checkin_tvshow_nid = $data->nid ".
"AND t.field_checkin_user_uid = u.uid ");
while ($my_row = db_fetch_array($my_result))
{
//    print $my_row['nid'];
//    print_r( $my_row);
    printf ("checked in by user %s", $my_row['name']);
    $row ++;
}

if ( $row == 0) {
    printf(' <div class="views-field">'.
	'<a href="/tvchat/sites/all/libraries/tvchat/checkin_now?nid=%s">Check In Now</a>'.
	'</div>', $data->nid);
}
?>
