var express = require('express');
var router = express.Router();
var db = require('./db');
var utilidades = require('./utilidades');


// console.log(db);
// console.log("db-var lala usuarios: "+ db.lala);
/* GET users listing. */
router.get('/', function(req, res, next) {
  db.executeQuery("SELECT * FROM `usuarios`;",function(error, data){
      console.log(error);
  		utilidades.cors(res);
		res.send(data);
	});
});

router.post('/login', function(req, res, next) {
	console.log("REQ:");
	console.log(req.body);

	// var query = "SELECT `usuarios`.usuario_id, `usuarios`.nombre, `usuarios`.pass, `permisos`.permiso_name AS permiso, `permisos`.privilegios FROM `usuarios` INNER JOIN `permisos` ON `usuarios`.tipo = `permisos`.permiso_id WHERE `usuarios`.nombre = 'admin' AND `usuarios`.pass = 'adminGV!';";
	// db.executeQuery(query,function(error, data){
	//   console.log(error);
	// 		utilidades.cors(res);
	// 	res.send(data);
	// });
});

module.exports = router;