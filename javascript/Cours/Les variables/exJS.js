// function canDrive(age, pays) {
//     if (
//         (age >= 18 && pays === 'FR') ||
//         (age >= 16 && pays === 'US')                         // Global 
//     ) {                                                      // Normalna Fonctija
//         return true;
//     }
//     return false;
// }

// console.log(canDrive(19,'FR'));

//--------------------------------------------------------------------------------------------------------

// console.log(canDrive(19,'FR'));
                                                                // Ne Global !!!
// const canDrive = function (age, pays) {                      // !== izmedju 2 ex , nemoze !!!
//     if (                                                     // kratka fonctija
//         (age >= 18 && pays === 'FR') ||
//         (age >= 16 && pays === 'US')
//     ) {
//         return true;
//     }
//     return false;
// }

//--------------------------------------------------------------------------------------------------------


// function greeting(name) {                    // function qui n'a pas Le retour
//     console.log(`Bonjour ${name}`);
// }

// console.log(greeting('John'));

// greeting('John')
// greeting('Jane')

//---------------------------------------------------------------------------------------------------------

// let i = 0;

// function greeting(name) {
//     i++
//     console.log(`Bonjour ${name}`);         // la fonction peut modifié la variable definit a extérieur
// }                                           //

// console.log(i);
// greeting('John')
// console.log(i);
// greeting('Jane')
// console.log(i);


// let notes = [12, 13, 14];

// function upNotes (notes) {
//     notes[0]++                                  // ++ povecava ako na [0]
// }

// upNotes(notes)
// console.log(notes);                             // zato imamo 13, a ne 12 !!!

//---------------------------------------------------------------------------------------------------------

// function maFonction() {         // la valeur de this sera déterminée à partir de la façon dont 
//     console.log(this);          // une fonction est appelée.                                 
// }                               // Il n'est pas possible de lui affecter une valeur ,
//                                 // lors de l'exécution et sa valeur eut être différente à chaque 
// maFonction()                    // fois que la fonction est appelée  
// 


// const a = {
//     firstname: 'John',
//     lastname: 'Doe' ,
//     fullname: function () {
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }


// a.fullname()

//------------------------------------------------------------------------------------------------

// Fonction fléchées

// const maFonction = (param1, param2) => {
//     console.log(param1, param2, this);
// }

// maFonction(3, 1, 2) 

/*
L'objet JavaScript représentant le contexte dans lequel le code courant est exécuté est appelé l'objet
 "this". L'objet "this" fait référence à l'objet qui appelle la fonction dans laquelle il est utilisé. 
 Le comportement de l'objet "this" dépend de la façon dont la fonction est appelée.

Si la fonction est appelée en tant que méthode d'un objet, "this" fait référence à l'objet sur lequel 
la méthode est appelée. Si la fonction est appelée en tant que fonction normale, "this" fait référence 
à l'objet global (window dans un navigateur, global dans Node.js). Si la fonction est appelée avec 
le mot-clé "new", "this" fait référence à l'objet nouvellement créé. Si la fonction est appelée 
avec "call" ou "apply", "this" est défini explicitement en fonction des arguments passés à la méthode 
"call" ou "apply".
*/


//---------------------------------------------------------------------------------------------------
//--------------------------------------------------  TP 1  -----------------------------------------    

//     fonction isPalindrome() qui renverra vrai si un mot est un palindrome et false sinon. 
//     La fonction ne sera pas sensible à la casse

function isPalindrome(str) {
                
}

// reverse
// split
// join
// toUpperCase

let monArray = ["un", "deux", "trois"];
monArray.reverse();

console.log(monArray);
































































