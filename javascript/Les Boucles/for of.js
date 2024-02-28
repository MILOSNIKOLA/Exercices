// 25/10/22

/* ex1 off

const temperatures = [-5, 5, 45, 12, 10, 100,89,-75] 

for (const temperature of temperatures) {
    Math.max(-5, 5, 45, 12, 10, 100,89,-75);
}
console.log(temperature);

*/

// 26/10/22 

// EX 1
/*
const temperatures = [-5, 5, 45, 12, 10, 100,89,-75] 
let max = [0];

for (temperature of temperatures) {
    if(temperatures == max) temperatures == max 
}
console.log(max);
*/
/*
const temperatures = [-5, 5, 45, 12, 10, 100,89,-75] 

let max = temperatures[0];

for ( temperature of temperatures) {
    if(temperature > max) max = temperature
}
console.log(max);
**/

// EX3
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

/*
const notes = [ 
    [9,  8,14], 
    [15,11,13], 
    [10,17] 
  ];

let total = 0;
let elements = 0;

for (note of notes) {
    for (let element of elements) {
        total = total + notes
    }
}

console.log(total/elements);
*/
// EX3 corrigé
/*


let total = 0;
let nbrNotes = 0;
*/

// 27/10/22
/*  EX1
const temperatures = [-5, 5, 45, 12, 10, 100,89,-75] 

let max = 0;

for (temperature of temperatures) {
    if (temperature > max) max = temperature;
}
console.log(max);

*/

// EX2
/*
const temperatures = [-5, 5, 45, 12, 10, 100,89,-75] 

let max = 0;

for (temperature of temperatures) {
    if (temperature < max) max = temperature;
}
console.log(max);
*/

// EX3
/*
const notes = [ 
    [9,  8,14], 
    [15,11,13], 
    [10,17] 
  ];

let total = 0;
let nbrNotes = 0;

  for (let matiere of notes) {
    for(let note of matiere){
        total += note;
        nbrNotes++;
    }
  }
console.log(total/nbrNotes);
*/


//   28/10/22

//   08/11/22
/*  test EX 1 error
const temperatures = [-5, 5, 45, 12, 10, 100,89,-75];

let max = 0;

for (let temperature of temperatures) {
  if( temperature > max) max = temperature;
  console.log(max);
}
*/
/*
const temperatures = [-5, 5, 45, 12, 10, 100,89,-75];

let max = temperatures[0];

for (let temperature of temperatures) {
  if (temperature > max) max = temperature
}
console.log(max);
*/

// test 03
// error 
/*
const notes = [ 
  [9,  8,14], 
  [15,11,13], 
  [10,17] 
];

let total = 0;
let nbrNotes = 0

for (note of notes) {
  for (note2 of note) {
    total = note / note2;
    nbrNotes++;
    console.log(total/note2);
  }
}
*/
/*
const notes = [ 
  [9,  8,14], 
  [15,11,13], 
  [10,17] 
];

let total = 0;
let nbrNotes = 0;

for (let matiere of notes) {
  for(let note of matiere){
      total += note;
      nbrNotes++;
  }
}
console.log(total/nbrNotes);
*/