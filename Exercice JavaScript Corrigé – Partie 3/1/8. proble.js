function nbrsPattes(poulets, vaches, chevaux) {
	// return (poulets * 2)  + (vaches * 4) + (chevaux *4)
	return poulets * 2 + (vaches + chevaux) * 4; 
}
// Afficher la sortie

console.log(nbrsPattes(1, 4, 2));
console.log(nbrsPattes(2, 2, 2));
console.log(nbrsPattes(2, 0, 3));

