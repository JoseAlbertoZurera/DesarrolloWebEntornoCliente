<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <title>Server</title>
</head>

<body>
    <div class="container">
        <h1>Servidor PHP</h1>
        <?php
        $usuario = $_POST['usuario'];
        $password = $_POST['password'];
        ?>
        <br />
        <h2>Nombre de Usuario: <?php echo $usuario ?> </h2>
        <h2>Contraseña: <?php echo $password ?> </h2>
    </div>
</body>

</html>