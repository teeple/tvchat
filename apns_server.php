<?php
/**
 * @file
 * sample_server.php
 *
 * Push server demo
 *
 * LICENSE
 *
 * This source file is subject to the new BSD license that is bundled
 * with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://code.google.com/p/apns-php/wiki/License
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to aldo.armiento@gmail.com so we can send you a copy immediately.
 *
 * @author (C) 2010 Aldo Armiento (aldo.armiento@gmail.com)
 * @version $Id: sample_server.php 55 2010-08-27 19:07:38Z aldo.armiento $
 */
// Using Autoload all classes are loaded on-demand
require_once 'ApnsPHP/ApnsPHP/Autoload.php';

// Adjust to your timezone
date_default_timezone_set('Asia/Seoul');

// Report all PHP errors
error_reporting(-1);

// Instanciate a new ApnsPHP_Push object
$server = new ApnsPHP_Push_Server(
	ApnsPHP_Abstract::ENVIRONMENT_SANDBOX,
    'ApnsPHP/apns-dev.pem'
);

// Set the Root Certificate Autority to verify the Apple remote peer
$server->setRootCertificationAuthority('ApnsPHP/entrust_root_certification_authority.pem');

// Set the number of concurrent processes
$server->setProcesses(1);

// Starts the server forking the new processes
$server->start();

$con = mysql_connect("localhost","drupal6","drupal6.123");
if (!$con) { die('Could not connect: ' . mysql_error()); }
mysql_select_db("drupal6", $con);

// Main loop...
$i = 1;
while ($server->run()) {

	// Check the error queue
	$aErrorQueue = $server->getErrors();
	if (!empty($aErrorQueue)) {
		// Do somethings with this error messages...
		var_dump($aErrorQueue);
	}

    if(!$con) {
        $con = mysql_connect('localhost', 'drupal6', 'drupal6.123');
        if (!$con) { die('Could not connect: '. mysql_error()); }
        mysql_select_db('drupal6', $con);
    }

    $timestamp = time();
    // $result = mysql_query("SELECT * FROM apns_messages WHERE status = 'queued' ORDER BY created ASC");
    $result = mysql_query("SELECT * FROM apns_messages ");
    while($element = mysql_fetch_array($result)) {

        if(empty($element['device_token'])) { continue; }

        $message = new ApnsPHP_Message($element['device_token']);
        $message->setBadge($element['badge']);
        $server->add($message);

        $result = mysql_query("UPDATE apns_messages SET status = 'delivered', modified = '".$timestamp."' WHERE pid = ".$element['pid']);
    }

	// Sleep a little...
	usleep(200000);
}

mysql_close($con);

