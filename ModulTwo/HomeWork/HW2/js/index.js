const closeButton = document.querySelector('.header__mobile-closed');
const headerModileeList = document.querySelector('.header__modilee-list');
const headerBurger = document.querySelector('.header__burger')
const aboutSliderBox = document.querySelectorAll('.about__slider-box')
const aboutSliderInner = document.querySelectorAll('.about__slider-inner')
const aboutSliderDots = document.querySelector('.about__slider-dots')
const aboutSliderDot = document.querySelectorAll('.about__slide-dot')
let total = 1
closeButton.addEventListener('click', () => {
    headerModileeList.style.display = 'none'
})
headerBurger.addEventListener('click', () => {
    headerModileeList.style.display = 'block'
})

function showSlide(n) {
    aboutSliderBox.forEach(item => item.style.display = 'none')
    aboutSliderBox[n - 1].style.display = 'flex'
}

aboutSliderDot.forEach((dot, index) => {
    dot.addEventListener('click', (event) => {
        aboutSliderDot.forEach(dot => {
            dot.classList.remove('active');
        });
        event.target.classList.add('active');
        showSlide(index + 1);
    });
});

showSlide(total)
