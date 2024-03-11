// Exercice 1:

// Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre ou non.

// Exemple:

// checkOrder("abc") ➞ true

// checkOrder("zyx") ➞ false

// checkOrder("123") ➞ true

// checkOrder("aabbcc") ➞ true

function checkOrder(str) {

	// Écrivez votre code ici

	
	// let aaa = "abcdefghijklmnopqrstuvwxyz1234567890aabbccddeeffggiijj"

	// return aaa.includes(str)

	return str === str.split("").sort().join("")

}

// Afficher la sortie

console.log(checkOrder("abc"));
console.log(checkOrder("zyx"));
console.log(checkOrder("123"));
console.log(checkOrder("aabbcc"));
// console.log(checkOrder("1ef"));

// let aaa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// var regex1 = /[a-z]/g;
	