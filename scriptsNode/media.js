class Media{
	constructor (titulo,calificacion){
		this._titulo=titulo;
		this._calificacion=[calificacion];
		this._prestado=false;
	}
	get titulo(){
		return this._titulo;
	}
	get calificacion(){
		return this._calificacion;
	}
	get prestado(){
		return this._prestado;
	}
	set prestado(estado){
		this._prestado=estado;
	}
	set titulo(titulo){
		this._titulo=titulo;
	}
	agregarCalificacion(calificacion){
	if (calificacion<=10) {
		this._calificacion.push(calificacion);
	}else{
		this._calificacion.push(10);
	}
	}
	obtenerCalificacionPromedio(){
		let promedio;
		let suma=0;
		for(let i=0;i< this._calificacion.length ;i++){
			suma+=this._calificacion[i];
		}
		promedio= suma/this._calificacion.length;
		return promedio;

	}
	cambiarEstatusPrestado(estado){
		this._prestado=estado;
	}
}


class Libro extends Media{
	constructor(titulo,calificacion,paginas,autor){
	super(titulo,calificacion);
	this._paginas=paginas;
	this._autor=autor;
	}

	get paginas(){
		return this._paginas;
	}
	get autor(){
		return this._autor;
	}
}

class Video extends Media{
	constructor(director,titulo,duracion,calificacion){
		super(titulo,calificacion);
		this._director=director;
		this._duracion=duracion;
	}
	get director(){
		return this._director;
	}
	get duracion(){
		return this._duracion;
	}
}

class CD extends Media{
	constructor(artista,titulo,calificacion,canciones){
		super(titulo,calificacion);
		this._artista=artista;
		this._canciones=[canciones];
	}
	get artista(){
		return this._artista;
	}
	get canciones(){
		return this._canciones;
	}
	agregarCancion(cancion){
		this._canciones.push(cancion);
	}
}

const boc= new CD ('Blue Oyster Cult','Fire of Unknown Origin',8,'Burning for you');
console.log(`El titulo del CD es: ${boc.titulo}`);
console.log(`La primera canción se llama ${boc.canciones}`);
boc.agregarCalificacion(9);
boc.agregarCalificacion(8);
boc.agregarCancion('After Dark');
console.log(`Las canciones ${boc.artista} son ${boc.canciones}`);
console.log(`Las calificaciones del album ${boc.titulo} son ${boc.calificacion}`);
console.log(`El promedio de calificaciones es ${boc.obtenerCalificacionPromedio()}`);
console.log(`Estado: ${boc.prestado}`);
boc.cambiarEstatusPrestado(true);
console.log(`Nuevo estado: ${boc.prestado}\n`);


const miLibro= new Libro('Túneles',10,444,'Gordon-Williams');
miLibro.agregarCalificacion(9);
miLibro.agregarCalificacion(8);
miLibro.agregarCalificacion(10);
console.log(`Las calificaciones de ${miLibro.titulo} del autor ${miLibro.autor} 
tiene las siguientes calificaciones ${miLibro.calificacion}, 
con un promedio de ${miLibro.obtenerCalificacionPromedio()}.El libro cuenta con ${miLibro.paginas} páginas\n`);
miLibro.agregarCalificacion(5);

const miVideo = new Video('Missa','Mi video',210,8);
miVideo.agregarCalificacion(9);
miVideo.agregarCalificacion(7);
console.log(`El director ${miVideo.director} realizó el video ${miVideo.titulo}
tiene una duración de ${miVideo.duracion} minutos, su estado de prestado es ${miVideo.prestado}
tiene una calificación promedio de ${miVideo.obtenerCalificacionPromedio()}`);

