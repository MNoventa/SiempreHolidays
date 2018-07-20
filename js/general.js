
//****************************SLIDER IMAGENES****************************

$(document).ready(function(){



var slider = $("#slider");

$("#slider section:last").insertBefore("#slider section:first")

slider.css("margin-left", "-" +"100"+ "%");



//Eventos para los botones

var bAtras = $("#bAtras");
var bAdelante = $("#bAdelante");

bAdelante.on("click", MoverAdelante);
bAtras.on("click", MoverAtras);



//Poner color a los botones

var puntos = $(".puntos");

//Funciones para los botones

var contador=0;
var principio;
var seSumo=false;
var resta=false;

if(contador == 0){

	resetearPuntos();
	puntos.eq(0).addClass("puntoAnimate");

	contador++;

	principio=true;
}

function resetearPuntos(){

	puntos.each(function(){
		$(this).removeClass("puntoAnimate");
	})
}

function MoverAdelante(){

	resetearPuntos();

	if(resta==true){
		contador++;
	}

 	if(contador == 1){
		puntos.eq(1).addClass("puntoAnimate");

	}else if(contador == 2){
		puntos.eq(2).addClass("puntoAnimate");
	
	}else if(contador == 3){
		puntos.eq(3).addClass("puntoAnimate");
	
	}else if(contador == 4){
		puntos.eq(4).addClass("puntoAnimate");
	
	}else if(contador == 5){
		puntos.eq(5).addClass("puntoAnimate");
	}

	slider.animate({
		marginLeft: "-"+"200"+"%",
	},700, function(){
		$("#slider :eq(0)").insertAfter("#slider section:last"); //:eq es lo mismo que :first
		slider.css("margin-left", "-" +"100"+ "%");		
	});

	
	contador++;

	if(contador==7){
		puntos.eq(0).addClass("puntoAnimate");
		contador=1;
	}
	
	seSumo=true;
	principio=false;
	resta=false;
};



function MoverAtras(){

	resetearPuntos();

	if(principio==true || seSumo==true){
		contador-=2;
	}else{
		contador--;
	}

	
	if(contador == 0){
		puntos.eq(0).addClass("puntoAnimate");
	
	}else if(contador == 1){
		puntos.eq(1).addClass("puntoAnimate");
	
	}else if(contador == 2){
		puntos.eq(2).addClass("puntoAnimate");

	}else if(contador == 3){
		puntos.eq(3).addClass("puntoAnimate");
	
	}else if(contador == 4){
		puntos.eq(4).addClass("puntoAnimate");
	
	}else{
		puntos.eq(5).addClass("puntoAnimate");
		contador=5;
	}
		

	seSumo=false;
	principio=false;
	resta=true;

	slider.animate({
		marginLeft: 0,
	},700, function(){
		$("#slider section:last").insertBefore("#slider section:first")
		slider.css("margin-left", "-" +"100"+ "%");		
	});
	
	
};


//Hacerlo automatico

function moverAutomatico(estaOnClick){

	if(estaOnClick==false){
		automatico = setInterval(function(){
		MoverAdelante();
		
		},4000);
		
	}

	else{
		clearInterval(automatico);
	}
};



//Eventos de cada boton play

var play = $("#Pause");

var estaClickado = false;

play.on("click", SliderAutomatico);

function SliderAutomatico(){

	if(estaClickado == false){
		moverAutomatico(estaClickado);
		play.addClass("icon-pause2");
		play.removeClass("icon-play3");
		
		estaClickado=true;
	}else{
		moverAutomatico(estaClickado);
		play.removeClass("icon-pause2");
		play.addClass("icon-play3");
		
		estaClickado=false;
	}

}

SliderAutomatico();



//****************************SECTIONS****************************


//"a" de descubre tus vacaciones (despliegue)

$("#discoverH").hover(qdAparece, qdDesaparece);

function qdAparece(){
	$("#quieroDescubrir").stop().fadeIn(1000);
	$(this).children(".iconosSection").css("border-color", "#fff");
	return false;
}

function qdDesaparece(){
	$("#quieroDescubrir").stop().fadeOut(1000);
	$(this).children(".iconosSection").css("border-color", colorContornoSpan);
	return false;
}


//Opiniones de los clientes

var ulSecundario = $(".submenu10 ul")
var articlePers = $(".submenu10 article")

function slideFirst(){
	ulSecundario.eq(0).stop().slideDown(1000);
	articlePers.eq(0).css("background", "#C4C4C4");
}

slideFirst();

$(".submenu10").click(function(){

	ulSecundario.each(function(){
		$(this).stop().slideUp(1000);
	});

	articlePers.each(function(){
		$(this).css("background", "#E8E8E8");
	})

	$(this).children("ul").stop().slideDown(1000);
	$(this).children("article").css("background", "#C4C4C4");

	
});


//Cambiar color a la web


$("#cambiarColor").hover(function(){ //Cambiar posición flechita
	$("#cambiarColor span").css({
		"transform": "rotate(270deg)",
		"right": "-6px"
	});

}, function(){
	$("#cambiarColor span").css({
		"transform": "rotate(90deg)",
		"right": "6px"
	});
});

var subrallado = $(".subrallado");
var iconosSection = $(".iconosSection");
var contenedorViajes = $(".contenedorViajes");
var discoverH = $("#discoverH");
var formLSt = $(".formularioLStorage");
var irA = $(".desplazarArriba");
var colorContornoSpan;


$("#ccRed").click(function(){ 
	subrallado.css({
		"color": "#AE4839",
		"box-shadow": "0 2px #AE4839"
	});
	
	iconosSection.css({
		"border-color": "#AE4839"
	});

	document.getElementById("bloqueParallax").style.backgroundImage = "url('img/landscape1.jpg')"

	contenedorViajes.hover(function(){
		$(this).css({
			"box-shadow":" 0 0 0 3px #AE4839"
		});

	},function(){
		$(this).css({
			"box-shadow": ""
		})
	});

	discoverH.css({
		"background": "#E8CAC8" 
	});

	formLSt.css({
		"background": "#E8CAC8" 
	});

	irA.css({
		"background": "#AE4839"
	});

	discoverH.hover(function(){
		$(this).css({
			"background": "#D49D99"
		});
	
	},function(){
		$(this).css({
			"background": "#E8CAC8"
		});

	})

	colorContornoSpan = "#AE4839" 

});

$("#ccGreen").click(function(){ 
	subrallado.css({
		"color": "#8ABDA9",
		"box-shadow": "0 2px #8ABDA9"
	});
	
	iconosSection.css({
		"border-color": "#8ABDA9"
	});

	document.getElementById("bloqueParallax").style.backgroundImage = "url('img/landscape2.jpg')"

	contenedorViajes.hover(function(){
		$(this).css({
			"box-shadow":" 0 0 0 3px #8ABDA9"
		});

	},function(){
		$(this).css({
			"box-shadow": ""
		});
	});

	discoverH.css({
		"background": "#DBEDE6" 
	});

	formLSt.css({
		"background": "#DBEDE6" 
	});

	irA.css({
		"background": "#8ABDA9"
	});

	discoverH.hover(function(){
		$(this).css({
			"background": "#A7C2B8"
		});
	
	},function(){
		$(this).css({
			"background": "#DBEDE6"
		});

	})

	colorContornoSpan = "#8ABDA9" 

});

$("#ccBlack").click(function(){ 
	subrallado.css({
		"color": "#979797",
		"box-shadow": "0 2px #979797"
	});
	
	iconosSection.css({
		"border-color": "#979797"
	});

	document.getElementById("bloqueParallax").style.backgroundImage = "url('img/landscape3.jpg')"

	contenedorViajes.hover(function(){
		$(this).css({
			"box-shadow":" 0 0 0 3px #979797"
		});

	},function(){
		$(this).css({
			"box-shadow": ""
		});
	});

	discoverH.css({
		"background": "#D7D7D7" 
	});

	formLSt.css({
		"background": "#D7D7D7" 
	});

	irA.css({
		"background": "#979797"
	});

	discoverH.hover(function(){
		$(this).css({
			"background": "#8D8D8D"
		});
	
	},function(){
		$(this).css({
			"background": "#D7D7D7"
		});

	})

	colorContornoSpan = "#979797" 

});


$("#ccYellow").click(function(){ 
	subrallado.css({
		"color": "#D8F11F",
		"box-shadow": "0 2px #D8F11F"
	});
	
	iconosSection.css({
		"border-color": "#D8F11F"
	});

	document.getElementById("bloqueParallax").style.backgroundImage = "url('img/landscape4.jpg')"

	contenedorViajes.hover(function(){
		$(this).css({
			"box-shadow":" 0 0 0 3px #D8F11F"
		});

	},function(){
		$(this).css({
			"box-shadow": ""
		});
	});

	discoverH.css({
		"background": "#F8FCD8" 
	});

	formLSt.css({
		"background": "#F8FCD8" 
	});

	irA.css({
		"background": "#D8F11F"
	});

	discoverH.hover(function(){
		$(this).css({
			"background": "#DEE88C"
		});
	
	},function(){
		$(this).css({
			"background": "#F8FCD8"
		});

	})

	colorContornoSpan = "#D8F11F" 

});




//Boton ir arriba



	$('.desplazarArriba').hide();

	$('.desplazarArriba').click(function(){   
		$('body, html').animate({ 
			scrollTop: '0px'  
		}, 300); 
	});

	$(window).scroll(function(){ 
		if( $(this).scrollTop() > 200){  
			$('.desplazarArriba').fadeIn();

		} else {
			$('.desplazarArriba').fadeOut();
		}
	});


//Leer más



$('#pLeerMás').hide()
var estaVisible=false;

$('#verMas').click(function(){
	
	if(estaVisible==false){
		$('#pLeerMás').stop().fadeIn();
		$('#verMas').text("Leer menos");
		estaVisible=true;
	
	}else{
		$('#pLeerMás').stop().fadeOut();
		estaVisible=false;
		$('#verMas').text("Leer más");
	}
})


//Local Storage

var form_name = localStorage.getItem("nombre");

if (form_name != null && form_name != "undefined"){

	var divForm = $(".formularioLStorage");
	divForm.css("display","block");
	divForm.html("Gracias por hacer el formulario, <strong>" + form_name + ".</strong>");
	divForm.append("<br><a href='#' id='logout'>Cerrar sesión</a>")

	$("#logout").click(function(){
		localStorage.clear();
		location.reload();
	})
}


//Galeria de imágenes con efecto desenfoque

var galeriaImg = $(".galeriaImg");

galeriaImg.click(function(e){

	var img = e.target.src;
	var modal = '<div class="modal" id="modal"><img src="'+img+'" class="modalImg" alt=""><div class="modalBoton" id="modalBoton">X</div></div>';
	$("body").append(modal);

	$("#modalBoton").click(function(){
		$("#modal").remove();
	});

});




});
 //Se acaba document.ready
