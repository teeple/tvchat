<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */

include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

setlocale(LC_ALL, 'ko_KR.UTF-8');

$row = 1;
$file_name = './sites/default/files/Upload/'.$_GET['file'];
$output_file_name = './sites/default/files/Upload/'.$_GET['file'].'.output.csv';
$error_file_name = './sites/default/files/Upload/'.$_GET['file'].'.error.csv';

$output = fopen($output_file_name, "w+");
$error  = fopen($error_file_name, "w+");

if (($handle = fopen($file_name, "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 4096, ",")) !== FALSE) {

      $num = count($data);
      echo "<p> $num fields in line $row: <br /></p>\n";

      $node = node_load($data[0]);

      echo "BEFORE";
      echo print_r((array)$node);

      $node->body = $data[1];
      node_save($node);

      $node = node_load($data[0]);

      echo "AFTER";
      echo print_r((array)$node);

      node_load(FALSE, NULL, TRUE);

      if(!isset($node)) { 
          fwrite($error, join(',',$data));
          fwrite($error, chr(10));
          continue; 
      }

      fwrite($output, join(',',$data));
      fwrite($output, chr(10));

      for ($c=0; $c < $num; $c++) {
        echo $data[$c] . "<br />\n";
      }

      $row++;
    }
}
fclose($handle);
fclose($output);
fclose($error);

// duplicate_check();
?>

