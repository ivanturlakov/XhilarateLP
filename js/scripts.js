jQuery(function($){
	
	window.isTouchDevice = 'ontouchstart' in document.documentElement;
 
    //Preload
	setTimeout(function(){
        $('body').addClass('loaded');
		$("#audio").trigger('play');
    }, 5000);
	
	
	//Scroll Down
	function scrollToAnchor(aid){
       var aTag = $(".contact");
       $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }

	$(".scroll-down").click(function() {
	   scrollToAnchor('.contact');
	});
	
	
	//Audio
	$("#audio-toggle").click(function() {
	   toggleMuteAudio();
	});
	
	function toggleMuteAudio(){
       $("#audio").prop("muted",!$("#audio").prop("muted"));
	   $("#audio-toggle").toggleClass('active')
    }


	//Select
	$('.how-hear').SumoSelect();
	
	
	//Video parallax
	if($(".video").length){

		var vendorPrefix = (function () {
			var styles = window.getComputedStyle(document.documentElement, ''),
				pre = (Array.prototype.slice
					.call(styles)
					.join('') 
					.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
				)[1],
				dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
			return {
				dom: dom,
				lowercase: pre,
				css: '-' + pre + '-',
				js: pre[0].toUpperCase() + pre.substr(1)
			};
		})();

		$(window).bind("scroll", function(){
			var fxOffset = $(window).scrollTop() * .3;
			$(".video-wrapper").css(vendorPrefix.css + "transform", "translateY(" + fxOffset + "px)");
		}).trigger("scroll");
	}
	
	//Download parallax
	$('section[data-type="background"]').each(function(){
        var $bgobj = $(this);
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = 'center '+ yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });


 
});