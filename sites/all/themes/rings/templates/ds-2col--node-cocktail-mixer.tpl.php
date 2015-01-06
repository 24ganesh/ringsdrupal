<?php

/**
 * @file
 * Display Suite 2 column template.
 */
?>
<<?php print $layout_wrapper; print $layout_attributes; ?> class="ds-2col <?php print $classes;?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <<?php print $left_wrapper ?> class="group-left<?php print $left_classes; ?>">
    <?php print $left; ?>
  </<?php print $left_wrapper ?>>

  <<?php print $right_wrapper ?> class="group-right<?php print $right_classes; ?>">
    <div id="cocktails_overview" class="pull-right">
      <ul id="cocktails-tabs" class="nav nav-tabs">
        <li class="active"><a href="#cocktailsbody" class="overview" data-toggle="tab">Overview</a> </li>
        <li><a href="#cocktailsuggested" class="cocktails suggest" data-toggle="tab">Suggested Spirits</a> </li>
      </ul>
      <div class="tab-content" id="cocktails-product-views">
        <div class="tab-pane active" id="cocktailsbody">
          <?php print render($content['body'])?>
        </div>
        <div class="tab-pane" id="cocktailsuggested">
          <?php print render($content['field_cocktails_suggested']) ?>
        </div>
      </div>
    </div>
  </<?php print $right_wrapper ?>>

</<?php print $layout_wrapper ?>>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
