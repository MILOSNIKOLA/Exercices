

function isPalindrome (word) {
    const reversedWord = word
        .split('')
        .reverse()
        .join('')
    return word.toUpperCase() === reversedWord.toUpperCase()
}
console.log(isPalindrom('kayak')) // true
console.log(isPalindrom('SOS')) // true
console.log(isPalindrom('Kayak')) // true
console.log(isPalindrom('Bonjour')) // false