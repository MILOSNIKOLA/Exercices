
// document.querySelector('h4').style.background = 'red';

// const baliseHTML = document.querySelector('h4')

// console.log(baliseHTML);

// baliseHTML.style.backgroundColor = 'blue'


//-------------------------  Click Event  ----------------------------

const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1'); // Sélection du bouton 1 par son identifiant
const btn2 = document.getElementById('btn-2'); // Sélection du bouton 2 par son identifiant
const response = document.querySelector('p');

questionContainer.addEventListener('click', () => {
    console.log('okeee'); // Vérification de l'événement de clic
    questionContainer.classList.toggle('question-clicked'); // Basculer la classe sur le conteneur de question lors du clic
});

btn1.addEventListener('click', () => {
    response.style.visibility = "visible"; // Rendre la réponse visible
    response.style.background = "green"; // Appliquer un arrière-plan vert à la réponse
    questionContainer.style.borderRadius = '150px'; // Appliquer un rayon de bordure au conteneur de question
});

btn2.addEventListener('click', () => {
    response.style.visibility = "visible"; // Rendre la réponse visible
    response.style.color = 'white'; // Appliquer une couleur de texte blanche à la réponse
    response.style.background = 'red'; // Appliquer un arrière-plan rouge à la réponse
    questionContainer.classList.toggle('question-clicked1'); // Basculer une autre classe sur le conteneur de question lors du clic sur le bouton 2
    questionContainer.style.borderRadius = '150px'; // Appliquer un rayon de bordure au conteneur de question
});