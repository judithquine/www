'use strict'

// DOM - Document Object Model


//Ejecutar en la consola la funcion cambia color
//cambiaColor("green");
function cambiaColor(color) {
	caja.style.background = color;
}

//==============================================================//
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

//==============================================================//
// Seleccionar un elemento con querySelector
	var caja = document.querySelector("#micaja");

	caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
	caja.style.background = "red";
	caja.style.padding = "20px";
	caja.style.color = "white";
	caja.className = "hola hola2";
	//console.log(caja);

//==============================================================//
// Conseguir elementos por su etiqueta - contenido en Texto
	var todosLosDivs = document.getElementsByTagName('div');
	// todosLosDivs[2].textContent;
	// var contenidoEnTexto = todosLosDivs[2].textContent;
	// console.log(contenidoEnTexto);
	// console.log(todosLosDivs);

// cambia contenido desde js
	// 	var contenidoEnTexto = todosLosDivs[2];
	//  console.log(contenidoEnTexto);

	// 	var contenidoEnTexto = todosLosDivs[2];
	//  contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
	//  console.log(contenidoEnTexto);
	// contenidoEnTexto.style.background = "red";

// no recomendable, solo sirve forEach para array con valores, mejor hacerlo con for
// 	todosLosDivs.forEach((valor, indice) => {
// 		var parrafo = document.createElement("p");
// 		var texto = document.createTextNode(valor);
// 		parrafo.appendChild(texto);
// 		document.querySelector("#miseccion").appendChild(parrafo);
//});
// 	console.log(todosLosDivs);

	var seccion = document.querySelector("#miseccion");
	var hr = document.createElement("hr");

 	var valor;
	for(valor in todosLosDivs) {
		// console.log(valor);
		// console.log(todosLosDivs[valor]);
		//compruebo si es un texto
		if(typeof todosLosDivs[valor].textContent =='string'){
			var parrafo = document.createElement("p");
			var texto = document.createTextNode(todosLosDivs[valor].textContent);
			parrafo.append(texto);
			// document.querySelector("#miseccion").append(parrafo);
			seccion.append(parrafo);
		}
	}
	seccion.append(hr);

// Conseguir elementos por su clase css
	var divsRojos = document.getElementsByClassName('rojo');
	var divsAmarillos = document.getElementsByClassName('amarillo');
	// divsRojos[0].style.background = "red";
	// console.log(divsRojos);
	// console.log(divsAmarillos[0]);
	divsAmarillos[0].style.background = "yellow";

	var div;
	for(div in divsRojos){
		if(divsRojos[div].className == "rojo"){
			divsRojos[div].style.background = "red";
		}
	}
	console.log(divsRojos);

// Query selector
	var id = document.querySelector("#encabezado");
	console.log(id);

	var claseRojo = document.querySelector("div.rojo");
	console.log(claseRojo);

	var etiqueta = document.querySelector("div");
	console.log(etiqueta);