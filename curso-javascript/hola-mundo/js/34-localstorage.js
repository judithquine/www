'use strict'

// Localstorage

// Comprobar disponibilidad del Localstorage
if(typeof (Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con Localstorage")
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony");

// Recuperar elemento
// console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
    nombre: "Víctor Robles",
    email: "victor@Victor.com",
    web: "victorroblesweb.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
// es un string
// console.log(localStorage.getItem("usuario"));

var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

// document.querySelector("#peliculas").append(" " + userjs.web+" - "+userjs.nombre);
document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);

localStorage.removeItem("usuario");
localStorage.clear();