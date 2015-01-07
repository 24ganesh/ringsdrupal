/**
 * Created by ganesh on 7/1/15.
 */

(function($){
    Drupal.behaviors.rings = {
        attach: function (context, settings){
            //code starts
            $('#servings').change(function(){
                var span = $(this).next('span');
                span.text(span.data('val') * parseInt(this.value,10))
            });
        }
    };
})(jQuery);