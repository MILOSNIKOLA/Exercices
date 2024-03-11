// Exercice 6:

// Créez une fonction qui renvoie TRUE si la chaîne passée en paramètre ne contient que des lettres majuscules ou minuscules.

// Exemple:

// isSameCase("WayToLearnX") ➞ false

// isSameCase("waytolearnx") ➞ true

// isSameCase("WAYTOLEARNX") ➞ true

function isSameCase(str) {

	// Écrivez votre code ici
     
//    let a = str.toUpperCase() && str.toLowerCase()
// //    let b = 
//    let c = str.startsWith('WayToLearnX')
   
//   if (a) {
//     return true
//   } else (a != c) 
//     return false

    return str.startsWith('WayToLearnX') == false

    // return str.toUpperCase() === str || str.toLowerCase() === str;

}

// Afficher la sortie

console.log(isSameCase("WayToLearnX"));
console.log(isSameCase("waytolearnx"));
console.log(isSameCase("WAYTOLEARNX"));


// return str.toLocaleLowerCase().toLocaleUpperCase()

    // if (str.toLowerCase()) {
    //     return true
    // } else if (str.toLocaleUpperCase()) {
    //     return true
    // } else {
    //     false
    // }