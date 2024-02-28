// Exercice 2:

// Créez une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.

// Exemple:

// find([2, 7, 1], 7) ➞ 1

// find([6, 9, 5], 6) ➞ 0

// find([6, 7, 8], 9) ➞ -1

function find(tab, val) {

	// Écrivez votre code ici

	// return tab.some(tab => tab === val)

	for(var i = 0; i < tab.length; i++){
		if(tab[i] == val) return i;
	  }
	  return -1;
	
}

// Afficher la sortie

console.log(find([2, 7, 1], 7));
console.log(find([6, 9, 5], 6));
console.log(find([6, 7, 8], 9));



