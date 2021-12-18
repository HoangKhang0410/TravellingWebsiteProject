import { tours } from '../../Public/data.js';

const bodyMiddle = document.querySelector('.body .body-content .body-left .body-middle');
const durationCheckbox = document.querySelectorAll('.body .body-content .body-right .duration-box input');
const categoryCheckbox = document.querySelectorAll('.body .body-content .body-right .categories-box input');
const searchBtn = document.querySelector('.body-right .search-box #search-btn');
const searchInput = document.querySelector('.body-right .search-box #search-input');

const thumbMin = document.querySelector('.body-right .price-box .dual-range .slide .thumb.thumbMin');
const thumbMax = document.querySelector('.body-right .price-box .dual-range .slide .thumb.thumbMax');
const rangeMin = document.querySelector('#rangeMin');
const rangeMax = document.querySelector('#rangeMax');

window.addEventListener('DOMContentLoaded', () => {
    render(tours);
    handleInputRange();
    handleClick();
    handleDirect();
});

searchBtn.onclick = () => {
    const maxPrice = rangeMax.value;
    const minPrice = rangeMin.value;
    const newTours = tours.filter((tour) => {
        if (tour.price <= maxPrice && tour.price >= minPrice) {
            return tour.name.toLowerCase().includes(searchInput.value.toLowerCase());
        }
    });

    render(newTours);
};

searchInput.onkeyup = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        searchBtn.click();
    }
};

function handleInputRange() {
    let min = 20;
    let max = 1000;

    const calcLeftPosition = (value) => {
        return (100 / (1000 - 20)) * (value - 20);
    };

    rangeMin.oninput = (e) => {
        const newValue = parseInt(e.target.value);
        if (newValue > max) return;
        min = newValue;
        thumbMin.style.left = `${calcLeftPosition(newValue)}%`;
        thumbMin.setAttribute('data-value', newValue);
    };

    rangeMax.oninput = (e) => {
        const newValue = parseInt(e.target.value);
        if (newValue < min) return;
        max = newValue;
        thumbMax.style.left = `${calcLeftPosition(newValue)}%`;
        thumbMax.setAttribute('data-value', newValue);
    };
}

const render = (tours) => {
    const html = tours.map((tour) => {
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
};

const removeCheck = (type) => {
    if (type === 'duration') {
        durationCheckbox.forEach((input) => {
            input.checked = false;
        });
    } else if (type === 'category') {
        categoryCheckbox.forEach((input) => {
            input.checked = false;
        });
    }
};

const handleClick = () => {
    durationCheckbox.forEach((element) => {
        element.addEventListener('click', () => {
            removeCheck('duration');
            element.checked = true;
        });
    });
    categoryCheckbox.forEach((element) => {
        element.addEventListener('click', () => {
            removeCheck('category');
            element.checked = true;
        });
    });
};

const handleDirect = () => {
    const tourPackages = document.querySelectorAll('.body .body-content .body-left .body-middle .item');
    console.log(tourPackages);
    tourPackages.forEach((item) => {
        item.onclick = () => {
            window.location = 'http://127.0.0.1:5500/Pages/PackageDetailsPage/index.html';
        };
    });
};
