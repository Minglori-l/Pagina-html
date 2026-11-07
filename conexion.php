<?php
$host = "localhost";
$user = "root";
$password = ""; // En XAMPP por defecto la clave está vacía
$database = "chase_atlantic_db";

$conexion = mysqli_connect($host, $user, $password, $database);

if (!$conexion) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}

// Soporte para caracteres especiales y acentos
mysqli_set_charset($conexion, "utf8mb4");
?>