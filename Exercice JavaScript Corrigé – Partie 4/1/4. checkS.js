// Exercice 4:

// Créez une fonction qui prend une chaîne (un nom aléatoire). Si le dernier caractère du nom est un « s », retournez TRUE, sinon retournez FALSE.

// Exemple:

// checkS("Thomas") ➞ true

// checkS("Ali") ➞ false

// checkS("Alex") ➞ false

// checkS("Alvis") ➞ true

function checkS(str) {

	// Écrivez votre code ici
    
    return str.endsWith("s")

    // return str[str.length-1] === "s";
}

// Afficher la sortie

console.log(checkS("Thomas"));
console.log(checkS("Ali"));
console.log(checkS("Alex"));
console.log(checkS("Alvis"));