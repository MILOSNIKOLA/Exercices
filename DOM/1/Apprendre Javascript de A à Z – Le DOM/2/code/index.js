
// document.querySelector('h4').style.background = 'red';

// const baliseHTML = document.querySelector('h4')

// console.log(baliseHTML);

// baliseHTML.style.backgroundColor = 'blue'


//-------------------------  Click Event  ----------------------------

const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p'); 
const wrong = document.querySelector('btn-2')

console.log(btn1 , btn2);

// console.log(questionContainer);

// questionContainer.style.borderRadius = '150px';

questionContainer.addEventListener('click' , () => {
    //console.log('okeee'); // Verifier TOUJOUR AVANT
    // questionContainer.style.background = "red"
    questionContainer.classList.toggle('question-clicked')
    questionContainer.style.borderRadius = '150px';
})

btn1.addEventListener('click', () => {
    // console.log('clickkkkk');
    response.style.visibility = "visible";
    response.style.background = "green"
})

btn2.addEventListener('click', () => {
    // console.log('clickkkkk');
    response.style.visibility = "visible";
    response.style.color = 'white';
    // response.classList.toggle('wrong')
    questionContainer.style.textDecorationLine = 'normal';
    response.style.background = 'red';
    questionContainer.classList.toggle('question-clicked1')
})










