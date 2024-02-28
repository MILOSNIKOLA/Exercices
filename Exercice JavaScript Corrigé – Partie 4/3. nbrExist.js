function nbrExist(tab, val) {
	for (let i = 0; i < tab.length; i++) {
       if(tab[i] === val) return true
        
    } return false
}

// Afficher la sortie
console.log(nbrExist([6, 7, 8], 7));
console.log(nbrExist([1, 2, 3], 5));
console.log(nbrExist([], 0));