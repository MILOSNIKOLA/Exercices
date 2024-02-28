// Exercice 4:

// Créez une fonction qui prend un nom et renvoie un message d’accueil sous la forme d’une chaîne. N’utilisez pas une fonction normale mais utilisez une fonction fléchée(Arrow)

// Exemple:

// msg("Thomas") ➞ "Hello Thomas, Welcome to WayToLearnX!"

// msg("Alex") ➞ "Hello Alex, Welcome to WayToLearnX!"

// msg("Emily") ➞ "Hello Emily, Welcome to WayToLearnX!"

const msg = name => {

    // Écrivez votre code ici

    return `hello ${name} Welcome to WayToLearnX!`


    
    // const msg = name => `Hello ${name}, Welcome to WayToLearnX!`

}





// Afficher la sortie

console.log(msg("Thomas"));
console.log(msg("Alex"));
console.log(msg("Emily"));