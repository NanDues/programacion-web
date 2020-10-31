let elb1 = document.getElementById('b1');
let elb2 = document.getElementById('b2');
let elb3 = document.getElementById('b3');
let reset = document.getElementById('reset')
let resetB = function(){
	elb1.innerHTML= 'Hola';
	elb2.style.color='';
	elb2.style.backgroundColor='';
	elb3.style.color='';
	elb3.style.backgroundColor='';
	elb3.style.fontSize='';
}
 reset.onclick = resetB;
function cambiarB1(){
	elb1.innerHTML = 'Adios';
}

elb1.addEventListener('mouseout', cambiarB1);

function elementoB2(){
	elb2.style.color='green';
	elb2.style.backgroundColor='lightblue';
}

elb2.addEventListener('click',elementoB2);

function cambiarB3(){
	elb3.style.color = 'purple';
	elb3.style.backgroundColor='yellow';
	elb3.style.fontSize ='3em';
}

elb3.addEventListener('dblclick',cambiarB3);