$(document).ready(function(){


	//SELECT ELM DOM

	var formularios = $(".frmPreguntas");
	var frmPreguntas = $(":button");
	var imagenForm = document.getElementById("imagenForm")
	var imagenForm2 = document.getElementById("imagenForm2")
	var finalForm = $(".finalForm");
	var finalFormHr = $(".finalForm hr");
	var textoFinalForm = $("#lugarFinalForm");


	//FUNCIONES


	var validarRadios2 = function(data) {
	    
	    var resultado = false;
	    var formAValidar;
	    var opciones;

	   	if(data==1){
	   		formAValidar=formularios[0].elements;
	   		var opciones=formularios[0].getElementsByClassName('radioButtons');

	   	}else if(data==2){
	   		formAValidar=formularios[1].elements;
	   		var opciones=formularios[1].getElementsByClassName('radioButtons');

	   	}else if(data==3){
	   		formAValidar=formularios[2].elements;
	   		var opciones=formularios[2].getElementsByClassName('radioButtons');

	   	}else if(data==4){
	   		formAValidar=formularios[3].elements;
	   		var opciones=formularios[3].getElementsByClassName('radioButtons');

	   	}else{
	   		formAValidar=formularios[4].elements;
	   		var opciones=formularios[4].getElementsByClassName('radioButtons');
	   	}

 		//var opciones = formAValidar.getElementsByClassName('radioButtons');
	   	console.log(data);

	    for (var i = 0; i < formAValidar.length; i++) {
	      
	      if (formAValidar[i].type == "radio") {

	        for (var o = 0; o < opciones.length; o++) {
	          if (opciones[o].checked) {
	            resultado = true;
	            break;
	          }
	        }

	        if (resultado == false) {
	          formAValidar[i].parentElement/*o .parentNode*/.className = formAValidar[i].parentNode.className + " errorForm";
	          console.log('Uno de los campos :button está deseleccionado');
	          return false;

	        } else {
	          // Eliminamos la clase Error del radio button
	          formAValidar[i].parentElement/*o .parentNode*/.className = formAValidar[i].parentNode.className.replace(" errorForm", "");
	          return true;

	        }
	      }
	    }
	 };
	

	var enviar2 = function(e){

		var data;

		if(e.target==btn_buttonForm1){
			data = 1;
		
		}else if(e.target==btn_buttonForm2){
			data = 2;

		}else if(e.target==btn_buttonForm3){
			data = 3;

		}else if(e.target==btn_buttonForm4){
			data = 4;

		}else{
			data = 5;
		}

		console.log(data)
			if(!validarRadios2(data)){ //Es lo mismo que poner: valudarInputs == false
				console.log("Falta validar los inputs");
				e.preventDefault();

			}else{
				console.log("Envia los datos correctamente");
				e.preventDefault();

				if(data==1){
					$(".form1").css("display", "none");
					$(".form2").fadeIn(1000);
				
				}else if(data==2){
					$(".form2").css("display", "none");
					$(".form3").fadeIn(1000);
			
				}else if(data==3){
					if(opcion3_1.checked){
						$(".form3").css("display", "none");
						$(".form4").fadeIn(1000);

					}else{
						$(".form3").css("display", "none");
						$(".form5").fadeIn(1000);
					}
					
				
				}else if(data==4){
					$(".form4").css("display", "none");

					if(opcion4_1.checked){
						document.getElementById("imagenForm").style.backgroundImage = "url('img/ibiza.jpeg')";
						textoFinalForm.html("Ibiza");
						finalFormHr.after("El paraíso de la fiesta. Ibiza es el lugar ideal para ir a disfrutar de su gran variedad de eventos de día y de noche. Esta isla también te ofrece unas playas paradisiacas de las que te enamorarás.");
						
						if(opcion2_1.checked) {
							document.getElementById("imagenForm2").style.backgroundImage = "url('img/Ibizabarato.jpg')";

						}else if(opcion2_2.checked) {
							document.getElementById("imagenForm2").style.backgroundImage = "url('img/Ibizamedio.jpg')";
						
						}else if(opcion2_3.checked) {
							document.getElementById("imagenForm2").style.backgroundImage = "url('img/Ibizacaro.jpg')";

						}

					}else if(opcion4_2.checked){
						document.getElementById("imagenForm").style.backgroundImage = "url('img/formDeltebre.jpg')";
						textoFinalForm.html("Deltebre");
						finalFormHr.after("RELAJACIÓN, así, sin más. Deltebre es el destino perfecto para desconectar, es un lugar pequeño y acojedor que te ofrece paz y tranquilidad sólo con verlo. Sus paisajes maravillosos harán que quieras volver infinidad de veces.")
						
						if(opcion2_1.checked) {
							document.getElementById("imagenForm2").style.backgroundImage = "url('img/Deltabarato.jpg')";

						}else if(opcion2_2.checked) {
							document.getElementById("imagenForm2").style.backgroundImage = "url('img/Deltamedio.jpg')";
						
						}else if(opcion2_3.checked) {
							document.getElementById("imagenForm2").style.backgroundImage = "url('img/Deltacaro.jpg')";

						}

					}else if(opcion4_3.checked){
						document.getElementById("imagenForm").style.backgroundImage = "url('img/tenerife_pcruz/IMG_9406.jpg')";
						textoFinalForm.html("Tenerife");
						finalFormHr.after("Diversión y desconexión en una misma isla. Tenerife es el lugar perfecto para aventureros que buscan variedad de actividades y a la vez un poco de relax.")
						
						if(opcion2_1.checked) {
							document.getElementById("imagenForm2").style.backgroundImage = "url('img/Tenerifebarato.jpg')";

						}else if(opcion2_2.checked) {
							document.getElementById("imagenForm2").style.backgroundImage = "url('img/Tenerifemedio.jpg')";
						
						}else if(opcion2_3.checked) {
							document.getElementById("imagenForm2").style.backgroundImage = "url('img/Tenerifecaro.jpg')";

						}
					}

					finalForm.fadeIn(1000);
				
				}else{
					$(".form5").css("display", "none");

					if(opcion5_1.checked){
						document.getElementById("imagenForm").style.backgroundImage = "url('img/formRoma.jpg')";
						textoFinalForm.html("Roma");
						finalFormHr.after("La ciudad eterna. Roma es una ciudad que te ofrecerá grandes monumentos, pequeños callejones llenos de magia y comida deliciosa.");
						
						if(opcion2_1.checked) {
							imagenForm2.style.backgroundImage = "url('img/Romabarato.jpg')";

						}else if(opcion2_2.checked) {
							imagenForm2.style.backgroundImage = "url('img/Romamedio.jpg')";
						
						}else if(opcion2_3.checked) {
							imagenForm2.style.backgroundImage = "url('img/Romacaro.jpg')";

						}

					}else if(opcion5_2.checked){
						document.getElementById("imagenForm").style.backgroundImage = "url('img/formMadrid.jpg')";
						textoFinalForm.html("Madrid");
						finalFormHr.after("La ciudad que no duerme. Madrid es una gran ciudad que te ofrecerá arte, ocio y fiesta en un mismo lugar. La capital de España es una ciudad que te sorprenderá.")
						
						if(opcion2_1.checked) {
							imagenForm2.style.backgroundImage = "url('img/Madridbarato.jpg')";

						}else if(opcion2_2.checked) {
							imagenForm2.style.backgroundImage = "url('img/Madridmedio.jpg')";
						
						}else if(opcion2_3.checked) {
							imagenForm2.style.backgroundImage = "url('img/Madridcaro.jpg')";

						}

					}else if(opcion5_3.checked){
						document.getElementById("imagenForm").style.backgroundImage = "url('img/formLondres.jpg')";
						textoFinalForm.html("Londres");
						finalFormHr.after("Una ciudad antigua con el ambiente más moderno que jamás podrás imaginar. Londres es una ciudad que te ofrecerá ocio y a la vez magníficos paisajes que te envolverán.<br><hr>")
						
						if(opcion2_1.checked) {
							imagenForm2.style.backgroundImage = "url('img/Londresbarato.jpg')";

						}else if(opcion2_2.checked) {
							imagenForm2.style.backgroundImage = "url('img/Londresmedio.jpg')";
						
						}else if(opcion2_3.checked) {
							imagenForm2.style.backgroundImage = "url('img/Londrescaro.jpg')";

						}
					}

					finalForm.fadeIn(1000);
				}

			}
		
	};


	//EVENTOS

	for(var i=0; i<frmPreguntas.length; i++){

		frmPreguntas[i].addEventListener("click", enviar2);
	}

})