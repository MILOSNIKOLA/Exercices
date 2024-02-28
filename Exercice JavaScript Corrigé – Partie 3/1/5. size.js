function size(str, n= 0) {
    //return str.length
    if(str[n] === undefined) {
        return n
      }
     return size(str, n + 1)
}

// Afficher la sortie

console.log(size("alex"));
console.log(size("x"));
console.log(size(""));