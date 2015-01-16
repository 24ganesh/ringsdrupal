/**
 * Created by ganesh on 7/1/15.
 */

(function($){
    Drupal.behaviors.rings = {
        attach: function (context, settings){
            // code start
            $("body").click(function(){
                alert("Hello World");
            });
            //code ends
        }
    };
})(jQuery);;
