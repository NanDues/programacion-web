//Ejemplo de solicitud síncrona con eventos más utilizados de respuesta
// load,error y progress
//1. Se crea objeto de solicitud XMLHttpRequest
let xhr= new XMLHttpRequest();

//2.Se configura; solicitud-Get para URL http://localhost:3000/archivo.txt
xhr.open('GET','http://localhost:3000/archivo.txt');
//3.Se envia solicitud
xhr.send();
//4.Los siguientes serán invocados después de que la respuesta sea recibida
xhr.onload= function(){
	if (xhr.status != 200) { // analiza status de la respuesta HTTP
		alert(`Error ${xhr.status}: ${xhr.statusText}`); //Ejemplo 404:Not found
	}else{ //muestra resultado
		alert(`Listo, se recibieron ${xhr.response.length} bytes`);
	}
};

xhr.onprogress= function(event){
	if (event.lengthComputable) {
		alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
	}else{
		alert(`Recibidos ${event.loaded} bytes`); //no se recibio longitud del contenido Content-Length
	}
};

xhr.onerror=function(){
	alert("Fallo solicitud");
};