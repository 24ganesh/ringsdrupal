<div class="row">
<div class="span6" style="border-right: 0px solid #CCC; padding-right: 10px;">
<h2>LOGIN</h2>
<ul>
<li> Update your profile </li>
<li> Check your order history or status </li>
</ul>
<?php
print drupal_render($form['name']);
print drupal_render($form['pass']);
print drupal_render($form['form_build_id']);
print drupal_render($form['form_id']);
?>

<h2>FORGOT YOUR PASSWORD?</h2>
<ul>
<li> You will recive an email enabling you to change you password
</ul>
<a href="/user/password">Forgot your password?</a>

</div>
</div>

