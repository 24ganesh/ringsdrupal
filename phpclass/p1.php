<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 8/1/15
 * Time: 5:37 PM
 */


$str = "Hi Ganesh Lad";
$case = strtoupper($str);
echo $case . "<br>";


$str1 = "Hi Ganesh LaD";
$case1 = strtolower($str1);
echo $case1."<br>";


$str2 = " a knot";
$case3 = ucwords($str2);
echo $case3."<br>";

$str4 = "How to cut a string down to size";
$case4 = substr($str4 , -1);
echo $case4."<br>";


$str5 = "How to cut a string down to size";
$case5 = substr($str5, strpos($str5, "string"), 6);
echo $case5;

$input = array("Neo","Morpheus","Trinity","Cypher","Tank");
$rand_key = array_rand($input,2);

echo $input[$rand_key[0]] . "<br>";
echo $input[$rand_key[1]] . "<br>";


function random_array($arr, $num=1) {
  shuffle($arr);
  $r = array();
  for($i=0;$i<$num;$i++){
    $r[] = $arr[$i];
  }

  return $num == 1 ? $r[0] : $r;
}

$a = array("Apple","Banana","Cherry");
print_r(random_array($a));
print_r(random_array($a,2));


?>