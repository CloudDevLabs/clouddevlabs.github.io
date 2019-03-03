$(document).ready(function () {

	new WOW().init();

	$(".toggle_menu, .inner_menu").click(function() {
		$(".toggle_menu").toggleClass("on");
		$(".inner_menu").slideToggle();
	});

	$(".header_menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top}, 1000);
	});
});
