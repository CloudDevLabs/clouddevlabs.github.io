$(document).ready(function () {

	new WOW().init();

	$(".toggle_menu").click(function() {
		$(".toggle_menu").toggleClass("on")
		$(".inner_menu").slideToggle();
	});
	
	$(".inner_menu, .logo_menu").click(function() {
		if($(".toggle_menu").css("display") === "block"){
			$(".toggle_menu").removeClass("on")
			$(".inner_menu").slideUp();
		}
	});

	$(".header_menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top}, 1000);
	});
});
