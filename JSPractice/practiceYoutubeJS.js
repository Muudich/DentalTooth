$(document).ready(function() {
	$('.hamburger').on('click', function(){
		$('.mobile-menu').addClass('is-active');
	});

	$('.mobile-menu-close').on('click', function(){
		$('.mobile-menu').removeClass('is-active');
	});

	// reviews swiper
	const reviewsSwiper = new Swiper('.reviews-swiper', {
		loop: true,
		navigation: {
		  nextEl: '.reviews-swiper .swiper-button-next',
		  prevEl: '.reviews-swiper .swiper-button-prev',
		},
	});


});