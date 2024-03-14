
// document.querySelector('h4').style.background = 'red';

// const baliseHTML = document.querySelector('h4')

// console.log(baliseHTML);

// baliseHTML.style.backgroundColor = 'blue'


//-------------------------  Click Event  ----------------------------

const questionContainer = document.querySelector('.click-event');

// console.log(questionContainer);

// questionContainer.style.borderRadius = '150px';

questionContainer.addEventListener('click' , () => {
    //console.log('okeee'); // Verifier TOUJOUR AVANT
    questionContainer.style.background = "red"
})