function checkNbr(n) {
    
    return n % 15 === 0 ? "Hello World" : n % 3 === 0 ? "Hello" : "World";

    // if (3 == n) {
    //     n = 'Hello'
    // } if (5 == n) {
    //     n = 'World'
    // } if (15 == n) {
    //     n = 'Hello World'
    // } return n
    
}   


// Afficher la sortie
console.log(checkNbr(3));
console.log(checkNbr(5));
console.log(checkNbr(15));

