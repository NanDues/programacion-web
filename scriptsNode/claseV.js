class Cirujano{
	constructor(nombre,departamento){
		this._nombre=nombre;
		this._departamento= departamento;
		this._diasVacacionesDisp=20;
	}
	set nombre(nombre){
		this._nombre=nombre;
	}
	set departamento(departamento){
		this._departamento=departamento;
	}
	get nombre(){
		return this._nombre;
	}
	get departamento(){
		return this._departamento;
	}
	get diasVacacionesDisp(){
		return this._diasVacacionesDisp;
	}
	tomarVacaciones(dias){
		this._diasVacacionesDisp=this._diasVacacionesDisp-dias;
	}
}

const cirujanoAlfonso = new Cirujano ('Alfonso', 'Cardiovascular');
const cirujanoBrianna = new Cirujano('Brianna', 'Neurologia');

console.log(cirujanoAlfonso.nombre);
cirujanoAlfonso.tomarVacaciones(7);
console.log(`${cirujanoAlfonso.nombre} tiene ${cirujanoAlfonso.diasVacacionesDisp} dias de vacaciones disponibles`)