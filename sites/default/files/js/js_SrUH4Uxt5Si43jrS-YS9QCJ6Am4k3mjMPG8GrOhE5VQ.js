/*!
	Colorbox 1.5.14
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(z+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){z=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),z=W.index(_.el),-1===z&&(W=W.add(_.el),z=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),L=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(L),D=T.height()+k.height()+b.outerHeight(!0)-b.height(),j=C.width()+H.width()+b.outerWidth(!0)-b.width(),A=L.outerHeight(!0),N=L.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-N-j,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-A-D,L.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){y||(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),S=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),I=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),R=n("button","Slideshow"),S),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(I).add(R)),e.body&&!y.parent().length&&t(e.body).append(v,y.append(x,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-A-D:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-N-j:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-N-j,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-A-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){S.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=new Image,t(U).addClass(Z+"Photo").bind("error",function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;t.each(["alt","longdesc","aria-describedby"],function(e,i){var n=t(_.el).attr(i)||t(_.el).attr("data-"+i);n&&U.setAttribute(i,n)}),_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[z+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,L,M,S,F,I,R,K,P,B,O,_,D,j,A,N,z,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[z+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){R.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),R.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,R.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;if(e=e||{},t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;return o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-j+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-D+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-N-j-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-N-j,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-A-D-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-A-D,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+N+j,height:_.h+A+D,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+N+j+"px",x[0].style.height=_.h+A+D+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-N-j),t.innerWidth&&(_.w=a(t.innerWidth,"x")),L.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-A-D),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=L.scrollTop(),L.css({height:"auto"}),_.h=L.height()),L.css({height:_.h}),e&&L.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||L.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||L.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");L.remove(),L=n(se,"LoadedContent").append(i),L.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),S.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),L.show(),a>1?("string"==typeof _.get("current")&&I.html(_.get("current").replace("{current}",z+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>z?"show":"hide"]().html(_.get("next")),P[_.get("loop")||z?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=e.createElement("iframe"),"frameBorder"in n&&(n.frameBorder=0),"allowTransparency"in n&&(n.allowTransparency="true"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",o).appendTo(L),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[z+1])&&(z=h(1),f(W[z]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||z)&&(z=h(-1),f(W[z]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),L.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function($) {
  Drupal.behaviors.custom_search = {
    attach: function(context) {

      if (!Drupal.settings.custom_search.solr) {
        // Check if the search box is not empty on submit
        $('form.search-form', context).submit(function(){
          var $this = $(this);
          var box = $this.find('input.custom-search-box');
          if (box.val() != undefined && box.val() == '') {
            $this.find('input.custom-search-box').addClass('error');
            return false;
          }
          // If basic search is hidden, copy or value to the keys
          if ($this.find('#edit-keys').parents('div.element-invisible').attr('class') == 'element-invisible') {
            $this.find('#edit-keys').val($this.find('#edit-or').val());
            $this.find('#edit-or').val('');
          }
          return true;
        });
      }

      // Search from target
      $('form.search-form').attr('target', Drupal.settings.custom_search.form_target);

      // Displays Popup.
      $('form.search-form input.custom-search-box', context).bind('click focus', function(e){
        var $parentForm = $(this).parents('form');
        // check if there's something in the popup and displays it
        var popup = $parentForm.find('fieldset.custom_search-popup');
        if (popup.find('input,select').length && !popup.hasClass('opened')) {
          popup.fadeIn().addClass('opened');
        }
        e.stopPropagation();
      });
      $(document).bind('click focus', function(){
        $('fieldset.custom_search-popup').hide().removeClass('opened');
      });

      // Handle checkboxes
      $('.custom-search-selector input:checkbox', context).each(function(){
        var el = $(this);
        if (el.val() == 'c-all') {
          el.change(function(){
            $(this).parents('.custom-search-selector').find('input:checkbox[value!=c-all]').attr('checked', false);
          });
        }
        else {
          if (el.val().substr(0,2) == 'c-') {
            el.change(function(){
              $('.custom-search-selector input:checkbox').each(function(){
                if ($(this).val().substr(0,2) == 'o-') {
                  $(this).attr('checked', false);
                }
              });
              $(this).parents('.custom-search-selector').find('input:checkbox[value=c-all]').attr('checked', false);
            });
          } else {
            el.change(function(){
              $(this).parents('.custom-search-selector').find('input:checkbox[value!=' + el.val() + ']').attr('checked', false);
            });
          }
        }
      });

      // Reselect types and terms in advanced search
      var edit_keys = $('#edit-keys').val();
      if(edit_keys) {
        // types
        var pos = edit_keys.indexOf('type:');
        if (pos != -1) {
          var pos2 = edit_keys.indexOf(' ', pos);
          if (pos2 == -1) {
            pos2 = edit_keys.length;
          }
          var types = edit_keys.substring(pos + 5,pos2);
          types = types.split(',');
          for (var i = 0; i < types.length; i++) {
            $('.search-form input:checkbox[value=' + types[i] + ']').attr('checked', true);
          }
        }
        // terms
        var pos = edit_keys.indexOf('term:');
        if (pos != -1) {
          var pos2 = edit_keys.indexOf(' ', pos);
          if (pos2 == -1) {
            pos2 = edit_keys.length;
          }
          var terms = edit_keys.substring(pos + 5, pos2);
          terms = terms.split(',');
          for (var i = 0; i < terms.length; i++) {
            $('#edit-term option[value=' + terms[i] + ']').attr('selected', true);
          }
        }
        // languages
        var pos = edit_keys.indexOf('language:');
        if (pos != 1) {
          var pos2 = edit_keys.indexOf(' ', pos);
          if (pos2 == -1) {
            pos2 = edit_keys.length;
          }
          var languages = edit_keys.substring(pos + 9,pos2);
          languages = languages.split(',');
          for (var i = 0; i < languages.length; i++) {
            $('.search-advanced #edit-language-' + languages[i]).attr('checked', true);
          }
        }
      }

      var popup = $('fieldset.custom_search-popup:not(.custom_search-processed)', context).addClass("custom_search-processed");
      popup.click(function(e){
        e.stopPropagation();
      })
      popup.append('<a class="custom_search-popup-close" href="#">' + Drupal.t('Close') + '</a>');
      $('a.custom_search-popup-close').click(function(e){
        $('fieldset.custom_search-popup.opened').hide().removeClass('opened');
        e.preventDefault();
      });

    }
  }
})(jQuery);
;

(function ($) {
namespace('Drupal.media.browser');

Drupal.behaviors.mediaLibrary = {
  attach: function (context, settings) {
    var library = new Drupal.media.browser.library(Drupal.settings.media.browser.library);
    $('#media-browser-tabset').bind('tabsshow', function (event, ui) {
      if (ui.tab.hash === '#media-tab-library') {
        // Grab the parameters from the Drupal.settings object
        var params = {};
        for (var parameter in Drupal.settings.media.browser.library) {
          params[parameter] = Drupal.settings.media.browser.library[parameter];
        }
        library.start($(ui.panel), params);
        $('#scrollbox').bind('scroll', library, library.scrollUpdater);
      }
    });
  }
};

Drupal.media.browser.library = function (settings) {
  this.settings = Drupal.media.browser.library.getDefaults();
  $.extend(this.settings, settings);

  this.done = false; // Keeps track of if the last request for media returned 0 results.

  this.cursor = 0; // keeps track of what the last requested media object was.
  this.mediaFiles = []; // An array of loaded media files from the server.
  this.selectedMediaFiles = [];
};

Drupal.media.browser.library.getDefaults = function () {
  return {
    emtpyMessage: Drupal.t('There is nothing in your media library. Select the Upload tab above to add a file.'),
    limit: 15
  };
};

Drupal.media.browser.library.prototype.start = function (renderElement, params) {
  this.renderElement = renderElement;
  this.params = params;
  // Change the behavior dependent on multiselect
  if (params.multiselect) {
    this.clickFunction = this.multiSelect;
  } else {
    this.clickFunction = this.singleSelect;
  }
  this.loadMedia();
};

/**
 * Appends more media onto the list
 */
Drupal.media.browser.library.prototype.loadMedia = function () {
  var that = this;
  $('#status').text(Drupal.t('Loading...')).show();
  $.extend(this.params, {start: this.cursor, limit: this.settings.limit});

  var gotMedia = function (data, status) {
    $('#status').text('').hide();
    if (data.media.length < that.params.limit) {
      // We remove the scroll event listener, nothing more to load after this.
      $('#scrollbox').unbind('scroll');
    }
    that.mediaFiles = that.mediaFiles.concat(data.media);
    that.render(that.renderElement);
    // Remove the flag that prevents loading of more media
    that.loading = false;
  };

  var errorCallback = function () {
    alert(Drupal.t('Error getting media.'));
  };

  $.ajax({
    url: this.settings.getMediaUrl,
    type: 'GET',
    dataType: 'json',
    data: this.params,
    error: errorCallback,
    success: gotMedia
  });
};

Drupal.media.browser.library.prototype.scrollUpdater = function (e){
  if (!e.data.loading) {
    var scrollbox = $('#scrollbox');
    var scrolltop = scrollbox.attr('scrollTop');
    var scrollheight = scrollbox.attr('scrollHeight');
    var windowheight = scrollbox.attr('clientHeight');
    var scrolloffset = 20;

    if(scrolltop >= (scrollheight - (windowheight + scrolloffset))) {
      // Set a flag so we don't make multiple concurrent AJAX calls
      e.data.loading = true;
      // Fetch new items
      e.data.loadMedia();
    }
  }
};

/**
 * Fetches the next media object and increments the cursor.
 */
Drupal.media.browser.library.prototype.getNextMedia = function () {
  if (this.cursor >= this.mediaFiles.length) {
    return false;
  }
  var ret = this.mediaFiles[this.cursor];
  this.cursor += 1;
  return ret;
};

Drupal.media.browser.library.prototype.render = function (renderElement) {

  if (this.mediaFiles.length < 1) {
    $('<div id="media-empty-message" class="media-empty-message"></div>').appendTo(renderElement)
      .html(this.emptyMessage);
    return;
  }
  else {
    var mediaList = $('#media-browser-library-list', renderElement);
    // If the list doesn't exist, bail.
    if (mediaList.length === 0) {
      throw('Cannot continue, list element is missing');
    }
  }

  while (this.cursor < this.mediaFiles.length) {
    var mediaFile = this.getNextMedia();

    var data = {};
    data.obj = this;
    data.file = mediaFile;

    var listItem = $('<li></li>').appendTo(mediaList)
      .attr('id', 'media-item-' + mediaFile.fid)
      .html(mediaFile.preview)
      .bind('click', data, this.clickFunction);
  }
};

Drupal.media.browser.library.prototype.mediaSelected = function (media) {
  Drupal.media.browser.selectMedia(media);
};

Drupal.media.browser.library.prototype.singleSelect = function (event) {
  var lib = event.data.obj;
  var file = event.data.file;
  event.preventDefault();
  event.stopPropagation();

  $('.media-item').removeClass('selected');
  $('.media-item', $(this)).addClass('selected');
  lib.mediaSelected([event.data.file]);
  return false;
}

Drupal.media.browser.library.prototype.multiSelect = function (event) {
  var lib = event.data.obj
  var file = event.data.file;
  event.preventDefault();
  event.stopPropagation();

  // Turn off or on the selection of this item
  $('.media-item', $(this)).toggleClass('selected');

  // Add or remove the media file from the array
  var index = $.inArray(file, lib.selectedMediaFiles);
  if (index == -1) {
    // Media file isn't selected, add it
    lib.selectedMediaFiles.push(file);
  } else {
    // Media file has previously been selected, remove it
    lib.selectedMediaFiles.splice(index, 1);
  }

  // Pass the array of selected media files to the invoker
  lib.mediaSelected(lib.selectedMediaFiles);
  return false;
}

}(jQuery));
;

(function ($) {
namespace('Drupal.media.browser');

Drupal.media.browser.selectedMedia = [];
Drupal.media.browser.mediaAdded = function () {};
Drupal.media.browser.selectionFinalized = function (selectedMedia) {
  // This is intended to be overridden if a callee wants to be triggered
  // when the media selection is finalized from inside the browser.
  // This is used for the file upload form for instance.
};

Drupal.behaviors.experimentalMediaBrowser = {
  attach: function (context) {
    if (Drupal.settings.media.selectedMedia) {
      Drupal.media.browser.selectMedia(Drupal.settings.media.selectedMedia);
      // Fire a confirmation of some sort.
      Drupal.media.browser.finalizeSelection();
    }
    $('#media-browser-tabset').tabs({
      load: Drupal.media.browser.resizeIframe
    });

    $('.media-browser-tab').each( Drupal.media.browser.validateButtons );

    Drupal.media.browser.selectErrorTab();

  }
  // Wait for additional params to be passed in.
};

Drupal.media.browser.launch = function () {

};

Drupal.media.browser.validateButtons = function() {
  // The media browser runs in an IFRAME. The Drupal.media.popups.mediaBrowser()
  // function sets up the IFRAME and "OK" and "Cancel" buttons that are outside
  // of the IFRAME, so that their click handlers can destroy the IFRAME while
  // retaining information about what media items were selected. However,
  // Drupal UI convention is to place all action buttons on the same "line"
  // at the bottom of the form, so if the form within the IFRAME contains a
  // "Submit" button or other action buttons, then the "OK" and "Cancel"
  // buttons below the IFRAME break this convention and confuse the user.
  // Therefore, we add "Submit" and "Cancel" buttons inside the IFRAME, and
  // have their click action trigger the click action of the corresonding
  // "OK" and "Cancel" buttons that are outside the IFRAME. media.css contains
  // CSS rules that hide the outside buttons.
  //
  // We don't add a "Submit" button if the form already has one, since in these
  // cases, another round-trip to the server is needed before the user's
  // selection is finalized. For these cases, when the form's real Submit
  // button is clicked, the server either returns another form for the user to
  // fill out, or else a completion page that contains or sets the
  // Drupal.media.browser.selectedMedia variable. If the latter, then
  // Drupal.media.popups.mediaBrowser.mediaBrowserOnLoad() auto-triggers the
  // "OK" button action to finalize the selection and remove the IFRAME.
  //
  // @todo An alternate, less hacky solution would be most welcome.
  if (!($('.form-submit', this).length > 0)) {
    $('<a class="button button-yes fake-ok">' + Drupal.t('Submit') + '</a>').appendTo(this).bind('click', Drupal.media.browser.submit);
    if (!($('.fake-cancel', this).length > 0)) {
      $('<a class="button button-no fake-cancel">' + Drupal.t('Cancel') + '</a>').appendTo(this).bind('click', Drupal.media.browser.submit);
    }
  } else if (!($('.fake-cancel', this).length > 0)) {
    var parent = $('.form-actions', this);
    if (!parent.length) {
      parent = $('form > div', this);
    }
    $('<a class="button button-no fake-cancel">' + Drupal.t('Cancel') + '</a>').appendTo(parent).bind('click', Drupal.media.browser.submit);
  }
};

Drupal.media.browser.submit = function () {
  // @see Drupal.media.browser.validateButtons().
  var buttons = $(parent.window.document.body).find('#mediaBrowser').parent('.ui-dialog').find('.ui-dialog-buttonpane button');
  if ($(this).hasClass('fake-cancel')) {
    buttons[1].click();
  } else {
    buttons[0].click();
  }
}

Drupal.media.browser.selectMedia = function (selectedMedia) {
  Drupal.media.browser.selectedMedia = selectedMedia;
};

Drupal.media.browser.finalizeSelection = function () {
  if (!Drupal.media.browser.selectedMedia) {
    throw new exception(Drupal.t('Cannot continue, nothing selected'));
  }
  else {
    Drupal.media.browser.selectionFinalized(Drupal.media.browser.selectedMedia);
  }
};

Drupal.media.browser.resizeIframe = function (event) {
  var h = $('body').height();
  $(parent.window.document).find('#mediaBrowser').height(h);
};

Drupal.media.browser.selectErrorTab = function() {
  //Find the ID of a tab with an error in it
  var errorTabID = $('#media-browser-tabset')
    .find('.error')
    .parents('.media-browser-tab')
    .attr('id');

  if (errorTabID !== undefined) {
    //Find the Tab Link with errorTabID
    var tab = $('a[href="#' + errorTabID + '"]');
    //Find the index of the tab
    var index = $('#media-browser-tabset a').index(tab);
    //Select the tab
    $('#media-browser-tabset').tabs('select', index)
  }
}

}(jQuery));
;
;(function ($) {

  Drupal.behaviors.less = {
    attach: function (context, settings) {
      
      var watched_files = [],
          $watched_links;
      
      $watched_links = $('head link[src$=".less"]', context).each(function () {
        
        // Only grab the portion of the url up to, but not including, the '?'.
        watched_files.push($(this).attr('href').match(/^([^\?]+)/)[1]);
      });
      
      if (watched_files.length > 0) {
        
        // Modeled after example @ http://www.erichynds.com/javascript/a-recursive-settimeout-pattern/
        var poller = {
         
          failed_requests: 0,
        
          // starting interval in milliseconds
          interval: 500,
        
          // kicks off the setTimeout
          init: function(){
            setTimeout(
              $.proxy(this.getData, this), // ensures 'this' is the poller obj inside getData, not the window object
              this.interval
            );
          },
         
          // get AJAX data + respond to it
          getData: function() {
            var self = this;
       
            $.ajax({
              type: 'POST',
              url: settings.basePath + 'ajax/less/watch',
              data: {
                less_files: watched_files
              },
              timeout: self.interval,
              
              // On success, reset failed request counter and update style links.
              success: function ( response ) {
                
                self.failed_requests = 0;
                
                for (i in response) {
                  
                  var old_file = response[i].old_file,
                      new_file = response[i].new_file;
                  
                  // Math.random() at the end forces a reload of the file.
                  $('head link[href^="' + old_file + '"]', context).replaceWith($('<link type="text/css" rel="stylesheet" media="all" />').attr('href', new_file + '?' + Math.random()));
                  
                  watched_files[watched_files.indexOf(old_file)] = new_file;
                }
              },
              
              // On failure, count failed request and increase interval.
              error: function () {
                
                ++self.failed_requests;
         
                self.interval += 500;
              },
              
              // On success or failure, restart
              complete: function () {
                
                if( ++self.failed_requests < 10 ){
                  self.init();
                }
              }
            });
          }
        };
         
        poller.init();
        
      }
      
    }
  };

})(jQuery);;
