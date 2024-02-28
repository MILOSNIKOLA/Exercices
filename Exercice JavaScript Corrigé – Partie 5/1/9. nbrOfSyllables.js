
// Exercice 9:

// Créez une fonction qui renvoie le nombre de syllabes dans une chaîne.

// Exemple:

// nbrOfSyllables("SOSOSOSO") ➞ 4

// nbrOfSyllables("HAHAHAHAHA") ➞ 5

// nbrOfSyllables("RIRIRIRIRIRIRIRIRIRI") ➞ 10

function nbrOfSyllables(str) {

	// Écrivez votre code ici

    // return str.substring(4).length 

    return str.length/2;

}

// Afficher la sortie

console.log(nbrOfSyllables("SOSOSOSO"));
console.log(nbrOfSyllables("HAHAHAHAHA"));
console.log(nbrOfSyllables("RIRIRIRIRIRIRIRIRIRI"));