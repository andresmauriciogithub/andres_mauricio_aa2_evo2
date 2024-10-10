-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-10-2024 a las 04:15:14
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `registro_usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `tipo_usuario` varchar(50) NOT NULL,
  `nombres` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `correo_electrónico` varchar(100) NOT NULL,
  `area` varchar(100) DEFAULT NULL,
  `cargo` varchar(100) DEFAULT NULL,
  `nombre_empresa` varchar(100) DEFAULT NULL,
  `nit` varchar(20) DEFAULT NULL,
  `persona_cargo` varchar(100) DEFAULT NULL,
  `identificacion` varchar(50) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `eps` varchar(50) DEFAULT NULL,
  `arl` varchar(50) DEFAULT NULL,
  `producto_servicio` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `nombre_contacto` varchar(100) DEFAULT NULL,
  `contrasena` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `tipo_usuario`, `nombres`, `apellidos`, `correo_electrónico`, `area`, `cargo`, `nombre_empresa`, `nit`, `persona_cargo`, `identificacion`, `telefono`, `eps`, `arl`, `producto_servicio`, `direccion`, `nombre_contacto`, `contrasena`) VALUES
(10, 'ClienteInterno', 'Andres Mauricio', 'Montañez', 'maurommtt@gmail.com', 'Administrativa', 'Líder de Contratación ', '', '', '', '', '', '', '', '', '', '', '$2y$10$QstvWCC2z/pYXEjqzoMyAeYu1Vrhy8dfIA.C6aAjx0.3mpa3Ms.1G'),
(16, 'ClienteExterno', '', '', 'botanica@gmail.com', 'Administrativa', '', 'Botanica ', '900526451-8', 'Jorge Camargo', '', '', '', '', '', '', '', '$2y$10$uIMv7YpbPN0h4geA8UBEF.ZopPgsGHS3Clgcwm2tJKOgFI3xULq0W'),
(24, 'ProveedorNatural', 'Santiago Aldemar', 'Cadena ', 'Santi@hotmail.com', '', '', '', '', '', '79526147', '313396541', 'Sanitas ', 'Colpatria ', '', 'Carrera 71d 57f-70sur ', 'Miguel Andrade ', '$2y$10$d32LdXBQ3/b3SrlyHjnSjuPOgpfXcNnqQLtGUZkc6Ca86xJL1dI8y'),
(25, 'ProveedorJuridico', '', '', 'movistar@gmail.com', '', '', 'Movistar ', '90156678-3', '', '', '4578956', '', '', 'Internet y telefonia ', 'Diagonal 115a # 70b-71', 'Luz Calderón ', '$2y$10$S6lD99nCqX79fqMyeibYGuKk4PoC1MoHW7QuJrp22H.mtGTdn/Bby');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
