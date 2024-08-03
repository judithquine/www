'use strict'

// DOM - Document Object Model


//Ejecutar en la consola la funcion cambia color
//cambiaColor("green");
function cambiaColor(color) {
	caja.style.background = color;
}

// Conseguir elementos con un ID concreto

// var caja = document.getElementById('micaja').innerHTML;
// 	var caja = document.getElementById("micaja");
//
// 	caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
// 	caja.style.background = "red";
// 	caja.style.padding = "20px";
// 	caja.style.color = "white";
// 	caja.className = "hola hola2";
// 	console.log(caja);

// Seleccionar un elemento con querySelector
	var caja = document.querySelector("#micaja");

	caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
	caja.style.background = "red";
	caja.style.padding = "20px";
	caja.style.color = "white";
	caja.className = "hola hola2";
	//console.log(caja);

// Conseguir elementos por su etiqueta
	var todosLosDivs = document.getElementsByTagName('div');
	//console.log(todosLosDivs);

// cambia contenido desde js
	// 	var contenidoEnTexto = todosLosDivs[2];
	//  console.log(contenidoEnTexto);

	// 	var contenidoEnTexto = todosLosDivs[2];
	//  contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
	//  console.log(contenidoEnTexto);
	// contenidoEnTexto.style.background = "red";

// no recomendable, forEach es para array con valores, mejor hacerlo con for
//todosLosDivs.forEach((valor, indice) => {
//});
	console.log(todosLosDivs);

	var seccion = document.querySelector("#miseccion");
	var hr = document.createElement("hr");


 	var valor;
	for(valor in todosLosDivs) {
		console.log(todosLosDivs[valor]);
		if(todosLosDivs[valor].textContent.length >=1){
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		parrafo.append(parrafo);
		}
	}
	seccion.append(hr);

// Conseguir elementos por su clase css
// var divsRojos = document.getElementsByClassName("rojo");
// var divsAmarillos = document.getElementsByClassName("amarillo");
// divsAmarillos[0].style.background = "yellow";
//



//
//
//
//
//
//
//
//


// // Query selector
// var id = document.querySelector("#encabezado");
// console.log(id);
//
// var claseRojo = document.querySelector(".rojo");
// console.log(claseRojo);
//
// var etiqueta = document.querySelector("div");
// console.log(etiqueta);