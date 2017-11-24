var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var pool      =    mysql.createPool({
    connectionLimit : 10,
	host: "192.168.196.122",
	user: "root",
	password: "password",
    database : 'muc_db',
    debug    :  false
}); 

const executeQuery=function(query,callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }   
        connection.query(query,function(err,rows){
            connection.release();
            if(!err) {
                callback(null, {rows: rows});
            }           
        });
        connection.on('error', function(err) {      
              throw err;
              return;     
        });
    });
}

const cors = function(res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

};


/* GET users listing. */
router.get('/', function(req, res, next) {
  executeQuery("SELECT * FROM muc_db.unidades;",function(error, data){
  		cors(res);
		res.send(data);
	});
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(Object.keys(req.body));
  var keys = Object.keys(req.body);
  console.log("Existe desc: "+keys.indexOf('descripcion'));
  console.log("Existe status: "+keys.indexOf('status'));
  for(var i = 0; i < keys.length; i++){
  	console.log(keys[i]);
  }
  cors(res);
  res.json({data:"algo"});
});

router.post('/status', function(req, res, next) {
  console.log(Object.keys(req.body));
  var keys = Object.keys(req.body);
  console.log("Existe desc: "+keys.indexOf('descripcion'));
  console.log("Existe status: "+keys.indexOf('status'));
  for(var i = 0; i < keys.length; i++){
    console.log(keys[i]);
  }
  cors(res);
  res.json({data:"Status"});
});

module.exports = router;