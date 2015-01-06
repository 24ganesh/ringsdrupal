<?php

/**
 * @file
 * template.php
 */

function stirrings_preprocess_page(&$variables) {
drupal_add_js(drupal_get_path('theme', 'stirrings') .'js/stirrings.js', 'file');
}
