var express = require('express');
var router = express.Router();
var db = require('./db');
var utilidades = require('./utilidades');

// var mysql = require('mysql');

// var pool      =    mysql.createPool({
//     connectionLimit : 10,
// 	host: "192.168.196.71",
// 	user: "root",
// 	password: "password",
//     database : 'muc_db',
//     debug    :  false
// }); 

// var cors = function(res){
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

// };

// var executeQuery=function(query,callback){
//     pool.getConnection(function(err,connection){
//         if (err) {
//           connection.release();
//           throw err;
//         }   
//         connection.query(query,function(err,rows){
//             connection.release();
//             if(!err) {
//                 callback(null, {rows: rows});
//             }           
//         });
//         connection.on('error', function(err) {      
//               throw err;
//               return;     
//         });
//     });
// }



/* GET home page. */
router.get('/unidades_estados', function(req, res, next) {
	db.executeQuery("SELECT * FROM muc_db.unidades_estados;",function(error, data){
		
		// res.header("Access-Control-Allow-Origin", "*");
  // 		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		utilidades.cors(res);
		res.send(data);
	});

  
});	

// router.post('/equipos', function(req, res, next) {

// 	executeQuery("SELECT * FROM muc_db.unidades;",function(error, data){
// 		res.send(data);
// 	});
  
// });

router.post('/esados_equipos', function(req, res, next) {
	
	db.executeQuery("SELECT * FROM muc_db.unidades_estados;",function(error, data){
			utilidades.cors(res);
			res.send(data);
	});
	
  
});

router.patch('/esados_equipos', function(req, res, next) {
	
	db.executeQuery("SELECT * FROM muc_db.unidades_estados;",function(error, data){
			utilidades.cors(res);
			res.send(data);
	});
	
  
});

router.get('/esados_equipos', function(req, res, next) {
	
	db.executeQuery("SELECT * FROM muc_db.unidades_estados;",function(error, data){
			utilidades.cors(res);
			res.send(data);
	});
	
  
});

module.exports = router;
