var original = "Welcome";
var reemplazo = "Bienvenido";



$(document).ready(function(){


setInterval(function(){


	original = $("#indexTitulo").text();
	$('#indexTitulo').fadeOut('fast');
	$("#indexTitulo").text(reemplazo);
	$('#indexTitulo').fadeIn('slow');
	reemplazo =  original;
		//cambiarIdioma(original,reemplazo);
	}
	,3500);



/*function to catch click menu*/
$("nav a").click(function(){
	$('nav').find('.current').removeClass('current');
	$(this).parent().addClass('current');
});

var hei_navbar = $("nav").height();
var final_hei = $(window).height();
$(".fixed-bg").css('height',final_hei-hei_navbar);


$(".blog-container").css("min-height",final_hei-hei_navbar);

});



$(window).resize(function(){
	
	$("#editor").css("height", $(window).height()*.8);
	var hei_navbar = $(".navbar").height();
	var final_hei = $(window).height();
	$(".fixed-bg").css('height',final_hei); 

});

