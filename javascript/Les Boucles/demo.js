
/*

var nombre = 91

for (var a = 2; a < nombre ; a++) {
    if (91 % a === 0) {
        console.log("ce nombre n'est pas premier")
        console.log(nombre + " est divisible " + a)
    }
}

var eleves = [{
    nom: 'Marc',
    moyenne: 15
}, {
    nom:'Marina',
    moyenne: 8
}, {
    nom:'Aca',
    moyenne: 4
}]

for (var e = 0;e < eleves.length; e++) {
    var eleve = eleves[e]
    if(eleve.moyenne > 10) {
        console.log(eleve.nom + ' a eu ' + eleve.moyenne)
    } else{
        console.log(eleve.nom + ' a eu ' + eleve.moyenne)
    }

}



for(let s = 0;s < 11; s++) {
    if (s%2 == 0 ) continue;
        console.log(s)
    }

    for(let s = 0;s < 11; s+=2) {
            console.log(s)
        }

const tab = [-5,10,14,47,-100,28]

let maxi= tab[0];

for(let s=1; s<tab.length;s++) {
    if (tab[s] > maxi) maxi = tab[s];
}

console.log(maxi);



// FOR


const notes = [ 
    [9,8,10], 
    [15,11,13], 
    [10,17]
];

let total = 0;
let elements = 0;

for(let ligne = 0; ligne < notes.length; ligne++) 
{
    for(let col = 0; col < notes[ligne].length; col++)
        {
            total += notes[ligne] [col];
            elements++;
        }
}
console.log(total/elements)



// do...while



let i = 0;
do {
  i++;
  console.log(i);
} while (i < 5);


//-----------------------------------------------------------------------------------------------------------

// while

let chiffre = 1;

while (chiffre <= 10) {
    console.log(chiffre)
    chiffre++;
}

// ex mon ex   // ex corrigé

let inpair = 1;
const max = 25;
let count = 0;

while (inpair < 11) {
    if(inpair%2 == 0) {
        inpair++;
        
    }
    console.log(inpair);
    inpair++;
    if(count == max) break;
}

//----------------------------------------------------------------------------------------------------------

// do while

let n;

do {
    // n = prompt("Entrez un nombre inferieur a 10") 
}
while(n>10)


//ex------

let m;

do {
    m = prompt("Entrez un nombre inferieur a 10") 
    
}
while(n>10)

*/
//---------------------------------------------------------------------------------------------------------