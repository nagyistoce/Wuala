$sns_jq(document).ready(function($){
	function cleanHref(){
		var pdpath = arguments[0];
		var preg = /\/[^\/]{0,}$/ig;
		if( typeof pdpath == 'undefined') pdpath = 'null';
		if( pdpath[pdpath.length-1]=="/" ){
			pdpath = pdpath.substring(0,pdpath.length-1);
			return (pdpath.match(preg)+"/");
		}
		return pdpath.match(preg);
	}

	function quickView(){
		var qvpath = 'quickview/index/view';
		if( SNS_QV.SETTING.BASE_URL.indexOf('index.php') == -1 ) qvpath = 'index.php/quickview/index/view';
		var baseUrl = SNS_QV.SETTING.BASE_URL + qvpath;
		$.each($(arguments[0].wrapQuickView), function() {
			// Append quick view
			if( $(this).find("a.sns-btn-quickview").length <= 0 ){
				if( $(this).find("a").length > 0 ){
					link = $(this).find("a");
					var href = cleanHref(link.attr('href'))[0];
					href = (href[0] == "\/") ? href.substring(1, href.length) : href;
					href = baseUrl+"/path/" + href.replace(/^\s+|\s+$/g,""); //console.log(href);
					// product type
					href = href.replace('?options=cart', "");
					//href = href+'?is_quickview=1';
					$(this).append("<a class=\"sns-btn-quickview\" data-original-title=\""+SNS_QV.SETTING.TEXT+"\" data-toggle=\"tooltip\" href=\""+href+"\"><span>"+SNS_QV.SETTING.TEXT+"</span></a>");
				}
			}
		});
		// Insert popup for quick view
		$('.sns-btn-quickview').fancybox({
			'width'				: SNS_QV.SETTING.POP_WIDTH,
			'height'			: SNS_QV.SETTING.POP_HEIGHT,
			'autoScale'			: true,
			'padding'			: 20,
			'margin'			: 20,
			'scrolling'         : 'auto',
			'autoDimensions'    : false,
			'type'				: 'ajax',
			/*'transitionIn'		: 'elastic',*/
			/*'transitionOut'		: 'elastic',*/
			'onComplete'        : function() {}
		});
	}
	quickView({wrapQuickView : SNS_QV.SETTING.SELECTOR});
	setInterval(function(){ quickView({wrapQuickView : SNS_QV.SETTING.SELECTOR}) },1000);
});


