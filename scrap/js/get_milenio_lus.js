function get_lus_mil()
{
    
    var tbodyx = $("table");

    var rows = [];
    var lus = [];
    var stop = 0;
    var lineas = tbodyx.find("tbody").find("tr").each(function(){
        var row = [];
        var lu = {};
        $(this).find("td").each(function(){
          //console.log($(this).children().text());
          let valor = $(this).children().text();
          /*if(valor == ""){
            console.log("Empty val");
          }else if(valor.replace(/^\s+|\s+$/gm, '') == ""){
            console.log("Space val");
          }else{
              
          }*/
          row.push($(this).children().text());
          stop += 1;
        });
        //if(stop >= 4){
          //console.log(row[2]);
          lu = {"id_lu":row[0],"nombre":row[2],"type":row[4],"usage":row[8].replace("%","").replace(/^\s+|\s+$/gm, '')}
          //console.log(lu);
          lus.push(lu);
          
          //return false;
        //}
        
    });
    console.log(lus);
    var lus_mil = [];
    lus.forEach(function(item, index){
      
      if(item.nombre.includes("MILENIO")){
        let item_split = item.nombre.split("_MILENIO_");
        let lu_number = item_split[1];
        let lu_serial_part =item_split[0].split("-")[1];
        let lu_mil = {
                      "number":lu_number
                      ,"nickname": "Milenio "+lu_number
                      ,"serial_part":lu_serial_part
                      ,"nombre": item.nombre
                      ,"modelo": item.type
                      ,"uso": item.usage
                      };
        //console.log(lu_mil)
        lus_mil.push(lu_mil)
      }
    });
    function compare_lu_number(a,b) {
      if (a.number < b.number)
        return -1;
      if (a.number > b.number)
        return 1;
      return 0;
    }

    let sort_lus_mil = lus_mil.sort(compare_lu_number);
    console.log(sort_lus_mil);
}
