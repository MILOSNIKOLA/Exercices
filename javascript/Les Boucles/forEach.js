//  03/11/22
/*
const tableau = [1,2,3,4,5,6,7]

tableau.forEach(nombre=> console.log(nombre*2));
*/
/*
const temperatures = [0,-5,14,58,-9,10];

let max = temperatures[0];

temperatures.forEach(temperature => {
    if(temperature > max)
    max = temperature
})

console.log(max);
*/
// test error
/*
const notes = [
    [11,15,14],
    [8,12,16],
    [8,11]
];

let note = 0;
let cours = 0;

notes.forEach(note => {
    cours.forEach(cour => 
    console.log(cours)

    console.log(note);
})


const notes = [
    [11,15,14],
    [8,12,16],
    [10,11]
];

let total = 0;
let nbrNotes = 0;

notes.forEach(matiere => matiere.forEach(note=>
    {
    total = total + note;
    nbrNotes++;
    }
))
    
console.log(total/nbrNotes);
*/

// 04/11/22
/*
const languages = ["Php", "Node", "JS","C++"];

languages.forEach(language=> console.log(language));

const tableau = [1,2,3,4,5,6]

tableau.forEach(nombre=> console.log(nombre*3));
*/
/*
const phrase = "Je suis encore un bebe dans JS";

phrase.forEach(lettre => console.log(lettre));  // Pas un tableau !!!
*/
/*
const phrase = "Je suis encore un bebe dans JS";

[...phrase].forEach(lettre => console.log(lettre));
*/

// PAS du CONDITION avec "continue" ni "Break" !!!
/*
const phrase = "Je suis encore un bebe dans JS";

[...phrase.charAt.forEach(lettre=> {
    if(lettre == "e") continue
    console.log(lettre);
}]
*/
/*
const temperatures = [0, -5, 14, 58, -9, 10];
let max = 0;

temperatures.forEach(temperature => {
    if(temperature == max) max > temperature
})
console.log(max);
*/
// test
/*
const temperatures = [0, -5, 14, 58, -9, 10];
let max = temperatures[0];

temperatures.forEach(temperature => {
    if(temperature > max) max = temperature
})

console.log(max);
*/
/*  TEST OFF
const notes = [
    [11,15,14],
    [8,12,16],
    [10,11]
];

let total = 0;
let nbrNotes = 0;

notes.forEach(note=> {
    note.forEach(total = total + nbrNotes)
})

console.log(total/nbrNotes);
*/
/*
const notes = [
    [11,15,14],
    [8,12,16],
    [10,11]
];

let total = 0;
let nbrNotes = 0;

notes.forEach(matiere => matiere.forEach(note=>{
    total += note;
    nbrNotes++;
}))
console.log(total/nbrNotes);
*/

//  08/11/22
/*
const languages = ["Php", "Node", "JS", "C++"];
*/
/*
for(let i = 0; i < languages.length;i++) {
    console.log(languages[i],i);
}

let i = 0;
for(let language of languages){
    i++
    console.log(language,i);
}
*/
/*
languages.forEach((language,i)=> console.log(language,i));
*/
/*
const phrase = "Je suis un bebe en JS!";

[...phrase].forEach(lettre => console.log(lettre));
*/
// Ni Break OU Continue avec forEach !!!
// error
/*
const temperatures = [0, -5, 14, 58, -9, 10];
let max = temperatures[0];

temperatures.forEach(temperature => {
    if(max == temperature) max > temperature;
    console.log(max);
})
*/
/*
const temperatures = [0, -5, 14, 58, -9, 10];
let max = temperatures[0];

temperatures.forEach(temperature => {
    if(temperature > max) max = temperature  
})

console.log(max);

*/

// Test ex2
//error
/*
const notes = [
    [11, 15, 14],
    [ 8, 12, 16],
    [ 7, 11]
]

let total = 0;
let ocena = 0; 

notes.forEach(note => {
   ocena.forEach(ocene) => {
    total = total + ocena
    ocena++
   }
})

console.log(total/ocena);
*/
/*
const notes = [
    [11, 15, 14],
    [ 8, 12, 16],
    [ 7, 11]
];

let total = 0;
let nbrNotes = 0;

notes.forEach(matiere => matiere.forEach(note=>{
    total += note;
    nbrNotes++;
}))
console.log(total/nbrNotes);
*/
/*
const lis = document.querySelectorAll("li");

lis.forEach((li,i) => li.textContent = i);
*/
