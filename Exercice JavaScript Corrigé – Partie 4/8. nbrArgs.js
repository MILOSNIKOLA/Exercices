function nbrArgs() {
    return arguments.length
    }


// // // // Afficher la sortie

console.log(nbrArgs());
console.log(nbrArgs({}));
console.log(nbrArgs("A"));
console.log(nbrArgs("A","B"));

// Créez une fonction qui renvoie le nombre d’arguments avec lesquels elle a été appelée.

// nbrArgs() ➞ 0

// nbrArgs({}) ➞ 1

// nbrArgs("A") ➞ 1

// nbrArgs("A", "B") ➞ 2





// return Object.create(nbrArgs.prototype);

//  this.length ;
    //  this.{}.length

    // const user = {
    //     // 1: (''),
    //     // 2: ({}),
    //     // 3: ("A"),
    //     // 4: (["A","B"])
    //     a:1, b:2, c:3
    // }

    // for (const prop of user) {
       
    //     console.log(`user.${prop} = ${user[prop]}`);
        
    // }
    
// }


// function gaga() {
//     const object1 = {
//         a: 'somestring',
//         b: 42
//       };
      
//       for (const [key, value] of Object.entries(object1)) {
//         console.log(`${key}: ${value}`);
//       }
// }

