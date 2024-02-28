//  04/11/22

// La syntaxe :
/*
const person = {
    prenom: "Milos",
    nom: "Manojloviv",
    age:12,
    profession: "Collégien"
}

for(let key in person) {
    console.log(key);
}

Reponse: 
prenom
nom
age
profession
*/
/*
const person = {
    prenom: "Milos",
    nom: "Manojloviv",
    age:12,
    profession: "Collégien"
}

for(let key in person) {
    console.log(person[key]);
}
*/

// TEST 01
/*
const salaries = {
    John: 22000,
    Sylvie: 25000,
    Karim: 43000,
    Romain: 30000
}
let max = [salaries[2]];

for(let key in salaries) {
    if(salaries > max) max = salaries
}
console.log(max);
*/
/*
const salaries = {
    John: 22000,
    Sylvie: 25000,
    Karim: 43000,
    Romain: 30000
}

let max = 0;
let name;

for(let salarie in salaries) {
    if(salaries[salarie] > max) {
        max = salaries[salarie]
        name = salarie;
    }
}
// console.log(name, max);
// alt + 7 = `` ;
console.log(`${name} a le plus gros salaire qui est de ${max} 
Euros par An`);
*/



//  08/11/22  
// 1er test Error
/*
const salaries = {
    john: 22000,
    sylvie: 25000,
    Karim: 43000,
    Romain: 30000
}
let max = [salaries[2]];

for (key in salaries) {
    if(salaries[max] > max) max = salaries
}
console.log(max);
*/
/*
const salaries = {
    John: 22000,
    Sylvie: 25000,
    Karim: 43000,
    Romain: 30000
}

let max = 0;
let name;

for(let salarie in salaries) {
    if(salaries[salarie] > max) {
        max = salaries[salarie]
        name = salarie;
    }
} 

console.log(name + " a un salaire de " + max);
*/

const notes = {
    math: [10,12,13],
    chimie:[14,10,18],
    physique:[11,19]
}
 // 1er meth pr concat
let tableauTotal = [];

/*
for(let matiere in notes){
    tableauTotal = tableauTotal.concat(notes[matiere])
}

console.log(tableauTotal);
*/

// 2eme meth pr concat

for(let matiere in notes){
    tableauTotal = [...tableauTotal,...notes[matiere]];
}

let somme = 0;

for(let note of tableauTotal) {
    somme = somme + note;
}
console.log(somme/tableauTotal.length);