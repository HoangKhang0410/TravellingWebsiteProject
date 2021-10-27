let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll('.slide');
let slider = document.querySelector('.slider');
let nextBtn = document.querySelector('.slide-next');
let prevBtn = document.querySelector('.slide-prev');
console.log(slides);

const hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active');
    })
}

const showSlide = () => {
    hideAllSlide();
    slides[slide_index].classList.add('active');
}

const nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1;

const prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1;

slider.addEventListener('mouseover', () => slide_play = false);
slider.addEventListener('mouseleave', () => slide_play = true);

nextBtn.addEventListener('click', () => {
    nextSlide();
    showSlide();
})

prevBtn.addEventListener('click', () => {
    prevSlide();
    showSlide();
})

showSlide();

setInterval(() => {
    if(!slide_play) return;
    nextSlide();
    showSlide();
}, 5000)

import { tours } from '../../Public/data.js';
const breakPoint = 5;

const bodyMiddle = document.querySelector('.body-middle');

const html = tours.map((tour, index) => {
    if(index > breakPoint) return;
    return ` <div class="item">
    <div class="item-top">
        <img src=${tour.image} alt="item${tour.id}" />
    </div>
    <div class="item-main">
        <div class="item-main-top">
            <p><span>$${tour.price}</span>/Per Person</p>
            <p>
                <ion-icon name="calendar-outline"></ion-icon>
                5 Days/6 night
            </p>
        </div>
        <div class="item-main-middle">
            <ion-icon name="location-outline" class="location-icon"></ion-icon>
            <h3>${tour.name}</h3>
        </div>
        <div class="item-main-bottom">
            <ion-icon name="star" class="rating-star"></ion-icon>
            <p>8K+Rating</p>
        </div>
    </div>
</div>`;
});
bodyMiddle.innerHTML = html.join('');

