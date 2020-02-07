$(document).ready(function () {
	$('.slider__inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider__min',

	});
	$('.slider__min').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slider__inner',
		prevArrow: $('.arrows__left'),
		nextArrow: $('.arrows__right'),
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 752,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
				{
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,				
				}
			},
		]
	});


	$(".header__menu-disable").on("click", function () {
		$(".header__menu-active").removeClass("header__menu-active"),
		$(this).addClass("header__menu-active");
	});

	$('.header__menu-btn').on("click", function () { 
		$('.header__menu-list').slideToggle();
	});
	});





