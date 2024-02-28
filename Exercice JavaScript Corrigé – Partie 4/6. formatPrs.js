function formatPrs(personne) {
    for (const key in personne) {
        
        // return [key] + `: ` + personne.nom + `, \n` +
        // `age `+ `: ` + personne.age + `, \n` + `adresse : ` + personne.adresse
        return `${personne.nom} a ${personne.age} ans. Il habite à ${personne.adresse}.`;
       
    }  
} 


// Afficher la sortie
console.log(formatPrs({nom: "Thomas", age: "25", adresse: "Paris"}));
console.log(formatPrs({nom: "Emily", age: "22", adresse: "Nantes"}));