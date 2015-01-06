(function($) {
Drupal.behaviors.stirrings = {
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

  

 



