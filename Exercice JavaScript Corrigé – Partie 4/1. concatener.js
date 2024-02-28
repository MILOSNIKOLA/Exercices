function concatener(tab1, tab2) {
	// return tab1 + tab2
    return [...tab1,...tab2]
}

// Afficher la sortie
console.log(concatener([1, 2], [3, 4]));
console.log(concatener([9, 8], [1, 5, 6, 7]));
console.log(concatener([1, 1, 1], [2, 2, 2]));