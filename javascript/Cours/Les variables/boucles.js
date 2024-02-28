// while

// let i = 0;
// while (i < 10) {
//     console.log('Hello');
//     i++;
// }

// // for

// for (let e = 0; e < 10; e++) {
//     console.log('Zdravo');
// }

// // Tableau for

// const notes = [12, 13, 16, 8];

// for (let a = 0; a < notes.length; a++) {
//     console.log(notes[a]);

// }

//-----------------------------------------------------------

// for in

// const notess = {
//     a: 1,
//     b: 3
// }

// for (let w in notess) {
//     console.log(notess[w]);
// }

// // for of

// const slova = 'recenica';

// for (let letter of slova) {
//     console.log(letter);
// }
// console.log(letter); existe ds la loop !!!

// EX 1
// EX 1 ERROR

// for (let u = 0; u < 10; u++) {
//     const u = prompt('Veullez entrer un nombre')
//     alert('Vous avez entrer le nombre ' + u);
// }

// EX 1 corrigé with loop while

// let chiffe = prompt('Entrez un nombre')
// if (chiffe > 10 || chiffe < 0) {
//     console.log('Le nombre n\'est pas entre 0 et 10');
// } else {
//     while(chiffe >= 0) {
//         console.log(chiffe)
//         chiffe--
//     }
// }

// EX 1 corrigé with with loop for

// let chiffe = prompt('Entrez un nombre')
// if (chiffe > 10 || chiffe < 0) {
//     console.log('Le nombre n\'est pas entre 0 et 10');
// } else {
//     for (let o = chiffe; o >= 0; o--) {
//         console.log(o);
//     }
// }

// EX 2

// let guess = 8;

// const chiffe = prompt ('Donner un chiffe') * 1;

// if (chiffe === 8) {
//     alert('Vous avez trouvé')
// } else if (chiffe === 8){
//     for (let n = 0; n < chiffe; n++) {
//     prompt('Vous n\'avez pas trouver!Ressayer')
// } else  {
//     console.log('Bingo');
// }
// }

// EX 2 corrigé

// let guess = 8
// let chiffre

// while(chiffre !== guess) {
//     chiffre = prompt('Votre chiffe') * 1
//     if (chiffre < guess) {
//         console.log('Plus');
//     } else if (chiffre > guess) {
//         console.log('Moins')
//     }
// }
// alert('Bravo');

// 10/01/23  / 12/01/23 -- 18/01/23

// TP 1 ok

// const chiffre = prompt("Choisissiez un chiffre entre 1 et 10");
// let max = 10;

// for (let i = 1; i <= chiffre; i++) {
//   if(i < chiffre || chiffre > max) {
//     console.log(i);
//   }
//   else 
//     console.log('ponovo');
  
// } 

// const chiffre = prompt("Choisissiez un chiffre entre 1 et 10");

// if (chiffre > 10 || chiffre < 0) {
//   console.log('Le nombre n\'est pas entre 0 et 10');
// } else {
//     for (let i = chiffre; i >= 0; i--) {
//       console.log(i);
      
//     }
// }

// TP 2 OK

// const guest = 8;
// let chiffre = prompt("Choisissiez un chiffre") * 1;

// for (let i = 0; i < chiffre; i++) {
//     if(chiffre == guest) {
//       console.log('tacan broj');
//     } else (
//       chiffre = prompt('opet')
//     )
  
// }











// Apprendre Javascript de A à Z – Les bases (1/6)