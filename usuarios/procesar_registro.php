<?php
// Conectar a la base de datos
$host = 'localhost';
$user = 'root'; // Cambia si usas otro usuario
$password = ''; // Cambia si tienes una contraseña
$dbname = 'registro_usuarios';

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recibir los datos del formulario
$tipoUsuario = $_POST['tipoUsuario'];
$nombres = $_POST['nombres'] ?? null;
$apellidos = $_POST['apellidos'] ?? null;
$correoElectrónico = $_POST['correoElectrónico'];
$area = $_POST['area'] ?? null;
$cargo = $_POST['cargo'] ?? null;
$nombreEmpresa = $_POST['nombreEmpresa'] ?? null;
$nit = $_POST['nit'] ?? null;
$personaCargo = $_POST['personaCargo'] ?? null;
$identificacion = $_POST['identificacion'] ?? null;
$telefono = $_POST['telefono'] ?? null;
$eps = $_POST['eps'] ?? null;
$arl = $_POST['arl'] ?? null;
$productoServicio = $_POST['productoServicio'] ?? null;
$direccion = $_POST['direccion'] ?? null;
$nombreContacto = $_POST['nombreContacto'] ?? null;
$contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT); // Encriptar contraseña

// Insertar los datos en la tabla
$sql = "INSERT INTO usuarios (tipo_usuario, nombres, apellidos, correo_electrónico, area, cargo, nombre_empresa, nit, persona_cargo, identificacion, telefono, eps, arl, producto_servicio, direccion, nombre_contacto, contrasena)
VALUES ('$tipoUsuario', '$nombres', '$apellidos', '$correoElectrónico', '$area', '$cargo', '$nombreEmpresa', '$nit', '$personaCargo', '$identificacion', '$telefono', '$eps', '$arl', '$productoServicio', '$direccion', '$nombreContacto', '$contrasena')";

if ($conn->query($sql) === TRUE) {
    echo "Usuario registrado con éxito.";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
