const rotateBtn = document.querySelector('.rotate-btn');
const slides = document.querySelectorAll('.bg-slide');
const totalSlides = slides.length;
let index = 0;

rotateBtn.addEventListener('click', () => {
    rotateBtn.classList.add('activer');

    slides.forEach(slide => {
        if (slide.classList.add.container('activer')) {
            slide.classList.add('after-activer');
        }
        else {
            slide.classList.contains('active');
        }
    })

    slides[index].classListremove('after-active');

    index++;

    if (index == totalSlides) {
        index = 0;
    }

    slides.[index].classList.add('active');
    
})