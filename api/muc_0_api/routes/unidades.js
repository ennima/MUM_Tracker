var express = require('express');
var router = express.Router();
var db = require('./db');
var utilidades = require('./utilidades');

function existe_key(key, keys){
    if(keys.indexOf(key) != -1)
    {
      return true;
    }else{
      return false;
    }
}

console.log(db);
console.log("db-var lala original: "+ db.lala);
/* GET users listing. */
router.get('/', function(req, res, next) {
  var query = "SELECT `unidades`.id, `unidades`.nombre, `unidades`.descripcion, `unidades`.lugar, `unidades`.horario_txt, `unidades_estados`.nombre as status FROM `unidades` INNER JOIN `unidades_estados` ON `unidades`.status = `unidades_estados`.id WHERE 1;";
  db.executeQuery(query,function(error, data){
      console.log(error);
  		utilidades.cors(res);
		res.send(data);
	});
});

/* GET users listing. */
router.post('/', function(req, res, next) {

  console.log(Object.keys(req.body));
  var keys = Object.keys(req.body);
  var query = "";
  // console.log("Existe desc: "+keys.indexOf('descripcion'));
  // console.log("Existe status: "+keys.indexOf('status'));
  // console.log("Existe id: "+keys.indexOf('id'));
  // console.log("Existe action: "+keys.indexOf('action'));



  if(existe_key('id',keys) && existe_key('status',keys) && existe_key('action',keys)){
    console.log("update status");
    query = "UPDATE `muc_db`.`unidades` SET `status` = '"+req.body.status+"' WHERE `unidades`.`id` = "+req.body.id+";";
      db.executeQuery(query,function(error, data){
        console.log(error);
        console.log(data);
        // utilidades.cors(res);
      // res.send(data);
    });
  }

  if(existe_key('id',keys) && existe_key('lugar',keys) && existe_key('action',keys)){
    console.log("update lugar");
    query = "UPDATE `muc_db`.`unidades` SET `lugar` = '"+req.body.lugar+"' WHERE `unidades`.`id` = "+req.body.id+";";
      db.executeQuery(query,function(error, data){
        console.log(error);
        console.log(data);
        // utilidades.cors(res);
      // res.send(data);
    });
  }

  if(existe_key('id',keys) && existe_key('horario_txt',keys) && existe_key('action',keys)){
    console.log("update horario_txt");
    query = "UPDATE `muc_db`.`unidades` SET `horario_txt` = '"+req.body.horario_txt+"' WHERE `unidades`.`id` = "+req.body.id+";";
      db.executeQuery(query,function(error, data){
        console.log(error);
        console.log(data);
        // utilidades.cors(res);
      // res.send(data);
    });
  }

  if(existe_key('id',keys) && existe_key('nombre',keys) && existe_key('action',keys)){
    console.log("update nombre");
    query = "UPDATE `muc_db`.`unidades` SET `nombre` = '"+req.body.nombre+"' WHERE `unidades`.`id` = "+req.body.id+";";
      db.executeQuery(query,function(error, data){
        console.log(error);
        console.log(data);
        // utilidades.cors(res);
      // res.send(data);
    });
  }

  if(existe_key('id',keys) && existe_key('descripcion',keys) && existe_key('action',keys)){
    console.log("update descripcion");
    query = "UPDATE `muc_db`.`unidades` SET `descripcion` = '"+req.body.descripcion+"' WHERE `unidades`.`id` = "+req.body.id+";";
      db.executeQuery(query,function(error, data){
        console.log(error);
        console.log(data);
        // utilidades.cors(res);
      // res.send(data);
    });
  }
  
  utilidades.cors(res);
  res.json({data:"algo"});
});



router.post('/status', function(req, res, next) {
  
  console.log(Object.keys(req.body));
  var keys = Object.keys(req.body);
  console.log("Existe desc: "+keys.indexOf('descripcion'));
  console.log("Existe status: "+keys.indexOf('status'));
  console.log("Existe id: "+keys.indexOf('id'));
  console.log("Existe action: "+keys.indexOf('action'));
  for(var i = 0; i < keys.length; i++){
    console.log(keys[i]);
  }
  utilidades.cors(res);
  res.json({data:"Status"});
});

module.exports = router;