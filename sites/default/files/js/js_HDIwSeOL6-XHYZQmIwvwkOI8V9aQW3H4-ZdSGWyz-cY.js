(function($) {
Drupal.behaviors.rings = {
  attach: function (context, settings) {
	
 document.getElementById('edit-search-type').addEventListener('change', function () {
    var style = this.value == 'product' ? 'block' : 'none';
    document.getElementById('edit-product-wrapper').style.display = style;
    
});

	document.getElementById('edit-search-type').addEventListener('change', function () {
    var style = this.value == 'spirit' ? 'block' : 'none';
    document.getElementById('edit-spirit-wrapper').style.display = style;
    
});
	document.getElementById('edit-search-type').addEventListener('change', function () {
    var style = this.value == 'occasion' ? 'block' : 'none';
    document.getElementById('edit-occasion-wrapper').style.display = style;
    
});
	document.getElementById('edit-search-type').addEventListener('change', function () {
    var style = this.value == 'pairing' ? 'block' : 'none';
    document.getElementById('edit-pairing-wrapper').style.display = style;
    
});

  }
};
})(jQuery);


  

 



;
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
})(jQuery);;
