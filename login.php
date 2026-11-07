<?php
session_start();
require_once 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = trim($_POST['usuario']);
    $contrasena = trim($_POST['contrasena']);

    // Buscar el usuario en la base de datos (la columna se llama 'password')
    $sql = "SELECT id, nombre, usuario, password FROM usuarios WHERE usuario = ?";
    $stmt = mysqli_prepare($conexion, $sql);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "s", $usuario);
        mysqli_stmt_execute($stmt);
        $resultado = mysqli_stmt_get_result($stmt);

        if ($user = mysqli_fetch_assoc($resultado)) {
            // Verificar contraseña
            if ($contrasena === $user['password'] || password_verify($contrasena, $user['password'])) {
                $_SESSION['usuario_id'] = $user['id'];
                $_SESSION['usuario_nombre'] = $user['nombre'];
                
                header("Location: index.html");
                exit();
            } else {
                echo "<script>alert('Contraseña incorrecta'); window.location.href='login.html';</script>";
            }
        } else {
            echo "<script>alert('El usuario no existe'); window.location.href='login.html';</script>";
        }
        mysqli_stmt_close($stmt);
    }
}
?>