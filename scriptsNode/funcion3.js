//this, te imprime el global
function test(){
	console.log(this);
}
test();

//Agregando propiedades
function test2(){
	this.miClase='Programación';
}
test2();
console.log(global.miClase);

//Funciones constructoras
function Circulo(radio){
	this.radio=radio;
	this.getArea= function(){
		return Math.PI * Math.pow(this.radio,2);
	}
}
let miCirculo= new Circulo(10);
console.log(miCirculo);

let otroCirculo= new Circulo(5);
console.log(otroCirculo);