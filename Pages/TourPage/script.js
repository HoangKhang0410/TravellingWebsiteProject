import { tours } from '../../Public/data.js';

const bodyMiddle = document.querySelector('.body .body-middle');

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
            <ion-icon name="location-outline"></ion-icon>
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
