<!DOCTYPE HTML>
<html lang="es">
	<head>
		<meta charset="utf-8"/>
		<title>Imprimir por pantalla - Master PHP</title>
	</head>
	<body>
		<h1>Master en PHP - <?php echo "judithquineweb.es"; ?></h1>

		<?="Bienvenido al curso de PHP"?>

		<?php 
			// Titular de la seccion
			echo "<h3> Listado de videojuegos:</h3>";

			/*
			Esta es una lista
			de video juegos
			moderno
			*/

			echo 
			"<ul>"
				. "<li>GTA</li>"
				. "<li>Fifa</li>"
				. "<li>Mario Bros</li>"
				. "</ul>";

			//Parrafo explicativo
			echo '<p>Esta es toda'.' - '.'lista de juegos </p>';
		?>
	</body>
</html>