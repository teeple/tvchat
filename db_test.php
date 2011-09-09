<?php
$link = mysql_connect('222.235.208.216', 'drupal6', 'drupal6.123');
$test = mysql_select_db('drupal6', $link);

echo $link;
echo $test; echo "\n";

$_query = "SELECT pid FROM {apns_messages} WEHRE status = 'queued' ORDER BY created ASC";
$result = mysql_query($_query);

echo $result;
echo gettype($result);

while($element = mysql_fetch_array($result, __CLASS__)) {
    echo $element->pid;
}

mysql_close($link);

