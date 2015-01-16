<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 9/1/15
 * Time: 10:52 AM
 */

class Person {

  public $name = "";
}

$p1 = new Person();
$p1 -> name =  "Ganesh";

$p2 = new Person();
$p2 -> name = "Paresh";


echo $p1 -> name ."<br>";
echo $p2 -> name ."<br>";
