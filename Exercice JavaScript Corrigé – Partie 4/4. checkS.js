function checkS(str) {
	
	// return str.includes("s")
	return str[str.length-1] === "s";
}

// Afficher la sortie

console.log(checkS("Thomas"));
console.log(checkS("Ali"));
console.log(checkS("Alex"));
console.log(checkS("Alvis"));