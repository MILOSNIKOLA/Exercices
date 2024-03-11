    
    function checkOrder(str) {

        // Écrivez votre code ici

//          let aaa = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'];
//          let num = ["1234567890"]
//          let tot = aaa + num;
//          let x = true;
//          let y = false;
        
//         // let = aaa.toSorted();

//          return tot
 


return str === str.split("").sort().join("")


 }      


    
    

// Afficher la sortie
 
console.log(checkOrder("abc"));
console.log(checkOrder("zyx"));
console.log(checkOrder("123"));
console.log(checkOrder("aabbcc"));

// Exercice 1:

// Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre ou non.

    // Exemple:

    // checkOrder("abc") ➞ true

    // checkOrder("zyx") ➞ false

    // checkOrder("123") ➞ true

    // checkOrder("aabbcc") ➞ true






    // let sortString = (str) => {
    //     return [...str].sort((a, b) =>
    //     a.localeCompare(b)).join("");
    // }
     
    // console.log("Sorted String: ");
    // console.log(sortString("qwertyuiop"));

        // let tab = ["abc"]
        // aaa.sort()

        // return tab


