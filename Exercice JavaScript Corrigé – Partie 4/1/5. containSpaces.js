// Exercice 5:

// Créez une fonction qui renvoie TRUE si une chaîne contient des espaces. 
// Sinon renvoie FALSE.

// Exemple:

// containSpaces("Thomas") ➞ false

// containSpaces("Hello World!") ➞ true

// containSpaces(" ") ➞ true

// containSpaces("") ➞ false


function containSpaces(str) {

	// Écrivez votre code ici
    
   return str.includes(" ")

}

// Afficher la sortie

console.log(containSpaces("Thomas"));
console.log(containSpaces("Hello World!"));
console.log(containSpaces(" "));
console.log(containSpaces(""));