const str = "242Welcome23 45to344 254324WayToLearnX!";
  
const patt =  /[A-Z]/gi;
  
let result = str.match(patt)
  
  console.log(result.join(""));


  // Écrivez l’expression régulière qui révèle le message caché.Vous devez supprimer tous les nombres pour révéler le message. Utilisez la classe de caractères \D dans votre expression.