function check(str) {
	// return str.endsWith('s')
    return str[str.length - 1] == 's';
}

// Afficher la sortie
console.log(check("enfants"));
console.log(check("filles"));
console.log(check("fille"));
console.log(check("enfant"));