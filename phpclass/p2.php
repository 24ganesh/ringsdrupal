<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 12/1/15
 * Time: 10:38 AM
 */

$data = array(0,1,2,'three',4,5,'six',7,8,'nine',10);
$mod1 = preg_grep("/4|5|6/",$data);
$mod2 = preg_grep("/[0-9]/",$data,PREG_GREP_INVERT);

print_r($mod1);
echo "<br>";
print_r($mod2);

?>