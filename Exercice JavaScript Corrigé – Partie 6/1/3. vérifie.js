// Exercice 3:

// Créez une fonction qui vérifie si l’argument est un entier ou une chaîne. 
// Renvoie « int » s’il s’agit d’un entier et « string » s’il s’agit d’une chaîne.

// Exemple:

// checkIntOrStr("WayToLearnX") ➞ "string"

// checkIntOrStr(1) ➞ "int"

// checkIntOrStr("250") ➞ "string"

function checkIntOrStr(x) {

	// Écrivez votre code ici

	if (x < String("x")) {
		return "string"
	}else if (x > Number("")) {
		return "int"
	 } 
	return x = "string" || "int" 
	
	
		// if (typeof x === "number") {
		//   return "int";
		// } else if (typeof x === "string") {
		//   return "string";
		
	
	
	
	
}

// Afficher la sortie

console.log(checkIntOrStr("WayToLearnX"));
console.log(checkIntOrStr(1));
console.log(checkIntOrStr("250"));

