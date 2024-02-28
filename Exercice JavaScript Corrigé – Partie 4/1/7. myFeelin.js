// Exercice 7:

// Créez une fonction qui prend une chaîne représentant l’humeur et renvoie une phrase au format suivant: « Aujourd’hui, je me sens {feeling} ». Cependant, si aucun argument n’est passé, retournez « Aujourd’hui, je me sens neutre ».

// Exemple:

// myFeeling("heureux") ➞ "Aujourd'hui, je me sens heureux"

// myFeeling("triste") ➞ "Aujourd'hui, je me sens triste"

// myFeeling() ➞ "Aujourd'hui, je me sens neutre

function myFeeling(feeling) {

	// Écrivez votre code ici

    return `Aujour'hui je me sens ${feeling}`

    // return `Aujourd'hui, je me sens ${feeling || "neutre"}`
    
    }
    


// Afficher la sortie

console.log(myFeeling("heureux"));
console.log(myFeeling("triste"));
console.log(myFeeling());