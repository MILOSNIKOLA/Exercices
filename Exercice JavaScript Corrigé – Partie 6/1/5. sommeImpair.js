// Exercice 5:

// Créez une fonction récursive qui renvoie le total de tous les nombres impairs 
// jusqu’à n(inclus). 
// n sera donné comme un nombre impair.

// Exemple:

// sommeImpair(3) ➞ 4

// // 1 + 3 = 4

// sommeImpair(7) ➞ 16

// sommeImpair(59) ➞ 900

function sommeImpair(n) {

	// Écrivez votre code ici
	
	
	if (n == 1) {
			return 1 
		} 
	
		else  {
			return n + sommeImpair(n - 2) 
		}
		
		
		
}

// Afficher la sortie

console.log(sommeImpair(3));
console.log(sommeImpair(7));
console.log(sommeImpair(59));

	// let x = 1;

	// for (let index = 2; index < n + 1; index++) {
	// 	if (n % 1 == 0) {
			
	// 	} else {
	// 		return n
	// 	}

	// 	
	
	// }

	// return n


// l

// if (n % 1 === 0 ) {
	// 	return n
	// } else {
	// 	return 0
	// }

	
	// if (n == 1) {

	// 	return 1
	
	// } else {
	// 	return n * sommeImpair(n - 1)
	// }

	// if (n === 1) {
	// 	return 1
	// } else {
	// 	return n + sommeImpair(n - 1)
	// }
// if (n == 1) {
	// 	 return 1
	// } 

	// else {
	// 	return n + sommeImpair(n - 1)
	// }

	// // console.log(n);
	// let x = 1;

	// for (let i = 2; i < n + 1; i++) {
		
	// 	if (n % 1 === 0 ) {
	// 			 1
	// 		} else {
	// 			 0
	// 		}
	// 	return x 
	// }

// if (n == 1) {
	// 	 return 1
	// } 

	// else {
	// 	return n + (sommeImpair(n - 1) && n % 2 == 0)
	// }
	//  
	
	// let x = 1;
	// let r = n % 1

	// for (let i = 2; i < n + 1; i++) {
		
	// 	if (n <= 1) return 1;
		
	// 		return n + (n - 1) && r

	// 		}