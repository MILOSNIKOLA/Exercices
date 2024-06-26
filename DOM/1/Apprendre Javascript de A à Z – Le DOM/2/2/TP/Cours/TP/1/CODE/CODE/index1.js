// SELECTEURS

// document.querySelector('h4').style.background = "red" ako je jedan

// const baliseHTML = document.querySelector('h4')      - declarer

// console.log(baliseHTML);                             - utiliser


//  Click event 

const questionContainer = document.querySelector('.click-event')

questionContainer.addEventListener('click', () => {
    // questionContainer.style.background = 'red'
    // questionContainer.style.border = '3px solid grey';

    // questionContainer.classList.add('question-clicked');
    // questionContainer.classList.remove('question-clicked')
    questionContainer.classList.toggle('question-clicked')
    
})


















