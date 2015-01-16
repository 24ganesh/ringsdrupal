<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 9/1/15
 * Time: 11:54 AM
 */

class SysInfo {

  private function get_date(){
    return date("y/m/d");
  }
  private function get_phpversion() {
    return phpversion();
  }

  public function setInfo() {
    $date=$this->get_date();
    $php=$this->get_phpversion();

    echo "Today Date is $date " . "<br>";
    echo "And Your Php version is $php " . "<br>";
  }
}

$s = new SysInfo();
$s->setInfo();