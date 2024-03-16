const closeButton = document.querySelector('.header__mobile-closed');
const headerModileeList = document.querySelector('.header__modilee-list');
const headerBurger = document.querySelector('.header__burger')
const headerMobileUser = document.querySelector('.header__mobile-user')
const aboutSlider = document.querySelector('.about__slider')
let aboutSliderBox = document.querySelectorAll('.about__slider-box')
const aboutSliderInnder = document.querySelector('.about__slider-inner')
const arrowLeft = document.querySelector('.about__slider-arrow-left')
const arrowRight = document.querySelector('.about__slider-arrow')
const innerDots = document.createElement('div')
innerDots.classList.add('about__slider-dots')
aboutSlider.append(innerDots)
const newAboutSliderBox = document.createElement('div');
newAboutSliderBox.classList.add('about__slider-box');
let total = 1

function updateAboutSliderBox() {
   aboutSliderBox = document.querySelectorAll('.about__slider-box');
}
closeButton.addEventListener('click', () => {
    headerModileeList.classList.remove('active-list')
    headerMobileUser.classList.remove('opacity__class')
})

headerBurger.addEventListener('click', () => {
    headerModileeList.classList.add('active-list')
    headerMobileUser.classList.add('opacity__class')
})

function addDots(per) {
    innerDots.innerHTML = '';
    const numSlides = per.length;
    for (let i = 0; i < numSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider__dots');
        const dots = document.createElement('div');
        dots.classList.add('about__slide-dot');
        if (i === 0) {
            dots.classList.add('active');
        }
        innerDots.append(dot);
        dot.append(dots);
    }
}

function showSlide(n) {
    const aboutSliderBox = document.querySelectorAll('.about__slider-box')
    aboutSliderBox.forEach((item, index) => {
        if (index === n - 1) {
            item.classList.add('active-box');
        } else {
            item.classList.remove('active-box');
        }
    });
}

addDots(aboutSliderBox)



if (window.innerWidth < 1400) {
    const resultBox = document.querySelectorAll('.about__slider-box');
    let imagesRemaining = resultBox.length;
    let currentBox = null;

    resultBox.forEach((item, index) => {
        if (index % 2 === 0) {
            currentBox = document.createElement('div');
            currentBox.classList.add('about__slider-box');
            aboutSliderInnder.append(currentBox);
        }

        if (currentBox) {
            const result = item.children[2];
            currentBox.append(result);
        }

        imagesRemaining--;
    });

    if (imagesRemaining === 1) {
        const singleImageBox = document.createElement('div');
        singleImageBox.classList.add('about__slider-box');
        const remainingImage = aboutSliderBox[aboutSliderBox.length - 1].children[2];
        singleImageBox.append(remainingImage);
        aboutSliderInnder.append(singleImageBox);
    }
    showSlide(resultBox)
    addDots(document.querySelectorAll('.about__slider-box'));
}


if (window.innerWidth < 960) {
    const resultBox = document.querySelectorAll('.about__slider-box');
    let imagesRemaining = resultBox.length;
    let currentBox = null;

    resultBox.forEach((item, index) => {
        currentBox = document.createElement('div');
        currentBox.classList.add('about__slider-box');
        aboutSliderInnder.append(currentBox);

        if (item.children.length > 0) {
            const result = item.children[1];
            currentBox.append(result);
            imagesRemaining--;
        }
    });

    showSlide(1);
    addDots( document.querySelectorAll('.about__slider-box'));
}

const aboutSliderDot = document.querySelectorAll('.about__slide-dot')
aboutSliderDot.forEach((dot, index) => {
    dot.addEventListener('click', (event) => {
        aboutSliderDot.forEach(dot => {
            dot.classList.remove('active');
        });
        event.target.classList.add('active');
        showSlide(index + 1);
    });
});

updateAboutSliderBox()
arrowLeft.addEventListener('click', () => {
    total = (total === 1) ? aboutSliderBox.length : total - 1;
    showSlide(total);
    activateDot(total);
});

arrowRight.addEventListener('click', () => {
    total = (total === aboutSliderBox.length) ? 1 : total + 1;
    showSlide(total);
    activateDot(total);
});

function activateDot(index) {
    aboutSliderDot.forEach(dot => {
        dot.classList.remove('active');
    });
    aboutSliderDot[index - 1].classList.add('active');
}

showSlide(total)










