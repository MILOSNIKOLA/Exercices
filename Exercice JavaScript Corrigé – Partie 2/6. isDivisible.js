function isDivisible(n) {
	// return n / 5 == true || n % 5 == false
    return n % 5 === 0;
}

// Afficher la sortie

console.log(isDivisible(5));
console.log(isDivisible(10));
console.log(isDivisible(6));