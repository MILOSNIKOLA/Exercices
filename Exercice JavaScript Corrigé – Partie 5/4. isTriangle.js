function isTriangle(a, b, c) {

// Écrivez votre code ici

 // return (Math.hypot(a, b) === c && true) && (Math.hypot(a, b) === c && false)

  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }


}
// Afficher la sortie

console.log(isTriangle(2, 3, 4));
console.log(isTriangle(2, 4, 5));
console.log(isTriangle(8, 2, 1));

// Créez une fonction qui prend trois nombres comme arguments et renvoie TRUE si c’est un triangle, sinon renvoie FALSE.

// isTriangle(2, 3, 4) ➞ true

// isTriangle(2, 4, 5) ➞ true

// isTriangle(8, 2, 1) ➞ false

// Notez que a, b et, c sont les longueurs des côtés du triangle.

//  return Math.hypot(a, b) === c || Math.hypot(a, c) === b || Math.hypot(b, c) === a;
