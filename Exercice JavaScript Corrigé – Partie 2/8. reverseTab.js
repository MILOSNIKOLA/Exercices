function reverseTab(tab) {
	// return reversed = tab.reverse();
    let res = [];
  for (let i = tab.length -1; i > -1; i--) {
    res.push(tab[i]);
  }
  
  return res;
}

// Afficher la sortie

console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));