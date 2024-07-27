let nombre = "Víctor";
let apellidos = "Robles";
let edad = 45;
let pais = "España";
let conocimientos = ["html", "css", "javascript", "react"];

console.log(`Hola soy ${nombre} ${apellidos} tengo ${edad} años, vivo en ${pais}
y tengo los siguientes conocimientos: ${conocimientos[0]}, ${conocimientos[1]}, ${conocimientos[2]}, ${conocimientos[3]}.`);

edad = 67;
conocimientos.push("php");

console.log("Ahora tengo " + edad + " años y he aprendido php")
