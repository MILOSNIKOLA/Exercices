// Exercice 9: 

// Nombre paire ou impaire

// Créez une fonction qui prend un nombre comme argument et renvoie « pair » pour les nombres pairs et « impair » pour les nombres impairs.

// Exemple:

// check(2) ➞ "pair"

// check(7) ➞ "impair"

// check(22) ➞ "pair"

function check(n) {

	// Écrivez votre code ici

    
    if(n%2) {
        return "impair"
    } else {
        return "pair"
    }

    // return n % 2 ? 'impaire' : 'paire';
    
}

// Afficher la sortie

console.log(check(2));
console.log(check(7));
console.log(check(22));