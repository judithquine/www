<?php

/*
Sesión: almacenar y persistir datos del usuario mientras que navega en un sitio web hasta que cierra el navegador.
*/

// Iniciar sesión
session_start();

//variable local
$variable_normal = "Soy una cadena de texto";

//variable de sesión
$_SESSION['variable_persistente'] = "HOLA SOY UNA SESION ACTIVA";

echo $variable_normal."<br/>";
echo $_SESSION['variable_persistente'];

?>