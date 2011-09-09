<?php
// $Id: cron.php,v 1.36 2006/08/09 07:42:55 dries Exp $

/**
 * @file
 * Handles incoming requests to fire off regularly-scheduled tasks (cron jobs).
 */

include_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

setlocale(LC_ALL, 'ko_KR.UTF-8');

function drupal_add_existing_file($file_drupal_path,$uid=1,$status=FILE_STATUS_PERMANENT) {
  $file=(object)array(
    'filename' =>basename($file_drupal_path),
    'filepath' =>$file_drupal_path,
    'filemime' =>file_get_mimetype($file_drupal_path),
    'filesize' =>filesize("/var/www/tvchat/".$file_drupal_path),
    'uid'      =>$uid,
    'status'   =>$status,
    'timestamp'=>time()
  );
  drupal_write_record('files',$file);
  return field_file_load($file_drupal_path);
}

function convert_datetime($str){
  list($date, $time) = explode(' ', $str);
  list($year, $month, $day) = explode('-', $date);
  list($hour, $minute, $second) = explode(':', $time);

  $timestamp = mktime($hour, $minute, $second, $month, $day, $year);

  return $timestamp;
}

$operators = array();
$query = db_query('SELECT tid, name FROM term_data WHERE vid = 2');
while($element = db_fetch_object($query)) {
  $operators[$element->name] = $element->tid;
}

$genres = array();
$query = db_query('SELECT tid, name FROM term_data WHERE vid = 4');
while($element = db_fetch_object($query)) {
  $genres[$element->name] = $element->tid;
}

function node_setting($data, $operators, $genres) {    
    $node = new stdClass();

    $node->uid = 1;
    $node->name = $data[1];
    $node->title = $node->name;
    $node->body = '';
    $node->type = 'tvshow';
    $node->created = time();
    $node->changed = $node->created;
    $node->promote = 0;
    $node->sticky = 0;
    $node->format = 2;
    $node->status = 1;    // 0 - unpublished, 1 - published
    $node->language = 'en';
    $node->comment = 2;   // 0-disable,1-read only,2-read/write 

    echo 'Error: '.$node->title;

    {
      $file = new stdClass();
      $file->filepath = "sites/default/files/Upload/Logo/".$data[2].".jpg";

      if(!file_exists($file->filepath)) {
        $file->filepath = "sites/default/files/Upload/Logo/".$data[2].".png";

        if(!file_exists($file->filepath)) {
            return null;
        }
      }
      $node->field_logo_image = array(drupal_add_existing_file($file->filepath));
    }

    $node->field_operator[0]['value'] = $operators[$data[0]];
    $node->field_genre[0]['value'] = $genres[$data[3]];

    $node->field_weeks[0]['value'] = $data[4];
    $node->field_start_time[0]['value'] = sprintf('%02d:%02d',$data[5],$data[6]);
    $node->field_end_time[0]['value'] = sprintf('%02d:%02d', $data[7], $data[8]);
    $node->body = $data[9];

    // default master id = 1
    $node->field_master[0]['uid'] = '1';

    print_r($node);

    return $node;
}

function duplicate_check(){

  $_query = "SELECT title FROM node WHERE type = 'tvshow' GROUP BY title HAVING COUNT(title) > 1";
  $result = db_query($_query);

  while($node = db_fetch_object($result)) {
    $node->status = 0;
    node_save($node);
  }
}

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

      $node = node_setting($data, $operators, $genres);

      if(!isset($node)) { 
          fwrite($error, join(',',$data));
          fwrite($error, chr(10));
          continue; 
      }

      node_save($node);
      echo "NID: ".$node->nid;
      $data[] = $node->nid;
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

