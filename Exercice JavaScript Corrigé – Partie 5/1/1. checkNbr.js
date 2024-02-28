// Exercice 1:

// Écrivez une fonction qui prend un entier et:

// Si le nombre est un multiple de 3, retournez « Hello ».
// Si le nombre est un multiple de 5, retournez « World ».
// Si le nombre est un multiple de 3 et de 5, retournez « Hello World ».

// Exemple:

// checkNbr(3) ➞ "Hello"

// checkNbr(5) ➞ "World"

// checkNbr(15) ➞ "Hello World"

function checkNbr(n) {

	// Écrivez votre code ici

    if (n % 3) {
        return "Hello"
    } if (n % 5) {
        return "World"
    }  else if (n % 3,5) {
        return "Hello World"
    }

    // return n % 15 === 0 ? "Hello World" : n % 3 === 0 ? "Hello" : "World";

}

// Afficher la sortie

console.log(checkNbr(3));
console.log(checkNbr(5));
console.log(checkNbr(15));