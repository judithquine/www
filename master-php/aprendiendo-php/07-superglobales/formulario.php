<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario en PHP</title>
</head>
<body>
  <h1>Formulario en PHP</h1>
  <!--<form method=GET action="recibir.php">-->
  <form method=POST action="recibir.php">
    <p>
      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" />
    </p>
    <p>
      <label for="apellidos">Apelidos</label>
      <input type="text" name="apellidos" />
    </p>

    <input type="submit" value="Enviar datos" />
  </form>
</body>
</html>