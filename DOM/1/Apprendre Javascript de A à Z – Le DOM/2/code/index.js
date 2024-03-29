
// document.querySelector('h4').style.background = 'red';

// const baliseHTML = document.querySelector('h4')

// console.log(baliseHTML);

// baliseHTML.style.backgroundColor = 'blue'

// var browser = require("webextension-polyfill");

//-------------------------  Click Event  ----------------------------

const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1'); // Sélection du bouton 1 par son identifiant
const btn2 = document.getElementById('btn-2'); // Sélection du bouton 2 par son identifiant
const response = document.querySelector('p');

questionContainer.addEventListener('click', () => {
    // console.log('okeee'); // Vérification de l'événement de clic
    questionContainer.classList.toggle('question-clicked'); // Basculer la classe sur le conteneur de question lors du clic
});

btn1.addEventListener('click', () => {
    response.style.visibility = "visible"; // Rendre la réponse visible
    response.style.background = "green"; // Appliquer un arrière-plan vert à la réponse
    response.classList.toggle('show-response') // LETICI ODGOVAR
    questionContainer.style.borderRadius = '150px'; // Appliquer un rayon de bordure au conteneur de question
});

btn2.addEventListener('click', () => {
    response.style.visibility = "visible"; // Rendre la réponse visible
    response.style.color = 'white'; // Appliquer une couleur de texte blanche à la réponse
    response.style.background = 'red'; // Appliquer un arrière-plan rouge à la réponse
    questionContainer.classList.toggle('question-clicked1'); // Basculer une autre classe sur le conteneur de question lors du clic sur le bouton 2
    questionContainer.style.borderRadius = '150px'; // Appliquer un rayon de bordure au conteneur de question
    response.classList.toggle('show-response') // LETICI ODGOVAR
});

//**************************** Mouse EVENT --------------------------------------

const mousemove = document.querySelector('.mousemove');

//  console.log(mousemove);

window.addEventListener('mousemove', (e) => {
    // console.log('misssssS !');
    // console.log(e.target);
    mousemove.style.left = e.pageX + 'px'
    mousemove.style.top = e.pageY + 'px'
    
})

window.addEventListener('mousedown', () => {
    // console.log("test");
    mousemove.style.transform = 'scale(2) translate(-25%, -25%)';
})

window.addEventListener('mouseup', () => {
    // console.log("test");
    mousemove.style.transform = 'scale(1) translate(-50%, -50%)';
    mousemove.style.border = '10px double red'
})

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = 'rgba(0, 0, 0, .5)';
})

questionContainer.addEventListener('mouseout', () => {
    // console.log("missss out");
    questionContainer.style.background = "red";
})

response.addEventListener('mouseover', () => {
    response.style.transform = 'rotate(10deg)';
})

//--------------------------  KeyPress EVENT --------------------------------------

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

const ring = () => {
    const audio = new Audio();
    audio.src = './song.mp3';
    audio.play()
}

// console.log(keypressContainer);
// console.log(key);

document.addEventListener('keypress', (e) => {
    // console.log(e.key);
    key.textContent = e.key;
   
    if (e.key === 'h') {
        keypressContainer.style.background = "pink"
    } else if (e.key === 'r') {
        keypressContainer.style.background = 'green'
    } else {
        keypressContainer.style.background = 'red'
    }
    
    // ring()
});

//------------------------- Scroll Event  ---------------------------

const nav = document.querySelector('nav')

// console.log(nav);

window.addEventListener('scroll', () => {
    // console.log('test');
    console.log(window.scrollY);

    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = '-50px'
    }
})


//--------------------------  Form EVENT  -------------------------------------

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = '';
let language = '';
// console.log(inputName);
// console.log(select);
// console.log(form);

inputName.addEventListener('input', (e) => {
    // console.log('yessss');
    // console.log(e.target.value);
    pseudo = e.target.value;
    // console.log(pseudo);
})

select.addEventListener('input', (e) => {
    // console.log(e);
    language = e.target.value
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('yeessS');
    // console.log(cgv.checked);
    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>
        `;
    } else {
        alert('Veuillez accepter les CGV')
    }
})







// const inputName = document.querySelector('input[type="text"]');
// const select = document.querySelector('select');
// const form = document.querySelector('form');
// const cgv = document.getElementById('cgv');
// let pseudo = '';
// let language = '';

// inputName.addEventListener('input', (e) => {
//     pseudo = e.target.value;
// });

// select.addEventListener('change', (e) => {
//     language = e.target.value;
// });

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (cgv.checked) {
//         document.querySelector('form > div').innerHTML = `
//         <h3>Pseudo : ${pseudo}</h3>
//         <h4>Langage préféré : ${language}</h4>
//         `;
//     } else {
//         alert('Veuillez accepter les CGV');
//     }
// });