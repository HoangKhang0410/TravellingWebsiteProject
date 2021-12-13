let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll('.slide');
let slider = document.querySelector('.slider');
let nextBtn = document.querySelector('.slide-next');
let prevBtn = document.querySelector('.slide-prev');
console.log(slides);

const hideAllSlide = () => {
  slides.forEach((e) => {
    e.classList.remove('active');
  });
};

const showSlide = () => {
  hideAllSlide();
  slides[slide_index].classList.add('active');
};

const nextSlide = () =>
  (slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1);

const prevSlide = () =>
  (slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1);

slider.addEventListener('mouseover', () => (slide_play = false));
slider.addEventListener('mouseleave', () => (slide_play = true));

nextBtn.addEventListener('click', () => {
  nextSlide();
  showSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  showSlide();
});

showSlide();

setInterval(() => {
  if (!slide_play) return;
  nextSlide();
  showSlide();
}, 3000);

import { tours } from '../../Public/data.js';
const breakPoint = 5;

const bodyMiddle = document.querySelector('.body-middle');

const html = tours.map((tour, index) => {
  if (index > breakPoint) return;
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

// header fix and dropdown box
// dropdown box
const dropdownBox = document.querySelector('.dropdown-box');
  const personIcon = document.querySelector('#personIcon');
  document.onclick = (e) => {
    if (e.target.id === 'personIcon') {
      dropdownBox.classList.toggle('show');
    } else {
      dropdownBox.classList.remove('show');
    }
  };
// header fix scroll
const header = document.querySelector('.header');
const headerMiddle = header.querySelector('.header-middle');
console.log(headerMiddle);
window.onscroll = () => {
  if (window.scrollY !== 0) {
    headerMiddle.classList.add('sticky');
  } else {
    headerMiddle.classList.remove('sticky');
  }
};

// data picker

const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector(
  '.date-picker .selected-date'
);
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector(
  '.date-picker .dates .month .next-mth'
);
const prev_mth_element = document.querySelector(
  '.date-picker .dates .month .prev-mth'
);
const days_element = document.querySelector('.date-picker .dates .days');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS
function toggleDatePicker(e) {
  if (!checkEventPathForClass(e.path, 'dates')) {
    dates_element.classList.toggle('active');
  }
}

function goToNextMonth(e) {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  mth_element.textContent = months[month] + ' ' + year;
  populateDates();
}

function goToPrevMonth(e) {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  mth_element.textContent = months[month] + ' ' + year;
  populateDates();
}

function populateDates(e) {
  days_element.innerHTML = '';
  let amount_days = 31;

  if (month == 1) {
    amount_days = 28;
  }

  for (let i = 0; i < amount_days; i++) {
    const day_element = document.createElement('div');
    day_element.classList.add('day');
    day_element.textContent = i + 1;

    if (
      selectedDay == i + 1 &&
      selectedYear == year &&
      selectedMonth == month
    ) {
      day_element.classList.add('selected');
    }

    day_element.addEventListener('click', function () {
      selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
      selectedDay = i + 1;
      selectedMonth = month;
      selectedYear = year;

      selected_date_element.textContent = formatDate(selectedDate);
      selected_date_element.dataset.value = selectedDate;

      populateDates();
    });

    days_element.appendChild(day_element);
  }
}

// HELPER FUNCTIONS
function checkEventPathForClass(path, selector) {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }

  return false;
}
function formatDate(d) {
  let day = d.getDate();
  if (day < 10) {
    day = '0' + day;
  }

  let month = d.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }

  let year = d.getFullYear();

  return day + ' / ' + month + ' / ' + year;
}

// custom selected box
