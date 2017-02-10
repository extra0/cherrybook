$(function(){

	// вызов фенсибокса
	$('[fancybox]').fancybox();


	// слайдер на главной
	$('.main-slider__list').bxSlider({
		mode: 'fade',
		controls: false,
		auto: true
	});

	// слайдер книги
	$('.form-block__inner-slider').bxSlider({
		controls: false,
		auto: true,
		autoHeight: true
	});

	// табы формата
	$('.format-block__tab-list-item').each(function(i){ $(this).attr('data-tab', i);});
	$('.format-block__tab-block').each(function(i){ $(this).attr('data-tab', i);});

	$('.format-block__tab-list-item').on('click', function(){
		$('.format-block__tab-list-item, .format-block__tab-block').removeClass('active');
		$(this).addClass('active');
		$('.format-block__tab-block[data-tab='+ $(this).attr('data-tab') +']').addClass('active');
	});

});