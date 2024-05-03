<?php

// Debuggear
$nombre = "Victor Robles";
var_dump($nombre);

// Fechas
echo date("d-m-Y");
echo "<br>";
echo time();

//Matematicas
echo "<br>";
echo "Raiz cuadrada de 10: ".sqrt(10);

echo "<br>";
echo "Numero aleatorio: ".rand(10,40);

echo "<br>";
echo "Numero pi: ".pi();

echo "<br>";
echo "Redondear: ".round(7.891234, 1);

//Más fuinciones generales
echo "<br>";
echo "gettype: ".gettype($nombre);

echo "<br>";
if(is_string($nombre)){}