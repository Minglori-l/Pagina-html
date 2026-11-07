CREATE DATABASE IF NOT EXISTS chase_atlantic_db 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- base de datos
USE chase_atlantic_db;

-- 3.  tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4.usuario de prueba
INSERT INTO usuarios (nombre, usuario, email, password) 
VALUES (
    'Glorimar Maldonado', 
    'glorimar', 
    'glorimar@chaseatlantic.com', 
    '123456'
);