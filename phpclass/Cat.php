<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 9/1/15
 * Time: 1:46 PM
 */

class Cat {

   public $name;
   public $age;

  public function __construct($name,$age){
    $this->name=$name;
    $this->age=$age;
  }

  public function __toString(){
    return "Cat : $this->name , $this->age";
  }
}

$missy = new Cat('Missy',7);
$lucky = new Cat('Lucky',6);

echo $missy ."<br>";
echo $lucky . "<br>";