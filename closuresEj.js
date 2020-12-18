function generadorDeNums(){
	//Variable local
	var num=5;
	function imprimeNumero(){
		console.log(num);
	}
	num++;
	return imprimeNumero;
}
var numero= generadorDeNums();
numero();