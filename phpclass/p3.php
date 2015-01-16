<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 12/1/15
 * Time: 10:51 AM
 */


$data = "I had a box of cerial for breakfast today , and then I drank some juice.";
if(preg_match("/juice/",$data)) {
  echo "You had juice . <br>";
}
else
{
  "You had did not have juice .";
}

if(preg_match("/eggs/" , $data)) {
  echo "You had eggg";
}
else {
  echo "You had did not have eggs.<br>";
}

?>