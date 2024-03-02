
// SELECTEURS
// document.querySelector('h4').style.background = "yellow";
// const baliseHTML = document.querySelector("h4");

// Click event

const questionContainer = document.querySelector(".click-event")
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2')
const response = document.querySelector('p')
// const response1 = document.querySelector('px')
console.log(response);

questionContainer.addEventListener('click', () => {
    // questionContainer.style.borderRadius = "50%";
    // questionContainer.style.background = "blue";
    // questionContainer.style.border = "5px solid teal";
    questionContainer.classList.toggle("question-clicked");
    
})

btn1.addEventListener('click',() => {
    // response.style.visibility = "visible";
    response.classList.add('show-response')
    response.style.background = "darkgreen";
})

btn2.addEventListener('click',() => {
    // response.style.visibility = "visible";
    response.classList.add('show-response')
    response.style.background = "darkred";
    // response1.style.backgroundColor = "red"
})



//--------------------------------------------------------------
//  Mouse Event 

// const mousemove = document.querySelector(".mousemove");
//     // console.log(mousemove);
// window.addEventListener("mousemove", (e) => {
//     // console.log(e.target);
//     mousemove.style.left = e.pageX + "px";
//     mousemove.style.top = e.pageY + "px";
// })

// mousemove.addEventListener("mousedown", () => {
//     mousemove.style.transform = "scale(2) translate(-25%, -25%)"
// })

// mousemove.addEventListener("mouseup", () => {
//     mousemove.style.transform = "scale(1) translate(-50%, -50%)"
//     mousemove.style.border = "2px solid darkblue"
// })

// questionContainer.addEventListener("mouseenter", () => {
//     questionContainer.style.background= "rgba(0,0,0,0.6)"
// })

// questionContainer.addEventListener("mouseout", () => {
//    questionContainer.style.background = "green";
// })

// response.addEventListener("mouseover", () => {
//     response.style.transform = "rotate(2deg)";
// })

//**************************************************************************** */
// KeyPress Event

const keypressContainer = document.querySelector('.keypress')
const key = document.getElementById("key");

// const ring = (key) => {
//     const audio = new Audio();
//     audio.src = key + "../assets/a.mp3"
//     audio.play()
// };

document.addEventListener('keypress', (e) => {
    // console.log("yesssS !!");
    // console.log(e.key);
    // key.textContent = "Voici du txt maGuel"
    key.textContent = e.key;

    if (e.key === "g") {
       keypressContainer.style.background = 'green';
    } else {
        keypressContainer.style.background = 'red' 
    }

    // if (e.key === "a") ring(e.key)
    // ring(e.key)
})

//****************************************************** */
// Scroll Event

const nav = document.querySelector('nav');

// console.log(nav);

window.addEventListener('scroll', () => {
    // console.log("test !!!");
    console.log(window.scrollY);

    if (window.scrollY > 120) {
        nav.style.top = 0
    } else {
        nav.style.top = "-50px"
    }
})


//----------------------------------------------------------------
// Form event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');


let pseudo = "";
let language = "";
// console.log(select);


inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
})

select.addEventListener('input', (e) => {
    language = e.target.value;
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(cgv.checked);

    if (cgv.checked) {
        // Affiche le  content des variables
        document.querySelector("form > div")
        // .textContent = `
        // <h3>Pseudo : ${pseudo}</h3>
        // <h4>Langage préféré : ${language}</h4>`;
        .innerHTML = <h3>Pseudo' : + pseudo</h3>
    } else {
        alert('Veuillez acceptez les CGV')
    }
})



















