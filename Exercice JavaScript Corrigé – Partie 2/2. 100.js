function check(a, b) {
	// return ((a + b <= 100 === true) && (a + b >= 100 === false))
    return a + b < 100;
}

// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));