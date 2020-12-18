const miPromesa = new Promise((resolver, rechazar) => {
    console.log('Soy la tarea 1');

    resolver();
})
.then(() => {
    throw new Error('Algo falló, intenta de nuevo');
        
    console.log('Soy la tarea 2');
})
.catch(() => {
    console.log('Soy la tarea 3, salté la 2');
})
.then(() => {
    console.log('Soy la tarea 4, ¡he acabado!');
});