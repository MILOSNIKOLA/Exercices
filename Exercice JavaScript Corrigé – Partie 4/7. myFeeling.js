function myFeeling(feeling) {
              
       // for (key in feeling) {
       //        return `Aujourd'hui, je me sens ${feeling}`
       // }
       // if (feeling === undefined) {
       //        console.log("Aujourd'hui, je me sens neutre");
       // }

       return `Aujourd'hui, je me sens ${feeling || "neutre"}`
       
}

// Afficher la sortie
console.log(myFeeling("heureux"));
console.log(myFeeling("triste"));
console.log(myFeeling());

