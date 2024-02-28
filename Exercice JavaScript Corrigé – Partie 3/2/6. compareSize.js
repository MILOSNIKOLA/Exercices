// Exercice 6:

// Créez une fonction qui prend deux chaînes str1 et str2 comme arguments et renvoie TRUE si le nombre total de caractères dans la première chaîne est égal au nombre total de caractères dans la deuxième chaîne sinon renvoie FALSE.

// Exemple:

// compareSize("AA", "BB") ➞ true

// compareSize("123", "1") ➞ false

// compareSize("Ali", "Bob") ➞ true

function compareSize(str1, str2) {
	
    // Écrivez votre code ici

  // if (JSON.stringify(str1, str2)) {
  //    return true
  // } else {
  //   false
  // }

          
       return Object.is(str1.length, str2.length)

      //  return str1.length === str2.length;
          
        // }
      

}

// Afficher la sortie

console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));