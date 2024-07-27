<?php

//Ejemplo 1
$color = "rojo";
if($color == "verde"){
  echo "EL COLOR ES ROJO";
}else{
  echo "el color NO es rojo";
}
echo "<br/>";

//Ejemplo 2
$year = 2019;
if($year >= 2019){
  echo "Estamos de 2019 en adelante";
}else{
  echo "Es una anterior 2019";
}
echo "<br/>";

//Ejemplo 3
$nombre = "David Ext";
$ciudad = "Madrid";
$continente = "Asia";
$edad = 49;
$mayoria_edad = 18;

if($edad >= $mayoria_edad){
  echo "<h1>$nombre es mayor de edad</h1>";

  if($continente == "Europa"){
    echo "<h2>Y es de $ciudad</h2>";
  }else{
    echo "No es Europeo";
  }
  
}else{
  echo "<h2>$nombre No es mayor de edad</h2>";
}
echo "<br/>";

//Ejemplo 4
$dia = 1;
/*
if($dia == 1){
  echo "Es Lunes";
}else{
  if($dia == 2){
    echo "Es Martes";
  }else{
    if($dia == 3){
      echo "Es Miercoles";
    }else{
      if($dia == 3){
        echo "Es Jueves";
      }else{
        if($dia == 5){
          echo "Es Viernes";
        }else{
          echo "Es fin de semana";
        }
      }
    }
  }
}
*/
if($dia == 1){
  echo "Lunes";
}elseif($dia == 2){
  echo "Martes";
}elseif($dia == 3){
  echo "Es Miercoles";
}elseif($dia == 4){
  echo "Es Jueves";
}elseif($dia == 5){
  echo "Es Viernes";
}else{
  echo "Es finde";
}

echo "<hr/>";

//Ejemplo 5

$edad1 = 18;
$edad2 = 64;
$edad_oficial = 20;

if($edad_oficial >= $edad1 && $edad_oficial <= $edad2){
  echo "ESTA EN EDAD DE TRABAJAR";
}else{
  echo "NO PUEDE TRABAJAR";
}
echo "<hr/>";

$pais = "Francia";
if($pais == "Mexico" || $pais == "España" || $pais == "Colombia"){
  echo "En este pais se habla español";
}else{
  echo "no se habla español";
}
echo "<hr/>";

//SWITHC
$dia = 4;

switch($dia){
  case 1:
    echo "Lunes";
    break;
  case 2:
    echo "Martes";
    break;
  case 3:
    echo "Miercoles";
    break;  
  case 4:
    echo "Jueves";
    break;
  case 5:
    echo "Viernes";
    break;
  default:
    echo "Es finde";
}


//GOTO
goto ejecuta_aqui;
echo "<h3>Instruccion 1</h3>";
echo "<h3>Instruccion 2</h3>";
echo "<h3>Instruccion 2</h3>";
echo "<h3>Instruccion 4</h3>";

ejecuta_aqui:
echo "<h1>Me he saltado 4 echos</h1>";



?>