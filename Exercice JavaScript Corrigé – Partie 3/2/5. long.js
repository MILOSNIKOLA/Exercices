
// Exercice 5:

// Écrivez une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.

// Exemple:

// size("alex") ➞ 5

// size("x") ➞ 1

// size("") ➞ 0

function size(str, n = 0) {

    // Écrivez votre code ici

    if(str[n] === undefined) {
        return n
      }
     return size(str, n + 1)

    // return str.length 

}

// Afficher 

console.log(size("alex"));
console.log(size("x"));
console.log(size(""));


