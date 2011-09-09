<?php
if($_FILES["userfile"]["error"] > 0) {
//	echo  "Error: " . $_FILES["userfile"]["error"] . "<br />";
    echo "ERROR";
} else {
	$uploadDir = 'sites/default/files/';
	$file = basename($_FILES['userfile']['name']);
	$uploadfile = $uploadDir . $file;

	if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
      	echo $uploadfile;
	} else {
      	echo "ERROR";
	}
}

?>
