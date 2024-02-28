function find(tab, val) {
	//  return tab.concat(val);
	for(var i = 0; i < tab.length; i++){
		if(tab[i] == val) return i;
	  }
	  return -1;
}

// Afficher la sortie

console.log(find([2, 7, 1], 7));
console.log(find([6, 9, 5], 6));
console.log(find([6, 7, 8], 9));