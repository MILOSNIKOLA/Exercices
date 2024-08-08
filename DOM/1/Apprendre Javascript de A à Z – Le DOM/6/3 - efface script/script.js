


// let fileViewed = false;

// document.getElementById('viewFile').addEventListener('click', () => {
//     if (fileViewed) {
//         alert('Vous avez déjà consulté ce fichier.');
//         return;
//     }

//     const image = document.getElementById('image');
//     const audio = document.getElementById('audio');

//     if (image && audio) {
//         // Dévoilement progressif de l'image
//         image.classList.remove('blurred');
//         image.classList.add('unblurred');
//         audio.play();

//         fileViewed = true;

//         // Attendre 15 secondes pour le dévoilement complet, puis 5 secondes avant de refermer
//         setTimeout(() => {
//             setTimeout(() => {
//                 // Reflouter l'image progressivement
//                 image.classList.remove('unblurred');
//                 image.classList.add('blurred');
//             }, 5000); // Pause de 5 secondes avant de reflouter

//             // Arrêter et réinitialiser l'audio après 35 secondes
//             setTimeout(() => {
//                 audio.pause();
//                 audio.currentTime = 0; // Réinitialiser l'audio au début
//                 alert('Le fichier a été effacé.');
//             }, 15000); // 15 secondes pour reflouter
//         }, 20000); // 20 secondes pour dévoiler
//     } else {
//         alert('Aucun fichier disponible à consulter.');
//     }
// });
