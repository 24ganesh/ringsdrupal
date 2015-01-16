<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 9/1/15
 * Time: 11:10 AM
 */

class Circle {

    public $radius;

  function setRadius($radius) {
    $this -> radius = $radius;
  }

  function setArea() {
    return $this -> radius * $this -> radius * M_PI;
  }
}

$r1 = new Circle();
$r1 -> setRadius(5);


echo $r1 -> setArea();

?>