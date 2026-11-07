# Chase Atlantic - Fandom Wiki & Fan Club System

Proyecto web académico dedicado a la banda **Chase Atlantic**, desarrollado siguiendo los principios de UI/UX con fidelidad a prototipos de Figma, efectos visuales avanzados en CSS y un sistema de autenticación de usuarios conectado a una base de datos en MySQL.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3 (Flexbox, Glassmorphism, Efectos Neón) y JavaScript.
* **Backend:** PHP (Procesamiento de datos y sesiones de usuario).
* **Base de Datos:** MySQL (Gestión mediante XAMPP / phpMyAdmin).
* **Servidor Local:** Apache (XAMPP).

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu computadora:

1. [XAMPP](https://www.apachefriends.org/es/index.html) (con los módulos de **Apache** y **MySQL**).
2. Un navegador web actualizado (Google Chrome, Mozilla Firefox, Microsoft Edge).

---

## 🚀 Paso a Paso para Ejecutar el Proyecto

### Paso 1: Copiar el proyecto a la carpeta del servidor local

1. Descarga o clona este repositorio.
2. Copia la carpeta completa del proyecto dentro del directorio `htdocs` de XAMPP:
   ```text
   C:\xampp\htdocs\chase_atlantic

Paso 2: Iniciar los servicios en XAMPP
Abre la aplicación XAMPP Control Panel.

Haz clic en el botón Start en los módulos de Apache y MySQL.

Verifica que ambos se resalten en color verde.

Paso 3: Importar la Base de Datos en phpMyAdmin
Abre tu navegador e ingresa a: http://localhost/phpmyadmin/

En la barra superior, haz clic en la pestaña SQL.

Copia y pega el siguiente script para crear la base de datos y la tabla de usuarios:

SQL

-- 1. Crear la base de datos
CREATE DATABASE IF NOT EXISTS chase_atlantic_db 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- 2. Seleccionar la base de datos
USE chase_atlantic_db;

-- 3. Crear la tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Insertar usuario de prueba
INSERT INTO usuarios (nombre, usuario, email, password) 
VALUES (
    'Glorimar Maldonado', 
    'glorimar', 
    'glorimar@chaseatlantic.com', 
    '123456'
);

Haz clic en Continuar (Go). Verás que la base de datos chase_atlantic_db aparecerá en el menú lateral izquierdo.

Paso 4: Visualizar el Proyecto en el Navegador
Importante: No abras los archivos .html haciendo doble clic desde el Explorador de Archivos. Deben abrirse mediante la dirección http://localhost/.

Página Principal (Wiki):
Abre tu navegador e ingresa a:http://localhost/chase_atlantic/index.html

Página de Inicio de Sesión (Login):
Accede directamente a:http://localhost/chase_atlantic/login.html

🔐 Credenciales de Prueba para el Login
Para probar el formulario de autenticación en login.html:

Usuario: glorimar

Contraseña: 123456

Al iniciar sesión exitosamente, el sistema validará los datos en MySQL a través de PHP y redirigirá al usuario automáticamente a la landing page (index.html).

📁 Estructura del Proyecto

chase_atlantic/
├── Imagen/                # Recursos multimedia e imágenes del sitio
├── conexion.php           # Enlace entre PHP y la base de datos MySQL
├── index.html             # Landing Page principal (Carrera, Integrantes, Discografía, Conciertos)
├── login.html             # Formulario de Inicio de Sesión
├── login.php              # Lógica de validación del formulario de inicio de sesión
├── script.js              # Interacciones y lógica del frontend
├── style.css              # Estilos generales y efectos visuales CSS
└── chase_atlantic_db.sql  # Script de respaldo de la base de datos