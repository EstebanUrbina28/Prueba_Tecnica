SELECT 
    clientes.nombre AS NombreCliente, 
    productos.nombre_producto AS NombreProducto
FROM clientes
INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
INNER JOIN productos ON pedidos.id_producto = productos.id_producto
GROUP BY clientes.id_cliente, productos.nombre_producto
HAVING MAX(pedidos.fecha_pedido) >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);