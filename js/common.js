$(document).ready(function () {

	var options = {
		offset: 450	  
	}
	
	var header = new Headhesive(".header_menu", options);

	//var header = new Headhesive('.header_menu_fixed', '.inner_menu_fixed', options);

	$(".toggle_menu").click(function() {
		$(this).toggleClass("on");
		$(".inner_menu").slideToggle();
	});

	// $(".toggle_menu_fixed").click(function() {
	// 	$(this).toggleClass("on");
	// 	$(".inner_menu_fixed").slideToggle();
	// });

	new WOW().init();

	//$(".inner_menu, .inner_menu_fixed, .logo").on("click","a", function (event) {
		
	$(".inner_menu, .logo").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top}, 1000);
	});



});




