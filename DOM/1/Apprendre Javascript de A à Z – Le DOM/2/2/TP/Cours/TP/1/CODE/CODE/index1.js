// SELECTEURS

// document.querySelector('h4').style.background = "red" ako je jedan

// const baliseHTML = document.querySelector('h4')      - declarer

// console.log(baliseHTML);                             - utiliser


//  Click event 

const questionContainer = document.querySelector('.click-event')
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const response = document.querySelector('p');
const wrongButtons = document.getElementById('btn2','btn3','btn4');
// const wrongButtons = 
// ;

questionContainer.addEventListener('click', () => {
    // questionContainer.style.background = 'red'
    // questionContainer.style.border = '3px solid grey';

    // questionContainer.classList.add('question-clicked');
    // questionContainer.classList.remove('question-clicked')
    questionContainer.classList.toggle('question-clicked');
    questionContainer.classList.toggle('erreur');

})


btn1.addEventListener('click', () => {
    // response.style.visibility = 'visible';
    response.classList.add('show-response')
    response.style.background = 'green';

})




//---------------------  Mouse move ---------------------------------------------










































