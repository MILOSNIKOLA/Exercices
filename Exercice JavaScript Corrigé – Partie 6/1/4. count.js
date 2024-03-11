// Exercice 4:

// Créez une fonction qui prend une phrase et renvoie le nombre de mots.

// Exemple:

// count("Welcome to WayToLearnX") ➞ 3

// count("Hello World") ➞ 2

// count("I am going to my school") ➞ 6

function count(str) {

	// Écrivez votre code ici

    return str.split(' ').length

}

// Afficher la sortie

console.log(count("Welcome to WayToLearnX"));
console.log(count("Hello World"));
console.log(count("I am going to my school"));