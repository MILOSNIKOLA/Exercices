
// document.querySelector('h4').style.background = 'red';

// const baliseHTML = document.querySelector('h4')

// console.log(baliseHTML);

// baliseHTML.style.backgroundColor = 'blue'


//-------------------------  Click Event  ----------------------------

const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');
// const wrong = document.querySelector('btn-2')

// console.log(btn1 , btn2);

// console.log(questionContainer);

// questionContainer.style.borderRadius = '150px';

questionContainer.addEventListener('click' , () => {
    console.log('okeee'); // Verifier TOUJOUR AVANT
    // questionContainer.style.background = "red"
    questionContainer.classList.toggle('question-clicked')
    
})

btn1.addEventListener('click', () => {
    // console.log('clickkkkk');
    response.style.visibility = "visible";
    response.style.background = "green";
    questionContainer.style.borderRadius = '150px';
})

btn2.addEventListener('click', () => {
    // console.log('clickkkkk');
    response.style.visibility = "visible";
    response.style.color = 'white';
    // response.classList.toggle('wrong')
    // questionContainer.style.textDecorationLine = 'normal';
    response.style.background = 'red';
    questionContainer.classList.toggle('question-clicked1');
    questionContainer.style.borderRadius = '150px';
})

 
// /v3/polyfill.js

// /v3/polyfill.min.js.

Uncaught (in promise) Error: Internal error opening backing store for indexedDB.open.
    at wrappedSendMessageCallback (browser-polyfill.js:1163:16)
wrappedSendMessageCallback @ browser-polyfill.js:1163
await in wrappedSendMessageCallback (asynchrone)
(anonyme) @ index.js:92
(anonyme) @ index.js:92
(anonyme) @ index.js:92
polyfill.js:1193 Uncaught (in promise) Error: Internal error opening backing store for indexedDB.open.
    at wrappedSendMessageCallback (polyfill.js:1193:18)
wrappedSendMessageCallback @ polyfill.js:1193
browser-polyfill.js:1163 Uncaught (in promise) Error: Internal error opening backing store for indexedDB.open.
    at wrappedSendMessageCallback (browser-polyfill.js:1163:16)