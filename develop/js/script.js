$(function(){

	// слайдер на главной
	$('.main-slider__list').bxSlider({
		mode: 'fade',
		adaptiveHeight: true,
		controls: false,
		auto: true
	});

	// слайдер книги
	$('.form-block__inner-slider').bxSlider({
		controls: false,
		auto: true,
		adaptiveHeight: true
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