// Exercice 9:

// Créez une fonction qui prend un mot et détermine s’il est pluriel ou singulier. Un mot pluriel est celui qui se termine par « s ». S’il est pluriel renvoyer TRUE sinon FALSE.

// Exemple:

// check("enfants") ➞ true

// check("filles") ➞ true

// check("fille") ➞ false

// check("enfant") ➞ false

function check(str) {

	// Écrivez votre code ici

    const str1 = 's';
    
    return (str.endsWith('s'))

    // return str[str.length - 1] == 's';
}

// Afficher la sortie

console.log(check("enfants"));
console.log(check("filles"));
console.log(check("fille"));
console.log(check("enfant"));