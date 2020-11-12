let botonRef = document.getElementById('Breferencias');
let ListaLinks  = document.getElementById('links');
let activo= true;
function mostrarLinks(){
	if (activo) {
		ListaLinks.style.display='block';
		activo=false;
		botonRef.innerHTML= '-';	
	}else if (activo==false) {
		ListaLinks.style.display= 'none';
		activo=true;
		botonRef.innerHTML='+';
	}
}

botonRef.addEventListener('click', mostrarLinks);

let card = document.getElementById('tarjeta');

function fondoCard(){
	card.style.backgroundColor= 'rgb(204,255,144)';
}
function fondoCardOr(){
	card.style.backgroundColor='';
}

card.addEventListener('mouseover',fondoCard);
card.addEventListener('mouseout', fondoCardOr);
