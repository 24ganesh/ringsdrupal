<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 9/1/15
 * Time: 11:16 AM
 */

class Rectangle {

     public $lenght;
     public $width;

  function setRectangle($length,$width){
    $this->lenght=$length;
    $this->width=$width;
  }

  function setArea(){
    return $this->lenght * $this->width;
  }
}

$r = new Rectangle();
$r->setRectangle(4,6);

echo $r->setArea();
?>