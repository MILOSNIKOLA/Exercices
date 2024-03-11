// Exercice 7:

// Créez une fonction pour multiplier toutes les valeurs d’un tableau par 
// la longueur du tableau donné.

// Exemple:

// mulByLen([1, 1, 1]) ➞ [ 3, 3, 3 ]

// mulByLen([1, 2, 3]) ➞ [ 3, 6, 9 ]

// mulByLen([0, 0, 0, 0, 2]) ➞  [ 0, 0, 0, 0, 10 ]

function mulByLen(tab) {

	// Écrivez votre code ici

    const a1 = tab

    return tab = a1.map((x) => x * tab.length)

    // return tab.map(x => x * tab.length);
    
}

// Afficher la sortie

console.log(mulByLen([1, 1, 1]));
console.log(mulByLen([1, 2, 3]));
console.log(mulByLen([0, 0, 0, 0, 2]));

    // let a = ([tab.join()])
    //  let bb = 

    // return total = a.map((x) => x * 3);                      

    //     for (let i = 0; i < tab.length; i++) {
    //         return tab.length
    // }

    // const array1 = [tab];

    // // Pass a function to map
    // const map1 = array1.map((x) => x * tab.length);
    
    // return tab * array1