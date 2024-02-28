function containSpaces(str) {
	// for (let i = 0; i < str.length; i++) {
    //     if (str[i] === (" "))
    //     return true;
    // } return false;
    return str.includes(' ')
}

// Afficher la sortie
console.log(containSpaces("Thomas"));
console.log(containSpaces("Hello World!"));
console.log(containSpaces(" "));
console.log(containSpaces(""));