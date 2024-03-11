
// Exercice 2:

// Créez une fonction qui ajoute une sous-chaîne à la fin de chaque chaîne du tableau.

// Exemple:

// addEnd(["accept", "achet", "adapt"], "able") ➞ ["acceptable", "achetable""adaptable"]

// addEnd(["aim", "act", "ard"],         "ant") ➞ ["aimant", "actant", "ardant"]

function addEnd(tableau, fin) {

	// Écrivez votre code ici

    // let tab = [tableau];
    // const f = [fin]
    // let aa = tableau.concat(f)

    return tableau.map(mot => mot + fin);
    

// for (let i = 0; i < 3; i++) {
       
    //      console.log(tableau[i] + fin);

    // }
}

// Afficher la sortie

console.log(addEnd(["accept", "achet", "adapt"], "able"));
console.log(addEnd(["aim", "act", "ard"], "ant"));

