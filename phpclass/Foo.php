<?php
/**
 * Created by PhpStorm.
 * User: ganesh
 * Date: 7/1/15
 * Time: 2:46 PM
 */

namespace phpclass;


class Foo {

  static public function test($name){
    echo "Hello {$name}!<br>";
  }
}

call_user_func_array(__NAMESPACE__.'\Foo::test', array('Ganesh'));
call_user_func_array(__NAMESPACE__.'\Foo::test', array('Paresh'));

?>