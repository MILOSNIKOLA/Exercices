// Exercice 8: 

//Le problème du fermier
// Dans ce défi, un fermier vous demande de lui dire combien de pattes peuvent être comptées parmi tous ses animaux. Il y a trois espèces:

// poulets = 2 pattes
// vaches = 4 pattes
// chevaux = 4 pattes
// Le fermier a compté ses animaux et il vous donne un sous-total pour chaque espèce. 

// Vous devez implémenter une fonction qui renvoie le nombre total de pattes de tous les animaux.

// L’ordre des animaux transmis à la fonction est nbrsPattes(poulets, vaches, chevaux).

// Exemple:

// nbrsPattes(1, 4, 2) ➞ 26

// nbrsPattes(2, 2, 2) ➞ 20

// nbrsPattes(2, 0, 3) ➞ 16

// N’oubliez pas que le fermier veut connaître le nombre total de pattes et non pas le nombre total d’animaux.

function nbrsPattes(poulets, vaches, chevaux) {
	
    // Écrivez votre code ici

    return 2 * poulets + 4 * vaches + 4 * chevaux

    // return poulets * 2 + (vaches + chevaux) * 4;

}

// Afficher la sortie

console.log(nbrsPattes(1, 4, 2));
console.log(nbrsPattes(2, 2, 2));
console.log(nbrsPattes(2, 0, 3));