// 22/01/23

// function canDrive (age, pays) {
//     if (
//         (age > 18 && pays === 'FR') || (age > 16 && pays === 'US')
//     ) {
//        return true;
//     }
//     return false;
// }

// console.log(canDrive(19, 'FR'));

// function maFonction() {
//     console.log(this);
// }

// maFonction.call(3)

// const a = {
//     firstname: 'John',
//     lastname: 'Doe',
//     fullname: function () {
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }

// a.fullname()

// fonction fleché

// const maFonction = (param1, param2) => {
//     console.log(param1, param2);
// }

//      On cree un nombre entre 0 et 10
//      3 essaies pour deviner le nombre
//      isRigth(n)
//      guess()
//      25:00 +/-

//  24/01/23 ---------------------------------------------------------
// const ime = prompt ('kako se zoves')

//  function sayHello(ime) {
//     alert('Hello ' + ime)
//  }

// sayHello(ime)

// const god = prompt ('Koliko imas godina')

//  function year(god) {
//     alert('Oke' + ' znaci imas ' + god + ' godina !')
//  }

//  year(god)

//-------------------------------------------------

// function ime (nom) {
   
//     nom = prompt('Ti se zoves kako ?');
//     alert('Caos ' + nom)
// }

// let notes = [12, 7, 3];

// function upNotes(n) {
//     n[0]++;
// }

// upNotes(notes);
// console.log(notes);

//  function maF() {
//     console.log(this);
//  }

// maF();

// var num = Math.floor(Math.random() * 100) + 1;
// var NbEssais = 0;
// function Devine() {
// var choisi = document.form1.devine1.value;
// NbEssais++;
// status = "Nombre d'essais : " + NbEssais;
// if (choisi < num) 
//     document.form1.indice.value = "Non, le nombre est plus grand.";
// if (choisi > num)
//     document.form1.indice.value = "Non, le nombre est plus petit.";
// if (choisi == num) {
//     window.alert("Correct ! Vous avez trouvé en " + NbEssais + "essais.");
//     location.reload();
//     }
// if (NbEssais == 10) {
//     window.alert("Désolé, c'est fini. Le nombre correct était : " + num);
//     location.reload();
//     }
// }



//      console.log('Vous avez reussi de premier fois');
// if (isRigth == chiffre) {
        //     console.log('Tu as reussi');
        // } else if (isRigth == chiffre)
        //     alert('Encore 2 essais');
        //     else if (isRigth == chiffre) {
        //        alert('Dernier essai');
        //     } else {
        //         console.log('Vous avez perdu');
        //     }
        //}
// typeof

// 26/01/23

// const isRigth = 5;
// const chiffre = (((Math.floor(Math.random() * 10))));
// const tour = 0;

// // function guess() {
// //     for (let i = 0; i < 10; i++) {
// //         for (let a = 1; a < 3; a++) {
// //             if (isRigth === chiffre == a) {
// //                console.log('Tu as reussi');
// //                     } else if (isRigth && chiffre == a)
// //                             console.log('Encore 2 essais');
// //                         else if (isRigth && chiffre == a) {
// //                             console.log('Dernier essai');
// //                     } else {
// //             console.log('Vous avez perdu');
// //         }   
// //     }
// // }
// // }

// function canDrive(age, pays) {
//       if (
//         (age > 18 && pays === 'FR') ||
//         (age > 16 && pays === 'US')
//       ) {
//            return true;
//       }  
//       return false;
// }

// console.log(canDrive(19, 'FR'));


// guess()
// console.log(isRigth, chiffre);

/*      On cree un nombre entre 0 et 10 
        (((Math.floor(Math.random() * 10))));  */
//      3 essaies pour deviner le nombre !
//      renvoi true / false 
//      guess() AUCUN PARAMETRE & prompt() => true / false 
//      boucle

// const chiffre = (((Math.floor(Math.random() * 10))));

// prompt('Kako se zoves ?', 'Na prime. gaga')  c'est pas bien! 

/******************************************************************************** */

/*else if (prompt() == n == chiffre == true) {
        console.log('jos 2 sanse');
} else if (prompt() == n == chiffre == true) {
        console.log('Jos 1 sansu');
}

*/

// function checkGuess(){
//         let userGuess = Number(guessField.value);
//         if (guessCount === 1) {
//           guesses.textContent = 'Propositions précédentes&nbsp;: ';
//         }
//         guesses.textContent += userGuess + ' ';
      
//         if (userGuess === randomNumber) {
//           lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
//           lastResult.style.backgroundColor = 'green';
//           lowOrHi.textContent = '';
//           setGameOver();
//         } else if (guessCount === 10) {
//            lastResult.textContent = '!!! PERDU&nbsp;!!!';
//            setGameOver();
//         } else {
//            lastResult.textContent = 'Faux&nbsp;!';
//            lastResult.style.backgroundColor = 'red';
//            if (userGuess < randomNumber) {
//             lowOrHi.textContent = 'Le nombre saisi est trop petit !';
//            } else if (userGuess > randomNumber) {
//             lowOrHi.textContent = 'Le nombre saisi est trop grand !';
//            }
//         }
      
//         guessCount++;
//         guessField.value = '';
//         guessField.focus();
//       }

/********************************************************************************* */

// let a = 0;
                // while (a < 3) {
                //         a++
                //                   if(n != chiffre) {
                //                         alert('Error')
                //                 }
                //                   if (n < chiffre) {
                //                         alert('broj nije tacan!')
                                        
                //                 } if (n > chiffre) {
                //                         alert('broj nije tacan, po drugi put');
                //                 } else {
                //                         alert('broj nije tacan, po treci put i kraj!!!');
                //                         return false;
                //         }     
                // } 

//      On cree un nombre entre 0 et 10 
//      (((Math.floor(Math.random() * 10))));
//      3 essaies pour deviner le nombre
//      isRigth(n) with true / false 
//      guess() AUCUN PARAMETRE & prompt() => true / false 
//      boucle
//      25:00 +/-

// let chiffre = (((Math.floor(Math.random() * 10))))
 
// const n = prompt('Devine mon chiffre qui est entre 1 et 10 \n3 essai.') *1;

// // const Ok = 'OK' == true;
// // const F = 'NijeOkee' == false;

// console.log(n, chiffre);

// function isRigth(n) {
//                 for (let i = 2; i > 0; i--) {
//                     if(n == chiffre) {
//                         alert(`${i} Tu as trouvé.`);return true;
//                 } else if(n > chiffre || n == chiffre) {
//                        prompt(`ponovo`)
//                  }
//                   else {
//                       prompt(false);
//                 }
//         }            
// }

   
// console.log(isRigth(n));

// if (true) {
//         function guess() {
//                 prompt('Entrez un chiffre entre 1 et 10');
//         }
         
// }

// console.log(guess());
// //console.log('Nije OK');



// alert(`Game Over!!! Broj bio ${chiffre} i Ti si imao broj ${chiffre}`)*1;
//return false;


// -------------------------------------  CORRIGé  ------------------------------------------------



        // function getRandom(max) {
        //         return Math.floor(Math.random() * (max + 1))
        // }

        // const solution = getRandom(10)
        // console.log(solution)

        // function isRigth(n) {
        //         return solution === n
        // }

        // function guess() {
        //         const number = prompt('Entrez un chiffre entre 1 et 10') * 1
        //         return isRigth(number)
        // }

        // for (i = 0; i < 3; i++) {
        //      if (guess()) {
        //         console.log('Bravo')
        //         break;
        //      } else if (i === 2) {
        //         console.log('Vous avez perdu');
        //      }f
        // }


// ---------------------------------------------------------------------------------------------


        // function isPremier(n) {
        //         // // Vérifie si n est égal à 1 ou à 0
        //         if (n === 0 || n === 1) {
        //         return false;
        //         }
                
        //         // Vérifie si n est divisible par un nombre autre que 1 et n lui-même
        //         for (let i = 2; i < n; i++) {
        //         if (n % i === 0) {
        //         return false;
        //         }
        //         }
                
        //         // Si on a atteint ce point, alors n est premier
        //         return true;
        // }

        // console.log(isPremier(7));

//  ---------------------------------------------------------------------------------------------------

// function randnum() {
//         return Math.floor(Math.random() * 11);
//       }

// for (let i = 0; i < 3; i++) {
//         if (i === randnum) {
//                 alert('Bravo') === true
//         } else (
//                 false
//         )       
// }

// isRigth(n) {

// }

// corrigé

// function getRandomiNR(max) {
//         return Math.floor(Math.random() * (max + 1))
// }

// const solution = getRandomiNR(10)
// console.log(solution);

// function isRigth(n) {
//         return solution === n
// }

// function guess() {
//         const number = prompt('Entrez un chiffre..') * 1
//         return isRigth(number)
// }

// for (let i = 0; i < 3; i++) {
//      if (guess()) {
//         console.log('Bravo')
//         break;
//      } else if (i === 2) {
//         console.log('Vous avez persu');
//      }
        
// }




//-------------------------------------------------------------------------------------------------------        
        function isPalindrome(str) {
                
        }

        // reverse
        // split
        // join
        // toUpperCase



































