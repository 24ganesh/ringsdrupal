<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 9/1/15
 * Time: 11:40 AM
 */

class Base {

        public $name = "Ganesh";
        protected $Age = "28";

}

class Derived extends Base {

         public function setInfo(){


           echo $this->name;
           echo $this->Age;

         }
}

$b = new Derived();
$b->setInfo();