
function checkEq(a, b) {

    // Écrivez votre code ici

    if (a === b) {
        return true
    } else {
        return false
    }
    // return a === b

}

// Afficher la sortie

console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));


// Exercice 1:

// Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.

// Exemple:
// checkEq(5, 5) ➞ true
// // number = number: leur type et leur valeur sont égaux

// checkEq(5, 0) ➞ false
// // number = number: leur type sont égaux et leur valeur sont différent

// checkEq(5, false) ➞ false
// // number <> boolean: leur type est différent

// checkEq(5, ‘5’) ➞ false
// // number <> string: leur type est différent