on_view_evt = function(){
		    console.log("On view overrr");
		    stop()
		    start()
		}

		var seconds = 0,
		    t,
		    poll_time_seconds = 30,
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
		    	load_table_info()
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
		    timer();
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
			$('#lu_table tbody').html("")
			$.get("http://127.0.0.1:3000/unidades", function(data, status){
				// console.log("Data: " + data + "\nStatus: " + status);
				// console.log(data)
				for(let i= 0; i < data.rows.length ; i++)
				{
					console.log(data.rows[i])
					$('#lu_table').append($('<tr>')
					    .append($('<td style="display: none;">').append(data.rows[i].id))
					    .append($('<td>').append(data.rows[i].nombre))
					    .append($('<td class="hidden-xs-down not-visible">').append(data.rows[i].descripcion))
					    .append($('<td>').append(data.rows[i].status))
					    .append($('<td>').append(data.rows[i].lugar))
					    .append($('<td class="hidden-xs-down not-visible">').append("---"))
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
				$('#lu_table').Tabledit({
					url:'http://127.0.0.1:3000/unidades',
					editButton: false,
	                deleteButton: false,
	               
	                columns: {
	                    identifier: [0, 'id'],
	                    editable: [[3, 'status', estados_string_obj],[4, 'lugar']]
	                }
	            });

				estados = "";
				estados_string_obj = "{";
				console.log("Cadena estados 1: "+estados_string_obj)
			})

		}
		