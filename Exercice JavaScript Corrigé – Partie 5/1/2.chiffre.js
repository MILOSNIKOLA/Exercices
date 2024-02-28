// Exercice 2:

// Écrivez l’expression régulière qui révèle le message caché. Vous devez supprimer tous les nombres pour révéler le message. Utilisez la classe de caractères \D dans votre expression.

  var str = "242Welcome23 45to344 254324WayToLearnX!";

  //écrivez ici, l'expression régulière ;

  var patt = /\D+/g

  var result = str.match(patt);
  
  console.log(result.join(""));