<?php

/**
 * @file
 * template.php
 */


function rings_preprocess_html(&$variables) {
    $options = array(
        'group' => JS_THEME,
    );
    drupal_add_js(drupal_get_path('theme', 'rings'). '/js/rings.js', $options);
}

