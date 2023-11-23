
const heroes = ['batman', 'superman', 'spiderman', 'aquaman'];


/* For tradicional */
console.warn('For tradicional')
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

/* For in */
console.warn('For in');/* esta haciendo lo mismo que el pasado, recorrer todo el arreglo y mostrarlo, pero con una sintaxis mas limpia */
for(let i in heroes){
    console.log(heroes[i]);
}

/* For of */
console.warn('For of');
for(let i of heroes){/* hace lo mismo pero ya no ocupas hacer el "heroes[i]" si no solamente la i en este caso */
    console.log(i);
}