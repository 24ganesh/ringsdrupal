<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 9/1/15
 * Time: 1:33 PM
 */

class Math {

        CONST PI = 3.1415;
  public function getPI(){
    echo self::PI;
  }
}

$math = new Math();
echo $math::PI."<br>";
echo $math->getPI();