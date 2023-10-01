-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-09-2023 a las 19:22:26
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tiendas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nombre`) VALUES
(1, 'ESTEBAN URBINA'),
(2, 'MONICA BRAVO'),
(5, 'Luis Rodríguez'),
(6, 'María López'),
(7, 'Carlos Fernández'),
(8, 'Laura Smith'),
(9, 'Pedro Johnson'),
(10, 'Isabel Martínez'),
(11, 'Andrés García'),
(12, 'Sofía Brown'),
(13, 'Diego González'),
(14, 'Carmen Taylor'),
(15, 'Fernando Wilson'),
(16, 'Elena Adams'),
(17, 'Miguel Davis'),
(18, 'Sara White'),
(19, 'Roberto Harris'),
(20, 'Olga Clark'),
(21, 'Ricardo Turner'),
(22, 'Beatriz Scott'),
(23, 'Gabriel Hall'),
(24, 'Natalia Green'),
(25, 'Javier Young'),
(26, 'Paula Lewis'),
(27, 'Carlos Mitchell'),
(28, 'Diana King'),
(29, 'Jorge Allen'),
(30, 'Lucía Thomas'),
(31, 'Diana King'),
(32, 'Jorge Allen'),
(33, 'Lucía Thomas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `fecha_pedido` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `id_cliente`, `id_producto`, `cantidad`, `precio_unitario`, `fecha_pedido`) VALUES
(1, 11, 9, 3, '1000000.00', '2023-09-01'),
(2, 12, 5, 2, '800000.00', '2023-09-02'),
(3, 13, 7, 4, '300000.00', '2023-09-03'),
(4, 14, 3, 1, '1500000.00', '2023-09-04'),
(5, 15, 1, 5, '1000000.00', '2023-09-05'),
(6, 16, 10, 2, '250000.00', '2023-09-06'),
(7, 17, 8, 3, '50000.00', '2023-09-07'),
(8, 18, 6, 1, '400000.00', '2023-09-08'),
(9, 19, 2, 2, '1500000.00', '2023-09-09'),
(10, 20, 4, 4, '500000.00', '2023-09-10'),
(11, 21, 9, 3, '1000000.00', '2023-09-11'),
(12, 22, 5, 2, '800000.00', '2023-09-12'),
(13, 23, 7, 4, '300000.00', '2023-09-13'),
(14, 24, 3, 1, '1500000.00', '2023-09-14'),
(15, 25, 1, 5, '1000000.00', '2023-09-15'),
(16, 26, 10, 2, '250000.00', '2023-09-16'),
(17, 27, 8, 3, '50000.00', '2023-09-17'),
(18, 28, 6, 1, '400000.00', '2023-09-18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(255) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `precio_unitario`) VALUES
(1, 'Celular', '1000000.00'),
(2, 'Laptop', '1500000.00'),
(3, 'Televisor', '800000.00'),
(4, 'Tablet', '500000.00'),
(5, 'Refrigeradora', '1200000.00'),
(6, 'Cámara Digital', '400000.00'),
(7, 'Impresora', '300000.00'),
(8, 'Micrófono', '50000.00'),
(9, 'Auriculares', '80000.00'),
(10, 'Smartwatch', '250000.00'),
(11, 'Altavoces', '150000.00'),
(12, 'Teclado', '60000.00'),
(13, 'Ratón', '40000.00'),
(14, 'Monitor', '700000.00'),
(15, 'Silla de Oficina', '300000.00'),
(16, 'Mesa de Centro', '250000.00'),
(17, 'Licuadora', '60000.00'),
(18, 'Batidora', '50000.00'),
(19, 'Cafetera', '70000.00'),
(20, 'Horno de Microondas', '80000.00'),
(21, 'Aspiradora', '120000.00'),
(22, 'Ventilador', '40000.00'),
(23, 'Lavadora', '900000.00'),
(24, 'Secadora de Ropa', '800000.00'),
(25, 'Tostadora', '30000.00'),
(26, 'Plancha de Ropa', '50000.00'),
(27, 'Hervidor de Agua', '40000.00'),
(28, 'Licuadora de Mano', '60000.00'),
(29, 'Exprimidor de Cítricos', '30000.00'),
(30, 'Máquina de Café', '90000.00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id_cliente`),
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
