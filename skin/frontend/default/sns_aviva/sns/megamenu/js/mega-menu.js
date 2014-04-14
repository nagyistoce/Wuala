$sns_jq(function($){
	var wrap = $('#sns_menu');
	var container = $('#sns_mainnav');
	//$('#sns_menu .container');
	$(window).resize(function(){
		setTimeout(function(){
    		$('.sns-megamenu-wrap').find('li').each(function(){
				var menucontent = $(this).find(".mega-content-wrap:first");
			 	var li = $(this);

				if( (container.outerWidth() + container.offset().left) < (li.offset().left + menucontent.outerWidth()) ){
					menucontent.css({"left": (container.outerWidth() - menucontent.outerWidth() )+"px"});
				}
			});
  		}, 200);
	});
});

$sns_jq(window).load(function(){
	if($sns_jq('.sns-megamenu-wrap').length){
		$sns_jq('.sns-megamenu-wrap').addClass('menu-loaded');
	}
})