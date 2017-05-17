window.onload = function load(){
	alert("Página cargada");
}

function clickBoton(){
	var boton = document.getElementById("demo")
	boton.addEventListener("click", function(){
		alert("¡HOLA MUNDO!");
	});
}
clickBoton();

function mouseInput(){
	var input = document.querySelector("input");
	input.addEventListener("mouseout", function(){
		alert("Estás sobre  mí :$");
	});

	input.addEventListener("mouseover", function(){
		alert("No estás sobre  mí :(");
	});
}
mouseInput();

/*
window.onload = function(){
	document.getElementById("demo").addEventListener("click", eventos);
}

function eventos(){
	alert("¡HOLA MUNDO!");
}

function loadBody(){
	document.getElementsByTagName("body").addEventListener("load", alert("página cargada"));
}
loadBody();
*/
