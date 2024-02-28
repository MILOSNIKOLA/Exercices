
// function strReverse ["XnraeLoTyaW", "olleH"] {
//     strReverse.reverse();
// }
// strReverse()

// function strReverse (str) {
    
//     strReverse = [1, 2, 3, 4, 5].reverse();
    
// }

// console.log(strReverse()); // Affiche [5, 4, 3, 2, 1]

//---------------------------------------------------------------------

// function reverseString(str) {
//   // Etape 1.On Utilise la méthode split pour scinder la chaine de caractère
//   let splitString = str.split(""); // var splitString = "hello".split("");
//   // ["h", "e", "l", "l", "o"]

//   // Etape 2. On utilise la méthode reverse() inverse les éléments d'un array
//   let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//   // ["o", "l", "l", "e", "h"]

//   // Etape 3. On utilise la méthode join() pour réunir les élements du tableau
//   let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//   // "olleh"
  
//   //Etape 4. Retourner la chaine de caractères obtenue
//   return joinArray; // "olleh"
// }

// console.log(reverseString("hello"));

//----------------------------------------------------------------------

// function strReverse(str) {
//      const splitString = str.split("");
//      const reverseArray = splitString.reverse();
//      const joinArray = reverseArray.join("");
    
//      return  joinArray
// }

// console.log(strReverse("XnraeLoTyaW"));
// console.log(strReverse("olleH"));
//-------------------------------------------------------------------------------


function strReverse(str) {
    return str.split("").reverse().join("");
  }
  
  console.log(strReverse("XnraeLoTyaW"));
  console.log(strReverse("olleH"));




























































