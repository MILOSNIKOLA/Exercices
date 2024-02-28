 /*  //29/09/22
//Le Cours

 const phrase = "Je suis Dragan!"
 let taille = phrase.length;

 for (let i=0; i<taille;i++){
    if(phrase[i] == " ") {
        continue;
    }
    console.log(phrase[i]);
 }

 */

 /* test
 
 let broj = 0;

 for (let i=0; i< 10; i++) {
    if (i% == "1")continue;
    
    console.log(broj[i]);
 }

 */

 // corrigé testa

 /* 1ere methode du test

 for (let i = 1; i < 11; i++) {
    if(i%2 == 0) continue;

    console.log(i);
 }

 */
/* 2eme methode du test

 for (let i = 1; i<11; i+= 2) {
    console.log(i);
 }

 */

 /*
const num = 2;
const puissance = 3;
let result = 1;

for(let i=0 ; i<puissance ; i++) {
    console.log(result);  // afficher les operation effuctués
   // result = result * num; 1 methode
   result *= num;  // 2eme methode
}

console.log(result);

*/
/* test 

const tab = [-5,15,14,47,-100,28]
let i = 0;

for (let i = tab; i < tab.length; tab++) {
    console.log([tab]);
}

*/

/*
// corrigé 2

const tab = [-5,15,14,47,-100,28]

let max = tab[0];

for(let i=1; i < tab.length;i++) {
    if(tab[i] > max) max = tab[i];
}

console.log(max);

*/

//  30/09/22

/*  TEST1 OK

let i = 10;

for (let i = 0; i < 11; i++) {
   if(i%2 == 1)
   console.log(i);
}

*/

// TEST2  

/*

const num = 2;
const puissance = 3;
let result = 1;

for(let i = 0; i < puissance; i++){
   result *= num;
}

console.log(result)

*/

// TEST3
/*

const tab = [-5,15,14,47,-100,28]

let max = tab.length;

for (let i = 0; i < tab.length; i++) {
   console.log(i);
}

*/
/*
// corrigé

const tab = [-5,15,14,47,-100,28]

let max = tab[0];

for(let i = 1; i < tab.length; i++){
   if(tab[i]> max) {
      max = tab[i];
   }
}
console.log(max);

*/

// TEST4

//---------------------------------------------------------------


// 09/10/22

/*

for ( let i = 0;i < 11; i++ ) {
   if(i%2 == 1)
   console.log(i);
}

*/

/*  test

let puissance = 3;

let br = 2;

let somme = 2;

for ( let i = 0; i < somme; i++) {
   console.log(somme * puissance * br);
}

*/

// corrigé

/*

const num = 2;
const puissance = 3;
let result = 1;

for (let i=0 ; i<puissance ; i++) {
   result = result * num;
}

console.log(result);

*/
/*

const tab = [-5,15,14,47,-100,28] 

for (let i = 0; i < tab.length ; i++) {
   console.log(tab[i]);
}

*/

// const tab = [-5,15,14,47,-100,28] 

// 04/10/22

/*
let phrase = "Je suis Dragan." 

let i = 0;

let stop = 20;

let slova = phrase.length;

while (i < slova) {
   if(phrase == "") continue
   console.log(phrase[i])
   i++
}
*/
/*

const phrase = "Je suis Dragan."

let taille = phrase.length;

for (let i = 0; i < taille; i++) {
   if(phrase[i] == " ") continue;
   if(phrase[i] == ".") break;
   console.log(phrase[i])
}


while(chaine[i] != ".") {
    if(chaine[i] == " ") {
        continue;
        i++;
    }
    console.log(chaine[i]);
    console.log("i= " + i);
    count++;
    i++;

    if(i == tour) break;
}
console.log(count);

see at continue , break, ...

*/


//  07/10/22

/*const chaine = "Je suis Dragan.";

let i = 0;

let stop = 20;

while (chaine[i] != ".") {
   if(chaine[i] == " ") {
      i++;
      continue;
   }
   console.log(chaine[i]);
   if(i == stop) break;
   i++;
}
*/

// 11/10//2022

/*
let i = 0;
while (i < 10) {
   console.log(i);
   i++
}
*/
/*
const rec = "Je suis Dragan.";

let i = 0;

while ( i < rec.length) {
   console.log(rec[i]);
   i++
}
*/

/*

const rec = "Je suis Dragan";

let i = 0;

let stop = 20;

while (rec[i] != ".") {
   console.log(rec[i]);
   console.log("i= " + i);
   i++;

   if (i == stop) break
}


*/

/*
const rec = "Je suis Dragan";

let i = 0;

let stop = 20;

while (rec[i] != ".") {
   if(rec[i] == " ") {
      i++;
      continue;
   }

   console.log(rec[i]);
   console.log("i= " + i);
   i++

   if (i == stop) break;
}

console.log(i);

*/



// 12/10/2022

// const rec = "Ja sam Dragan i Neznam nista u kodu."

/*
for (let i = 0; i < 10; i++) {
   if(i%2 == 1)
   console.log(i);
}
*/

/*  ex2  

let puissant = 2;

let tours = 2;

let somme = 2;

for (let i = 1; i < 10; i++) {
   console.log(somme * puissant * tours);
   console.log(i);
}

*/

// corrigé du ex2
/*
const num = 2;
const puissance = 3;
let result = 1;

for (let i= 0; i < puissance; i++) {
   result *= num;
   console.log(result);
}
*/
/*
const tab = [-5, 10, 14 ,47, -100, 28]

for (let i = 0; i < tab.length; i++) {
   console.log(tab);
}

*/


// 13/10/2022

// ex1
/*

for (let i = 0; i < 10; i++) {
   if(i%2)
   console.log(i);
}
*/

// ex 2
/*
let broj = 2;

let puta = 2;

let putajos = 2;

for ( let i = 1; i < 10; i++) {
   console.log(broj * puta * putajos)
}
*/

// corrigé
/*
const num = 2;
const puissance = 3;
let result = 1;

for (let i = 0; i < puissance; i++) {
   console.log(result);
   result = result * num
}

console.log(result);
*/

// Ex3
/*
const tab = [-5, 10, 14 ,47, -100, 28]

for ( let i = 0; i < tab.length; i++ ) {
   
      console.log(Math.max(-5, 10, 14 ,47, -100, 28))
   }
 */
/*
   // ex 3 corrigé

   const tab = [-5, 10, 14 ,47, -100, 28]

   let max = tab[0];

   for (let i = 1; i < tab.length; i++) {
      if(tab[i] > max) {
         max = tab[i];
      }
   }
console.log(max);
*/
/*
const notes = [ 
                [9,  8,14], 
                [15,11,13], 
                [10,17] 
              ];
let total = 0;
let elements = 0;

for (let ligne = 0; ligne < notes.length; ligne++){
   for(let col = 0; col < notes[ligne].length; col++){
      total = total + notes[ligne][col];
      elements++;
   }
}

console.log((total/elements).toFixed(2));
*/

// 14/10/22

/*for (let i = 0; i <= 10; i++) {
   if(i == 7) continue
   console.log(i);
}
*/



// 25/10/22
/*

// EX1
let nombre = 0; 

for (let i = 0; i < 11; i++) {
   if(i%2==0) continue;
   console.log(i);
}
*/

// EX2

/* ex2 corrigé

const num = 2;
const puissance = 3;
let result = 1;

for (let i = 0; i < puissance; i++) {
  result = result * num
}
console.log(result);

*/

// EX3

/*

const tab = [-5, 10, 14 ,47, -100, 28]

for (let i = 0; i < tab.length; i++) {
   console.log(Math.min(-5, 10, 14 ,47, -100,75, 28))
   
}
*/


// 09/11/22
/* 
const notes = [ 
   [9,  8,14], 
   [15,11,13], 
   [10,17] 
 ];

 for (let ligne = 0; ligne < notes.length; ligne++) {

 }

 */
/*
let i = 1;

for (let i = 1; i < 11; i++) {
   if (i % 2 == 0) {
      continue;
   i++;
   }
   console.log(i);
}
*/
/*
const num = 2;
const puiss = 3
let result = 1;

for (let i = 0; i < puiss; i++) {
   result= result * num;
}

console.log(result);

*/
// test error
/*

const tab = [-5, 10, 14, 47,-100,28];

let max = tab[0];

for (let i = 1; i < tab.length; i++) {
   if (tab[i] > max) max = tab[i];
}

console.log(max);
*/
/*
const notes = [ 
   [  9,  8, 17 ], 
   [ 15, 11, 13 ], 
   [ 10, 17 ,   ] 
]

let total = 0;
let elements = 0;

   for (let ligne = 0; ligne < notes.length; ligne++) {
      for(let col = 0; col < notes[ligne].length; col++) {
         total = total + notes[ligne][col];
         elements++
   }
   }
   console.log(elements);
   console.log((total/elements).toFixed(2));
   */


   //  15/11/22

// const phrase = "Je suis un bebe en JS." 
   
// for (let i = 0; i < phrase.length; i++) {
//   console.log(phrase[i]);
   
// }

// for (let i = 0; i < 10; i++) {
//   if(i%2 == 0)
//   i++
//    console.log(i);
// }

// EX2 error
/*
// for (let puissance = 1; puissance < 3; puissance++) {
//    result = total * puissance;
// }
// console.log(result);
*/

// const num = 2;
// const puissance = 3;
// let result = 1;

// for(let i= 0; i< puissance; i++) {
//    result *= num;
// }
// console.log(result);

/* ex3 error
const tab = [-5,15,14,47,-100,28];
let max = tab[0].max;
for (let i = 0; i< tab.length; i++){
   if (tab > max) max = tab
   
   }

   console.log(max);

   */
/*
   const tab = [-5,15,14,47,-100,28];

   let max = tab[0];

   for(let i = 0; i< tab.length; i++) {
      if(tab[i] > max) max = tab[i]
   }
   console.log(max);

   const notes = [ 
      [  9,  8, 17 ], 
      [ 15, 11, 13 ], 
      [ 10, 17 , 9  ] 
   ]

   let total = 0;
   let elements = 0;

   for (let ligne = 0; ligne < notes.length; ligne++) {
      for(let col = 0; col < notes[ligne].length;col++) {
         total = total+ notes[ligne][col];
         elements++;
      }
   }
   console.log((total/elements).toFixed(2));

   */


   // 17/11/22
/*
   const notes = [ 
      [  9,  8, 17 ], 
      [ 15, 11, 13 ], 
      [ 10, 17 , 9  ] 
   ] 
   let total = 0;
   let elements = 0;

   for (let ligne = 0; ligne < notes.length; ligne++) {
      for(let col = 0; col < notes[ligne].length; col++)
      {
         total = total + notes[ligne][col];
         elements++;
      }
   }
   
   
   // console.log(elements);

   console.log((total/elements).toFixed(2));
   */

   // ex 2 error

//  let num = 10;
//  let puiss = 3;
//  let result = 1;

//  for(let i = 0; i < puiss; i++) {
//    result = result * puiss
   
//    if(result == 100) break;
// }
// console.log(result);


// ex 2 corrigé

// const num = 10;
// const puiss = 3;
// let result = 1;

// for(let i = 0 ;i < puiss; i++) {
//    result *= num
//    console.log(result);
// }

// console.log(result);

//  18/11/22

// ex1 OK

// let max = 0;


// for(let i = 0; i <= 10; i++) {
//    if(i%2 ==1)
//    console.log(i);

//    if(max == 20) break
// }

// EX 2

// let num = 10;
// let puissance = 3;
// let result = 1;
// const max = 100;

// for(let i = 1; i < puissance;puissance++) {
//    result = result * puissance
//    puissance++;
//    // console.log(i);
// if(result == max) break
// if(puissance == max) break

// }
// console.log(result);

//   22/11/22


// const phrase = "Je suis un bebe en JS.";  RAPPEL !!!

// let i = 0;
// let max = 30;
// let taille = phrase.length;

// while (i < taille) {
//    console.log(phrase[i])
//    i++; 
//    if(phrase[i]  == " ") continue;

//    if(taille == max) break;
//    if(phrase[i] == max) break;
//    if(i == max) break;
//    if(phrase == max) break;
// }

// EX 2 ERROR!

// let num = 10;
// const puissance = 3;
// const result = 1;

// for(let i = 1; i < puissance; i++) {
//    result == result * num;
//    result++;
// }

// console.log(result);

// ex 2 corrigé

// const num = 10;
// const puissance = 3;
// let result = 1;

// for (let i = 0; i < puissance; i++) {
//   result = result * num
// }

// console.log(result);

// ex 3 OK!

// const tab = [-5,10,14,47,-100,28]

// let max = tab[0];

// for(let i = 0; i< tab.length; i++) {
//    if(tab[i] > max) max = tab[i]

// }
// console.log(max);


