
// Exercice 7:

// Créez une fonction qui prend un tableau et renvoie la somme de tous les nombres du tableau.

// Exemple:

// sum([1, 1, 1]) ➞ 3

// sum([1, 2, 3]) ➞ 6

// sum([-2, 2, 1]) ➞ 1

function sum(tab) {

	// Écrivez votre code ici

    let sum = 0;
    
    for (let i = 0; i < tab.length; i++) {
      sum += tab[i];
    }
    
    return sum
}

// Afficher la sortie

console.log(sum([1, 1, 1]));
console.log(sum([1, 2, 3]));
console.log(sum([-2, 2, 1]));