<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 12/1/15
 * Time: 11:02 AM
 */

$data = "The party will start at 10:30 pm and run untill 12:30 am";
preg_match_all('/(\d+:\d+)\s*(am|pm)/' , $data,$match, PREG_PATTERN_ORDER);
echo "Full : ";
print_r($match[0]);
echo "<br>Raw: ";
print_r($match[1]);
echo "<br>Tags: ";
print_r($match[2]);

$data1 = "The Party will start at 10:30 pm and run untill 12:30 am";
preg_match_all('/(\d+:\d+)\s*(am|pm)/',$data1,$match1,PREG_SET_ORDER);
echo "First :<br>";
echo $match1[0][0].",".$match1[0][1].",".$match1[0][2]."<br>";
echo "Second: <br>";
echo $match1[1][0].",".$match1[1][1].",".$match1[1][2]."<br>";

$data2 = "The cat likes to sit on the fence. He also likes to climb the tree.";
$find = "/the/";
$replace = "a";//1.replace single word
echo "$data2<br>";
echo preg_replace($find,$replace,$data2);//Create array
$find2 = array('/the/','/cat/');
$replace2 = array('a','dog');
echo preg_replace($find2,$replace2,$data2,1);
$count = 0;
echo preg_replace($find2,$replace2,$data2,-1,$count);
echo "<br> You have made $count replacements<br>";

$str = "I like goats, I likes cats, He likes dogs";
$chars = preg_split('//',$str);
print_r($chars) ."<br>";
$words = preg_split('//',$str);
print_r($words)."<br>";
$sentances = preg_split('/\./',$str,-1,PREG_SPLIT_NO_EMPTY);
print_r($sentances);


?>