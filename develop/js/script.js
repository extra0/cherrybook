$(function(){

	// вызов фенсибокса
	$('[fancybox]').fancybox();


	// слайдер на главной
	$('.main-slider__list').bxSlider({
		mode: 'fade',
		controls: false,
		auto: true
	});


});