SELECT * FROM `usuarios` INNER JOIN `permisos` ON `usuarios`.tipo = `permisos`.permiso_id WHERE 1



SELECT `usuarios`.usuario_id, `usuarios`.nombre, `usuarios`.pass, `permisos`.permiso_name AS permiso, `permisos`.privilegios FROM `usuarios` INNER JOIN `permisos` ON `usuarios`.tipo = `permisos`.permiso_id WHERE 1


SELECT `usuarios`.usuario_id, `usuarios`.nombre, `usuarios`.pass, `permisos`.permiso_name AS permiso, `permisos`.privilegios FROM `usuarios` INNER JOIN `permisos` ON `usuarios`.tipo = `permisos`.permiso_id WHERE `usuarios`.nombre = 'admin' AND `usuarios`.pass = 'adminGV!'