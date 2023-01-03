

const pets = ['Rajar', 'Pepper', 'Darwin', 'Nina'];

pets.push('Lurdinha');

pets[5] = 'Ninho';
pets.push('Jão');
pets.push('Granja');
pets.push('Funny');


/*console.log(pets); - Imprime todos os objetos;
console.log(pets[2]); - Imprime somente o objeto 2;
console.log(pets.pop()); - Imprime somente o último objeto.
*/

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}