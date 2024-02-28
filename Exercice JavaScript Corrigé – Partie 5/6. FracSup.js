function FracSup1(f) {

	// Écrivez votre code ici

    
    // if (eval(f) ) {
    //     f >= true
    // } else if (eval(f)) {
    //         f <= true  
    // }   

    return eval(f) > 1;

}


// Afficher la sortie

console.log(FracSup1("2/2"));
console.log(FracSup1("8/2"));
console.log(FracSup1("1/2"));

// Exercice 6:

// Avec une fraction sous forme d’une chaîne, indiquez si elle est supérieure ou non à 1 lorsqu’elle est évaluée.

// Exemple:

// FracSup1("2/2") ➞ false

// FracSup1("8/2") ➞ true

// FracSup1("1/2") ➞ false
