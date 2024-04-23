'use strict'

// DOM - Document Object Model

function cambiarColor(color){
	caja.style.background = color;
}


//var caja = document.getElementById('micaja').innerHTML;


// Conseguir elementos con un ID concreto

//var caja = document.getElementById('micaja');
var caja = document.querySelector("#micaja");

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.class = "hola";
caja.className = "hola hola2";


// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");


//todosLosDivs.forEach((valor, indice) => {
var valor;
for(valor in todosLosDivs){

	if(typeof todosLosDivs[valor].textContent == 'string'){
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		document.querySelector("#miseccion").append(parrafo);
	}
}

seccion.append(hr);


// cambia contenido desde js
//var contenidoEnTexto = todosLosDivs[2];
//contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
//contenidoEnTexto.style.background = "red";
//console.log(contenidoEnTexto);


// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
	if(divsRojos[div].className == "rojo"){
		divsRojos[div].style.background = "red";
	}
}

// Query selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);