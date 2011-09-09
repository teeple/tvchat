<?php
/**
 *
 * @file
 * Introduction to TV Social Service with heterogenious clients 
 * using Mobile Tools API
 *
 */
?>
<?php
require_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);
    
$device = mobile_tools_get_device();
$body = "device type:".$device["type"].", group:".$device["group"]; 
if(strcmp($device["group"],"iphone") != 0) {
    header('Location: http://newbiz.uangel.com/tvchat/intro.php');
} else {
    $body = "iPhone Teeple 소개 페이지입니다";
}
?>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
</style>
</head>

<body>
<table width="100%" border="0" cellspacing="0" cellpadding="5">
  <tr>
    <td valign="top" align="center">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <?php if ($header): ?>
        <tr>
          <td valign="top" class="htmlmail-header">
          <?php print $header; ?>
          </td>
        </tr>
        <?php endif; ?>
        <tr>
          <td valign="top" class="htmlmail-body">
          <?php print $body; ?>
          </td>
        </tr>
        <?php if ($footer): ?>
        <tr>
          <td valign="top" class="htmlmail-footer">
            <?php print $footer; ?>
          </td>
        </tr>
        <?php endif; ?>
     </table>
   </td>
 </tr>
</table>
</body>
</html>

