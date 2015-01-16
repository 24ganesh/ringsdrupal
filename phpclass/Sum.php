<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 9/1/15
 * Time: 12:02 PM
 */

class Sum {

  public $su;

  public function getSum() {
    $su= array(1,2,3,4);
    $args = func_num_args();

    foreach($args as $arg) {
      $su += $arg;
    }
    return $su;
  }
}

$s = new Sum();
echo $s->getSum() ."<br>";
echo $s->getSum(5) . "<br>";
echo $s->getSum(4,7). "<br>";
echo $s->getSum(4,7,8) ."<br>";
