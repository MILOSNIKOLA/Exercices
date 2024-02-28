
function tabX2(tab) {
	
  for (let i = 0; i < 1; i++) {
    return tab.map(i => i * 2)
  }
}
    
// NO !

// Afficher la sortie

console.log(tabX2([1, 2, 3]));
console.log(tabX2([5, 10, 20]));
console.log(tabX2([100, 200, 300]));

/*

Créez une fonction qui prend un tableau avec des nombres et retourne un tableau avec les éléments multipliés par deux.

Exemple:
tabX2([1, 2, 3]) ➞ [ 2, 4, 6 ]

tabX2([5, 10, 20]) ➞ [ 10, 20, 40 ]

tabX2([100, 200, 300]) ➞ [ 200, 400, 600 ]

*/

