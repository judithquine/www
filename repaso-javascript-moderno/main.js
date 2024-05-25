// Alertas
//alert("Hola soy Víctor WEB");

// Variables
let nombre = "Víctor";
nombre = "VICTOR";

// Constantes
const apellido = "ROBLES";

// otra variable
let altura = 187;


// Mostrar por consola
console.log(nombre);
console.log(altura);


// Concatenación
let concatenacion = nombre + " " + apellido;

// Seleccionar elementos de la página
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr/>
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${concatenacion}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

// Condiciones
altura = 180;
if(altura >= 185){
    datos.innerHTML += "<h1>Eres una persona alta</h1>";
}else{
    datos.innerHTML += "<h1>Eres una persona bajita</h1>"
}

// Bucles
for(let year = 2000; year <= 2023; year++){
    //datos.innerHTML += "<h2>Estamos en el año: "+year+"</h2>";
    // convertir a un template string
    datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`;
}

// Arrays
let nombres = ["Víctor", "Francisco", "Pepe"];

let divNombres = document.querySelector("#nombres");

//divNombres.innerHTML = nombres[0]; 

divNombres.innerHTML = "<h1>listado de nombres</h1><ul>"; 

/*nombres.forEach(nombre => {
    divNombres.innerHTML += "<li>"+nombre+"</li>";
});*/

for(let nombre of nombres){
    divNombres.innerHTML += "<li>"+nombre+"</li>";
}

divNombres.innerHTML += "</ul>"

// Funciones

const miInformacion = (nombre, altura) => {
    let misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
        `;

        return misDatos;
} 

//console.log(miInformacion("victor robles", 187));


const imprimir = () => {
    let datitos = document.querySelector("#datos");
    datitos.innerHTML += miInformacion("paco", 187);
}

imprimir();
imprimir();
imprimir();
imprimir();
imprimir();

// Repaso JS
// objeto literal o json
var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
        console.log(this.modelo, this.maxima, this.antiguedad);
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad1: "valor aleatorio"
};

// imprimir en pantalla
document.write("<h1>"+coche.modelo+"</h1>")
coche.mostrarDatos();
console.log(coche);

// Promesas
var saludar = new Promise((resolve, reject) => {

    setTimeout(() => {
        let saludo = "Hola muy buenas a todos!!!";
        saludo = false;

        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }
    }, 2000);

});


saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
})