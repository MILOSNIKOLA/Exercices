//  27/09/22

// while
/*
let n = 0;

while (n < 7) {
    n++;
}

console.log(n);

*/


// const chaine = " Je suis Dragan.";


/*
while (chaine.length > 10) {
    console.log(chaine)
    chaine++;
}

//corrigé

let i = 0;  
let count = 0;


while(chaine[i] != ".") {
    console.log(chaine[i]);
    count++;
    i++;
}
console.log(count);

// break

let i = 0;  
let count = 0;
let tour = 20;

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



// sans espaces

let i = 0;  
let count = 0;


while(chaine[i] != ".") {
    if(chaine[i] == " ") {
        i++;
        continue;
    }
    console.log(chaine[i])
    console.log("i= " + i)
    count++;
    i++;
}
console.log(count);

*/

// 28/09/22 

/* test
let i = 1;

while(i == 1) {
    console.log(i);
    i++
    if (i == 20) break;
}
*/

// corrigé

/*

let n = 1;

while(n < 11) {
    if (n%2 == 0) {
        n++;
        continue;
    }
    console.log(n);
    n++;
    if (n == 20) break;
}

*/

// 04/10/22


/*
let br = 1;

while(br < 10) {
    console.log(br);
    br++
}

*/
/*
const rec = "Je suis Dragan."

while (rec.length > 0) {
    if(rec == " ") break
    console.log(rec)
   rec++;
}
*/

/*const rec = "Je suis Dragan."

let i = 0;
let count = 0;
let stop = 20

while(rec[i] != "") {
    if(i == stop) break
    console.log(rec[i]);
    console.log("i= " + i);
    count++;
    i++;
}

console.log(count);
*/


//  11/11/22
/*
let i = 0;
while (i < 11) {
    if(i % 2 == 1) i ==
    i++
    console.log(i);
}
*/
// test 01 error
/* 
let n = 1;

while(n < 11)
{
    if (n%2 ==0)
    {
       n++;
       continue;
    }

    console.log(n);
    n++
}
*/

//  15/11/22


/*
let i = 0;

while () {

}
*/
/*  1er ex error

let i = 0;

 while (i < 11) {
    if(i%2 == 0) 
    i++;
    console.log(i);
 }
 */
/*
let i = 1;

while (i < 11) {
    if(i%2 == 1)
    console.log(i);
    i++;
}
*/