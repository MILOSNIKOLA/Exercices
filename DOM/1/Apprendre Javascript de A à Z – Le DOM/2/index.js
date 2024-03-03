
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

// const nav = document.querySelector('nav');

// // console.log(nav);

// window.addEventListener('scroll', () => {
//     // console.log("test !!!");
//     console.log(window.scrollY);

//     if (window.scrollY > 120) {
//         nav.style.top = 0
//     } else {
//         nav.style.top = "-50px"
//     }
// })


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
        document.querySelector("form > div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>
        `;
        
    } else {
        alert('Veuillez acceptez les CGV')
    }
})

//-------------------------------------------------------------
// Load event

window.addEventListener('load', () => {
    // console.log('daaaaa');
})

//------------------------------------------------------------
// les forEach

// const boxes = document.getElementsByClassName('box')
const boxes = document.querySelectorAll('.box')

// console.log(boxes);

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        // console.log(e.target);
        e.target.style.transform = "scale(0.7)"
    })
});

//----------------------------------------------------------
// addEventLister Vs onclick

// document.body.onclick = () => {
//     console.log('Click !!');
// }

// document.body.onscroll = () => {
//     console.log('Click !!');
// }

// Bubbling => fin (de base) l'eventlistener est paramétré en mode Bubbling
document.body.addEventListener('click', () => {
    // console.log('click 1 !');
})

// Usecapture
document.body.addEventListener('click', () => {
    // console.log('click 2 !');
},true)

//------------------------------------------------------------------------
// Stop propagation

questionContainer.addEventListener('click', (e) => {
    // alert('test');
    e.stopPropagation();
})

//  removeEventListener

//------------------------------------------------------------------------
//  BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open('http://google.com', "cours js", "heigth=600, width=800")
// window.close()


// Evénements adossés Window
//window.alert('hello')

// confirm

btn2.addEventListener('click', () => {
    confirm('Voulez vous vraiment vous tromper ?')
})

// prompt

// let answer

// btn1.addEventListener('click', () => {
//     answer = prompt('Entrez Votre nom !')

//     questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>"
// })

// setTimeout

// setTimeout(() => {
//     questionContainer.style.borderRadius = "500px"
// },3000)

// // let interval = setInterval(() => {
// //     document.body.innerHTML += `
// //     <div classe='box'>
// //         <h2>Nouvell Boite !</h2>
// //     </div>
// //     `;
// // }, 3000)

// document.body.addEventListener('click', (e) => {
//     e.target.remove(); // retirer less elément du DOM
//     clearInterval(interval)
// })

// Location 
console.log();
