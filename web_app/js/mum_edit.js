
var permisos = "V"
var poll_active = true
var table_visible = true
var animation_smooth = 200

on_view_evt = function(){
    console.log("On view overrr");
    stop()
    start()
}

var seconds = 0,
    t,
    poll_time_seconds = 15,
    show_timer_log = true;

function timer_log()
{
	if(show_timer_log){
		show_timer_log = false;
	}else{
		show_timer_log = true;
	}

} 

function add() {
    seconds++;
    if (show_timer_log) {
    	console.log(seconds)
    }
    
    if(seconds >= poll_time_seconds){
    	console.log("Imprime Data")
    	if(table_visible){
		$('#lu_table tbody').fadeOut( animation_smooth )
		
		// setTimeout(
		//   function() 
		//   {
		//     //do something special
		//     // $('#lu_table tbody').html("")
		//     console.log("end delay")
		//   }, 1000);
		
		table_visible = false
	}
    	load_table_info()

    if(table_visible == false){
			$('#lu_table tbody').slideUp( animation_smooth ).delay( animation_smooth*2 ).fadeIn( animation_smooth )
			table_visible = true
	}

    	seconds = 0
    }

    	timer();	
    
    
}
function timer() {
	if(on_edit){
    	console.log("Editando...");
    }else{
    	t = setTimeout(add, 1000);
    }
}

function start() {
	if (poll_active) {
		timer();
	}
 }

function stop() {
    clearTimeout(t);
}

var estados = "";
var estados_string_obj = "{";
console.log("Pidiendo data....")


load_table_info()

start()

function load_table_info(){
	
	
	$.get("http://127.0.0.1:3000/unidades", function(data, status){
		// console.log("Data: " + data + "\nStatus: " + status);
		// console.log(data)
		$('#lu_table tbody').html("")
		for(let i= 0; i < data.rows.length ; i++)
		{
			console.log(data.rows[i])
			$('#lu_table').append($('<tr>')
			    .append($('<td style="display: none;">').append(data.rows[i].id))
			    .append($('<td>').append(data.rows[i].nombre))
			    .append($('<td class="hidden-xs-down not-visible">').append(data.rows[i].descripcion))
			    .append($('<td class="'+data.rows[i].status+'">').append(data.rows[i].status))
			    .append($('<td>').append(data.rows[i].lugar))
			    .append($('<td class="hidden-xs-down not-visible">').append(data.rows[i].horario_txt))
			  )
		}
		load_status_catalog()
			
	});

}

function load_status_catalog(){

	$.get("http://127.0.0.1:3000/unidades_estados", function(data, status){
		// console.log("Data: " + data + "\nStatus: " + status);
		estados = data;
		  for(let i= 0; i < estados.rows.length ; i++)
		  {
		  	// console.log(estados.rows[i])
		  	let edo = estados.rows[i]
		  	estados_string_obj += `"${edo.id}":"${edo.nombre}"`
		  	if(i<estados.rows.length-1){
		  		// console.log(",")
		  		estados_string_obj += ","
		  	}
		  }
		estados_string_obj += "}"
		console.log("Cadena estados 1: "+estados_string_obj)
		var editable_rows = []
		// var editable_rows = [[3, 'status', estados_string_obj],[4, 'lugar']]
		if(permisos.indexOf("N") > -1)
		{
			editable_rows.push([1, 'nombre'])
		}
		if(permisos.indexOf("D") > -1)
		{
			editable_rows.push([2, 'descripcion'])
		}
		if(permisos.indexOf("S") > -1)
		{
			editable_rows.push([3, 'status', estados_string_obj])
		}
		if(permisos.indexOf("L") > -1)
		{
			editable_rows.push([4, 'lugar'])
		}
		if(permisos.indexOf("H") > -1)
		{
			editable_rows.push([5, 'horario_txt'])
		}

		$('#lu_table').Tabledit({
			url:'http://127.0.0.1:3000/unidades',
			editButton: false,
            deleteButton: false,
           
            columns: {
                identifier: [0, 'id'],
                editable: editable_rows
            }
        });

		estados = "";
		estados_string_obj = "{";
		console.log("Cadena estados 1: "+estados_string_obj)
	})

}
		