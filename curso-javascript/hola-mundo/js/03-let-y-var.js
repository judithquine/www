'use strict'

//pruebas de let y var
//alert(hola);

// Prueba con var
var numero = 40; 
console.log(numero); //valor 40

if (true) {
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero); // valor 50

//Prueba con let
var texto = "Curso JS";
console.log(texto); // valor ''

if(true){
	let texto = "Curso Laravel 5";
	console.log(texto); //valor laravel 5

}

console.log(texto); // valor curso JS