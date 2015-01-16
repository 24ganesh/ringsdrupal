<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 9/1/15
 * Time: 3:00 PM
 */

abstract class Drawing {

        protected $x =0;
        protected $y =0;

  public abstract function area();

  public function getCoordinators() {
    echo "\$x is $this->x <br>";
    echo "\$y is $this->y <br>";
  }
}

 class Circle extends Drawing {

   private $radius;

   public function __construct($x1,$y1,$r){
     $this->radius=$r;
     $this->x=$x1;
     $this->y=$y1;
   }

   public function area(){
     return $this->radius * $this->radius * pi();
   }

   public function __toString(){
     return "Circle , at x:$this->x And y:$this->y, Radius:$this->radius";
   }
 }

$o = new Circle(12,45,22);
echo "$o <br>";
echo "Area of the Circle : " . $o->area() . "<br>";
echo $o->getCoordinators();
?>