
	function resizeCallback(i, width) 
	{
		if (width >= 960)
		{
			$('.horiz_container_outer').css('width','780px');
			$('.horiz_container_outer_large').css('width','916px');
			$('.scrollbar').css('width','794px');
			$('.scrollbar_large').css('width','934px');
			$('.track').css('width','795px');
			$('.track_large').css('width','935px');
			$('#horiz_container5' ).css('width','956px');
		}
		else if (width >= 768)
		{
			$('.horiz_container_outer').css('width','588px');
			$('.horiz_container_outer_large').css('width','728px');
			$('.scrollbar').css('width','599px');
			$('.scrollbar_large').css('width','736px');
			$('.track').css('width','599px');
			$('.track_large').css('width','735px');
			$('#horiz_container5' ).css('width','957px');
		}
		else 
		{
			$('.horiz_container_outer').css('width','440px');
			$('.horiz_container_outer_large').css('width','440px');
			$('.scrollbar').css('width','455px');
			$('.scrollbar_large').css('width','455px');
			$('.track').css('width','455px');
			$('.track_large').css('width','455px');
			$('#horiz_container5' ).css('width','957px');
		}
		$('#horiz_container_outer5').horizontalScroll();
		$('#horiz_container_outer1').horizontalScroll();
		$('#horiz_container_outer2').horizontalScroll();
		$('#horiz_container_outer3').horizontalScroll();
		$('#horiz_container_outer4').horizontalScroll();


	}
		
	var ADAPT_CONFIG = {
	  path: 'css/',
	  dynamic: true,
	  callback: resizeCallback,
	  range: [
	    '0px    to 767px  = style_480.css',
	    '768px  to 959x  = style_768.css',
	    '960px			  = style_960.css'
	  ]
	};







