
// SELECTEURS
// document.querySelector('h4').style.background = "blue";

// const baliseHTML = document.querySelector('h4');

//  console.log(baliseHTML);

//--------------------------------  Click event  -----------------------------

const questionContainer = document.querySelector('.click-event');

console.log('questionContainer');

questionContainer.style.borderRadius = '150px';

questionContainer.addEventListener('click', () => {
    // console.log("Click !!!!");
    questionContainer.style.background = "red";
})














