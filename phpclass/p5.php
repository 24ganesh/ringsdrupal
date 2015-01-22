<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 22/1/15
 * Time: 3:03 PM
 */


$str = "hello world!";
$lambda = create_function('$match','return "Friend!";');
$str = preg_replace_callback('/world/',$lambda,$str);

echo $str;

//Substr : Return The part of String
$string = "0123456789";

echo "substr($string,3,4)=".substr($string,3,2);


//strpos : - Find the position of the First Occurrence of a substring in string
$match = "bcad";
$findme = "a";

$pos = strpos($match,$findme);

if($pos === false) {
  echo " The String '$findme' was not found in the string '$match'";
}
else {
  echo "The String '$findme' was found in the string '$match' ";
  echo " And exists at position $pos<br>";
}


// Strrev - Reverse a String

echo strrev($str);
?>