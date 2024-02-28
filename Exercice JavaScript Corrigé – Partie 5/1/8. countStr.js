// Exercice 8:

// Créez une fonction qui prend un tableau de mots et le transforme en un tableau de longueur de chaque mot.

// Exemple:

// countStr(["A", "B", "C"]) ➞ [1, 1, 1]

// countStr(["Welcome", "To", "WayToLearnX"]) ➞ [7, 2, 11]

// countStr(["Bob", "Ali", "Thomas"]) ➞ [3, 3, 6]

function countStr(tab) {

	// Écrivez votre code ici
    
    return tab.map(str => str.length);


}

// Afficher la sortie

console.log(countStr(["A", "B", "C"]));
console.log(countStr(["Welcome", "To", "WayToLearnX"]));
console.log(countStr(["Bob", "Ali", "Thomas"]));


// for (const element of tab) {
    //    for (let i = 0; i < tab.length; i++) {
    //     return tab[i].length;   
    // }
    //   }
    
    // const array1 = [tab];

    // // Pass a function to map
    // const map1 = array1.map((x) => x * 2);

    //     for (let i = 0; i < tab.length; i++) {
    //         for (let a = 0; a < comp.length; a++) {
                
    //             return tab = tab + comp[a++].length[i++].length
    //         }
            
    //     }


    // let comp = 0
    // let total = 0;
    // let ele = 0;
    // const notes = [tab]

    // for (let ligne = 0; ligne < notes.length; ligne++) {
    //     return tab
    // }

    