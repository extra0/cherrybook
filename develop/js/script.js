$(function(){

	// слайдер на главной
	$('.main-slider__list').bxSlider({
		mode: 'fade',
		adaptiveHeight: true,
		controls: false,
		auto: true
	});

	// слайдер книги
	$('[image-slider]').bxSlider({
		controls: false,
		adaptiveHeight: true
	});


	var maxSlides = 2,
		minSlides = 2,
		slideWidth = 460;
	if ($(window).width() < 992) {
		maxSlides = 1,
		minSlides = 1;
	} else if ($(window).width() < 1200) {
		slideWidth = 400;
	}


	// двойной слайдер
	$('[double-slider]').bxSlider({
		pager: false,
		adaptiveHeight: true,
		maxSlides: maxSlides,
		minSlider: minSlides,
		slideWidth: slideWidth,
		infiniteLoop: false,
		slideMargin: 40
	});



	// табы формата
	$('.format-block__tab-list-item').each(function(i){ $(this).attr('data-tab', i);});
	$('.format-block__tab-block').each(function(i){ $(this).attr('data-tab', i);});

	$('.format-block__tab-list-item').on('click', function(){
		$('.format-block__tab-list-item, .format-block__tab-block').removeClass('active');
		$(this).addClass('active');
		$('.format-block__tab-block[data-tab='+ $(this).attr('data-tab') +']').addClass('active');
	});
	

	// toggle class active
	$('[data-toggle-class]').on('click', function(){
		$(this).toggleClass('active');
		$(''+ $(this).attr('data-toggle-class')+'').toggleClass('active');
	});

	// collapse
	$('[data-collapse]').on('click', function(){
		$(this).toggleClass('active');
		$(''+ $(this).attr('data-collapse')+'').slideToggle(200);
	});


	// определяем мобильный ли браузер
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	// на мобильных скрываем видео
	if (isMobile.any()) {
		$('[data-mob]').on('click', function(){
			if (!$(this).hasClass('active')) {
				$('[data-mob]').removeClass('active')
				$(this).addClass('active');
				return false;
			}
		});
	}



});