// Exercice 5:

// Créez une fonction qui renvoie la valeur ASCII du caractère transmis.

// Exemple:

// charToAscii("A") ➞ 65

// charToAscii("a") ➞ 97

// charToAscii("+") ➞ 43

function charToAscii(c) {

	// Écrivez votre code ici

    return c.codePointAt()

    // return c.charCodeAt(0);

}

// Afficher la sortie

console.log(charToAscii("A"));
console.log(charToAscii("a"));
console.log(charToAscii("+"));