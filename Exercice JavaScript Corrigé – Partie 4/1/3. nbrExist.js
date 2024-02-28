// Exercice 3:

// Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.

// Exemple:

// nbrExist([6, 7, 8], 7) ➞ true

// nbrExist([1, 2, 3], 5) ➞ false

// nbrExist([], 0) ➞ false

function nbrExist(tab, val) {

	// Écrivez votre code ici

    return tab.some(tab => tab === val)

    // for (var i = 0; i < tab.length; i++){
    //     if (tab[i] === val){
    //       return true;
    //     }
    //   }
    //   return false;
    
}

// Afficher la sortie

console.log(nbrExist([6, 7, 8], 7));
console.log(nbrExist([1, 2, 3], 5));
console.log(nbrExist([], 0));