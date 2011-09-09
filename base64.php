<?php
$filename = "/var/www/tvchat/tree.png";
$file1 = fopen($filename, "rb");
$file2 = fopen("/var/www/tvchat/base64.txt", "wb");
$content = fread($file1, filesize($filename));
$content_base64 = fwrite($file2, base64_encode($content));
fclose($file2);
fclose($file1);


$temp = "picture=%22%2F9j%2F4AAQ59ZivvtMMaSWV19mJjyFf92j5wc4%2B%2Fjqeme%2B%0D%0AKKK60klocsm29TF8Qaze6PDFcQMC1xcJF2Q%3D%3D%22";

echo "URL DECODE:".urldecode($temp);

echo "JSON DECODE".json_decode(urldecode($temp));

echo "\n";

$test = '"%2F9j%2F4AAQSkZJRgABAQAAAQABAAD%2F4QBYRXhpZgAATU0AKgAAAAgAAgESAAMAAAAB%0D%0AAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAyKAD%0D%0AAAQAAAABAAAAyAAAAAD%2F2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB%0D%0AAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH%2F2wBDAQEBAQEBAQEB%0D"';

echo "TTTT:".str_replace('"', '', $test);

?>

