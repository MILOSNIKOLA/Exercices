// Exercice 3:

// Créez une fonction qui prend un tableau avec des nombres et retourne un tableau avec les éléments multipliés par deux.

// Exemple:

// tabX2([1, 2, 3]) ➞ [ 2, 4, 6 ]

// tabX2([5, 10, 20]) ➞ [ 10, 20, 40 ]

// tabX2([100, 200, 300]) ➞ [ 200, 400, 600 ]

function tabX2(tab) {

	// Écrivez votre code ici

    return tab.map((x) => x * 2);


}

// Afficher la sortie

console.log(tabX2([1, 2, 3]));
console.log(tabX2([5, 10, 20]));
console.log(tabX2([100, 200, 300]));