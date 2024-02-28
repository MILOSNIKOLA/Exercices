// Exercice 6:

// Créez une fonction qui prend un objet comme argument et renvoie une chaîne qui représente une personne. Les attributs de la personne devront être extraits des trois propriétés de l’objet:

// nom
// age
// adresse
// La chaîne doit avoir le format suivant: X a Y ans. Il habite à Z. (où X est le nom de la personne, Y est l’age et Z est l’adresse).

// Exemple:

// formatPrs({
//   nom: "Thomas",
//   age: "25",
//   adresse: "Paris"
// })
// ➞ "Thomas a 25 ans. Il habite à Paris."

// formatPrs({
//   nom: "Emily",
//   age: "22",
//   adresse: "Nantes"
// })
// ➞ "Emily a 22 ans. Il habite à Nantes."

function formatPrs(personne) {
	
    // Écrivez votre code ici

                let pers1 = {
                nom: "Thomas",
                age: "25",
                adresse: "Paris"

                }

                let pers2 = {
                nom: "Emily",
                age: "22",
                adresse: "Nantes"
                }
                 
        return personne.nom + " a " + personne.age + " ans" + "." + " Il habite a " + personne.adresse

        // return `${personne.nom} a ${personne.age} ans. Il habite à ${personne.adresse}.`;       
    
   


}

// Afficher la sortie

console.log(formatPrs({nom: "Thomas", age: "25", adresse: "Paris"}));
console.log(formatPrs({nom: "Emily", age: "22", adresse: "Nantes"}));


