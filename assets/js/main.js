window.onload = function(){
	document.getElementById("demo").addEventListener("click", eventos);
}

function eventos(){
	alert("¡HOLA MUNDO!");
}

function loadBody(){
	document.getElementsByTagName("body").addEventListener("onload", alert("página cargada"));
}
loadBody();
