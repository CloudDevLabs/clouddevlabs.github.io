$(document).ready(function () {

	var options = {
 	 	offset: 450
	}
	var header = new Headhesive('.header_menu_fixed', '.menu_inner_fixed', options);


	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".menu_inner").slideToggle();
	});

	$(".toggle-mnu_fixed").click(function() {
		$(this).toggleClass("on");
		$(".menu_inner_fixed").slideToggle();
	});

	new WOW().init();

	$(".menu_inner, .menu_inner_fixed, .footer_nav, .logo").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top}, 1000);
	});



});




