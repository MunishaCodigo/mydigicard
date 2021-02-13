$(window).on("load", function() {
	var preload = $('.preloader');
	preload.find('.spinner').fadeOut(function(){
		preload.fadeOut();
	});
});

window.addEventListener('load', function()  {
	'use strict';
	var width = $(window).width();
	$(window).on('resize', function(){
		var width = $(window).width();


		if((width < 1199)) {
			$('.card-inner').removeClass('hidden');
			$('.card-inner').removeClass('fadeOutLeft');
			$('.card-inner').removeClass('rotateOutUpLeft');
			$('.card-inner').removeClass('rollOut');
			$('.card-inner').removeClass('jackOutTheBox');
			$('.card-inner').removeClass('fadeOut');
			$('.card-inner').removeClass('fadeOutUp');
			$('.card-inner').removeClass('animated');

			$(window).on('scroll', function(){
				var scrollPos = $(window).scrollTop();
				$('.top-menu ul li a').each(function () {
					var currLink = $(this);
					var refElement = $(currLink.attr("href"));
					if (refElement.offset().top - 76 <= scrollPos) {
						$('.top-menu ul li').removeClass("active");
						currLink.closest('li').addClass("active");
					}
				});
			});

			$('.card-inner .card-wrap').slimScroll({destroy: true});
			$('.card-inner .card-wrap').attr('style', '');
		}
		else {
			$($('.top-menu li.active a').attr('href')).addClass('active');
			if((!$('.page').hasClass('new-skin')) && (width > 1199)) {
				$('.card-inner .card-wrap').slimScroll({
					height: '570px'
				});
			}
		}
	});
	
	

	
	if((width < 1199) & $('#home-card').length) { 
		$(window).on('scroll', function(){
			var scrollPos = $(window).scrollTop();
			$('.top-menu ul li a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.offset().top - 76 <= scrollPos) {
					$('.top-menu ul li').removeClass("active");
					currLink.closest('li').addClass("active");
				}
			});
		});
	}
	
	

	if((!$('.page').hasClass('new-skin')) && (width > 1199)) {
		$('.card-inner .card-wrap').slimScroll({
			height: '570px'
		});
	}
	
	

	$('.lnks').on('click', '.lnk.discover', function(){
		$('.top-menu a[href="#contacts-card"]').trigger('click');
	});
	

//	var $container = $('.grid-items');
//	$container.imagesLoaded(function() {
//		$container.isotope({
//			percentPosition: true,
//			itemSelector: '.grid-item'
//		});
//	});
	

//	$('.filter-button-group').on( 'mouseenter', '.f_btn', function(e) {
//		e.preventDefault();
//		console.log('whys');
//		var filterValue = $(this).find('input').val();
//		$container.isotope({ filter: '.'+filterValue });
//		$('.filter-button-group .f_btn').removeClass('active');
//		$(this).addClass('active');
//	
//    return false;
//	});


//	if(/\.(?:jpg|jpeg|gif|png)$/i.test($('.gallery-item:first a').attr('href'))){
//		$('.gallery-item a').magnificPopup({
//			gallery: {
//				enabled: true
//			},
//			type: 'image',
//			closeBtnInside: false,
//			mainClass: 'mfp-fade'
//		});
//	}
//
	//$('.has-popup-image').magnificPopup({
	//	type: 'image',
	//	closeOnContentClick: true,
	//	mainClass: 'mfp-fade',
	//	image: {
	//		verticalFit: true
	//	}
	//});

	


	$(window).on('resize', function(){

		var skills_dotted = $('.skills-list.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if(skills_dotted.length){
			skills_dotted.find('.percentage .da').css({'width':skills_dotted_w+1});
		}



		var revs_slider = $(".revs-carousel .owl-carousel");
		revs_slider.find('.revs-item').css({'max-width':revs_slider.width()});
	});



	function skills(){
		var skills_dotted = $('.skills-list.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if(skills_dotted.length){
			skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage .da').css({'width':skills_dotted_w});
		}
	}
	setTimeout(skills, 1000);


	var skills_circles = $('.skills-list.circles .progress');
	if(skills_circles.length){
		skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
	}


	$('.content .title').each(function(index) {
	    var title = $(this).text().split(' ');
	    if(title.length>1){
		    var firstWord = title[0];
		    var replaceWord = '<span class="first-word">' + firstWord + '</span>';
		    var newString = $(this).html().replace(firstWord, replaceWord);
		    $(this).html(newString);
		} else {
			$(this).html('<div class="first-letter">'+ $(this).html() + '</div>');
		}
	});

});
