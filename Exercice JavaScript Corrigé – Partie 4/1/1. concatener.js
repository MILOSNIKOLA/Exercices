// Exercice 1:

// Créez une fonction pour concaténer deux tableaux entiers.

// Exemple:

// concatener([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concatener([9, 8], [1, 5, 6, 7]) ➞ [9, 8, 1, 5, 6, 7]

// concatener([1, 1, 1], [2, 2, 2]) ➞ [1, 1, 1, 2, 2, 2]

function concatener(tab1, tab2) {
	
    // Écrivez votre code ici

    // return tab1 + ',' + tab2

    const array1 = [tab1];
    const array2 = [tab2];
    return array3 = tab1.concat(tab2);

    // return [...tab1,...tab2]

}

// Afficher la sortie

console.log(concatener([1, 2], [3, 4]));
console.log(concatener([9, 8], [1, 5, 6, 7]));
console.log(concatener([1, 1, 1], [2, 2, 2]));