'use strict'

// JSON JavaScript Object Notation

var pelicula= {
    titulo: 'Batman vd Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: "Francia"},
    pelicula
];

// pelicula.titulo = 'Superman Begins'
//console.log(peliculas.titulo);
// console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas")
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}