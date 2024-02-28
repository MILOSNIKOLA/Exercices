function compareSize(str1, str2) {
	// if (str1 < str2) {
    //     return true 
    // } else if (str1 > str2) {
    //     return false
    // }
    return str1.length === str2.length;
}

// Afficher la sortie

console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));