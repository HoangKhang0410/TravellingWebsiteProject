const packageDetails = document.querySelector('.package-details');


const packageSelected = JSON.parse(localStorage.getItem('packageSelected'));

packageDetails.innerHTML = `
<div class="package-thumb-1">
    <img src=${packageSelected.image} alt="">
</div>
<div class="package-header">
    <div class="package-title">
        <h3>${packageSelected.name}</h3>
        <strong>
            <ion-icon name="cash-outline" style="margin-right: 5px"></ion-icon>
            $${packageSelected.price} / Per Person
        </strong>
    </div>
    <div class="pd-review">
        <p>Excellent</p>
        <ul>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star-half-outline"></ion-icon></li>
        </ul>
        <p>800 Review</p>
    </div>
</div>
<div class="p-short-info">
    <div class="single-info">
        <ion-icon name="timer-outline"></ion-icon>
        <div class="info-texts">
            <strong>Duration</strong>
            <p>Daily Tour</p>
        </div>
    </div>
    <div class="single-info">
        <ion-icon name="footsteps-outline"></ion-icon>
        <div class="info-texts">
            <strong>Tour Type</strong>
            <p>4 Days</p>
        </div>
    </div>
    <div class="single-info">
        <ion-icon name="people-outline"></ion-icon>
        <div class="info-texts">
            <strong>Group Size</strong>
            <p>30 People</p>
        </div>
    </div>
    <div class="single-info">
        <ion-icon name="language-outline"></ion-icon>
        <div class="info-texts">
            <strong>Languages</strong>
            <p>Any Language</p>
        </div>
    </div>
</div>
<div class="package-tab">
    <ul class="nav">
        <li class="nav-item" id="1">
            <button class="nav-link active">
                <ion-icon name="information-circle-outline"></ion-icon>
                Infomation
            </button>
        </li>
        <li class="nav-item" id="2">
            <button class="nav-link">
                <ion-icon name="clipboard-outline"></ion-icon>
                Travel Plan
            </button>
        </li>
        <li class="nav-item" id="3">
            <button class="nav-link">
                <ion-icon name="images-outline"></ion-icon>
                Our Gallary
            </button>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane show" id="1">
            <div class="tab-content-1">
                <div class="p-overview">
                    <h5>Overview</h5>
                    <p>
                        Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus. In non enim libero.Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                    </p>
                </div>
                <div class="p-highlight">
                    <h5>Highlight</h5>
                    <ul>
                        <li>
                            <ion-icon name="ellipse-outline"></ion-icon>
                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
                        </li>
                        <li>
                            <ion-icon name="ellipse-outline"></ion-icon>
                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
                        </li>
                        <li>
                            <ion-icon name="ellipse-outline"></ion-icon>
                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
                        </li>
                        <li>
                            <ion-icon name="ellipse-outline"></ion-icon>
                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
                        </li>
                        <li>
                            <ion-icon name="ellipse-outline"></ion-icon>
                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
                        </li>
                        <li>
                            <ion-icon name="ellipse-outline"></ion-icon>
                            <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie.</p>
                        </li>
                    </ul>
                </div>
                <div class="p-details-table">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Destination</td>
                                <td>New York City</td>
                            </tr>
                            <tr>
                                <td>Depature</td>
                                <td>Yes Required</td>
                            </tr>
                            <tr>
                                <td>Depature Time</td>
                                <td>01 April, 2021 10.00AM</td>
                            </tr>
                            <tr>
                                <td>Return Time</td>
                                <td>08 April, 2021 10.00AM</td>
                            </tr>
                            <tr>
                                <td>Included</td>
                                <td>
                                    <ul class="table-list-allow">
                                        <li>
                                            <ion-icon name="checkmark-outline"></ion-icon>
                                            Specilaized Bilingual Guide
                                        </li>
                                        <li>
                                            <ion-icon name="checkmark-outline"></ion-icon>
                                            Private Transport
                                        </li>
                                        <li>
                                            <ion-icon name="checkmark-outline"></ion-icon>
                                            Entrance Fees
                                        </li>
                                        <li>
                                            <ion-icon name="checkmark-outline"></ion-icon>
                                            Box Lunch,Water,Dinner and Snacks
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Excluded</td>
                                <td>
                                    <ul class="table-list-allow">
                                        <li>
                                            <ion-icon name="close-outline"></ion-icon>
                                            Additional Services
                                        </li>
                                        <li>
                                            <ion-icon name="close-outline"></ion-icon>
                                            Insurance
                                        </li>
                                        <li>
                                            <ion-icon name="close-outline"></ion-icon>
                                            Drink
                                        </li>
                                        <li>
                                            <ion-icon name="close-outline"></ion-icon>
                                            Tickets
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="table-bottom">
                                    <ion-icon name="bus-outline"></ion-icon>
                                    Travel With Bus
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-rating">
                    <h5>Rating</h5>
                    <div class="rating-card">
                        <div class="r-card-avarage">
                            <h2>4.9</h2>
                            <h5>Excellent</h5>
                        </div>
                        <div class="r-card-info">
                            <ul>
                                <li>
                                    <strong>Accommodation</strong>
                                    <ul class="r-rating">
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Transport</strong>
                                    <ul class="r-rating">
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star-outline"></ion-icon></li>
                                        <li><ion-icon name="star-outline"></ion-icon></li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Comfort</strong>
                                    <ul class="r-rating">
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star-outline"></ion-icon></li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Hospitality</strong>
                                    <ul class="r-rating">
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star-outline"></ion-icon></li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Food</strong>
                                    <ul class="r-rating">
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star-outline"></ion-icon></li>
                                        <li><ion-icon name="star-outline"></ion-icon></li>
                                        <li><ion-icon name="star-outline"></ion-icon></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="p-review">
                    <ul>
                        <li class="p-review-card">
                            <div class="review-info">
                                <div class="reviewer-img">
                                    <img src="../../Public/Images/pr-1.png" alt="">
                                </div>
                                <div class="reviewer-info">
                                    <strong>Bertram Bil</strong>
                                    <p>2 April, 2021 10.00PM</p>
                                    <ul class="review-star">
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="review-texts">
                                <p>Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed lacinia ipsum. Suspendisse massa augue lorem faucibus acUt sed lacinia ipsum. Suspendisse</p>
                            </div>
                            <a href="#" class="reply-btn">
                                <ion-icon name="return-up-back-outline"></ion-icon>
                                Reply
                            </a>
                        </li>
                        <li class="p-review-card">
                            <div class="review-info">
                                <div class="reviewer-img">
                                    <img src="../../Public/Images/pr-1.png" alt="">
                                </div>
                                <div class="reviewer-info">
                                    <strong>Bertram Bil</strong>
                                    <p>2 April, 2021 10.00PM</p>
                                    <ul class="review-star">
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="review-texts">
                                <p>Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed lacinia ipsum. Suspendisse massa augue lorem faucibus acUt sed lacinia ipsum. Suspendisse</p>
                            </div>
                            <a href="#" class="reply-btn">
                                <ion-icon name="return-up-back-outline"></ion-icon>
                                Reply
                            </a>
                        </li>
                        <li class="p-review-card">
                            <div class="review-info">
                                <div class="reviewer-img">
                                    <img src="../../Public/Images/pr-1.png" alt="">
                                </div>
                                <div class="reviewer-info">
                                    <strong>Bertram Bil</strong>
                                    <p>2 April, 2021 10.00PM</p>
                                    <ul class="review-star">
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                        <li><ion-icon name="star"></ion-icon></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="review-texts">
                                <p>Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed lacinia ipsum. Suspendisse massa augue lorem faucibus acUt sed lacinia ipsum. Suspendisse</p>
                            </div>
                            <a href="#" class="reply-btn">
                                <ion-icon name="return-up-back-outline"></ion-icon>
                                Reply
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="p-review-input">
                    <form>
                        <h5>Leave Your Comment</h5>
                        <div class="row">
                            <div class="lg-6">
                                <input type="text" placeholder="Your Full Name">
                            </div>
                            <div class="lg-6">
                                <input type="text" placeholder="Your Email">
                            </div>
                            <div class="lg-12">
                                <input type="text" placeholder="Your Type">
                            </div>
                            <div class="lg-12">
                                <textarea cols="30" rows="7" placeholder="Write Message"></textarea>
                            </div>
                            <div class="lg-12">
                                <ul class="input-rating">
                                    <li><ion-icon name="star-outline"></ion-icon></li>
                                    <li><ion-icon name="star-outline"></ion-icon></li>
                                    <li><ion-icon name="star-outline"></ion-icon></li>
                                    <li><ion-icon name="star-outline"></ion-icon></li>
                                    <li><ion-icon name="star-outline"></ion-icon></li>
                                </ul>
                                <input type="submit" value="Submit Now">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="tab-pane" id="2">
            <div class="tab-content-2">
                <div class="p-timeline-overview">
                    <h5>Overview</h5>
                    <p>
                        Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus.
                    </p>
                </div>
                <ul class="p-timeline">
                    <li>
                        <div class="timeline-index">
                            <div class="index-circle">
                                <h5>01</h5>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5>DAY 1 : Departure And Small Tour</h5>
                            <strong>10.00 AM to 10.00 PM</strong>
                            <p>
                                Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.
                            </p>
                            <ul>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Specilaized Bilingual Guide
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Private Transport
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Entrance Fees
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Box Lunch,Water,Dinner and Snacks
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-index">
                            <div class="index-circle">
                                <h5>02</h5>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5>DAY 2 : Departure And Small Tour</h5>
                            <strong>10.00 AM to 10.00 PM</strong>
                            <p>
                                Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.
                            </p>
                            <ul>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Specilaized Bilingual Guide
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Private Transport
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Entrance Fees
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Box Lunch,Water,Dinner and Snacks
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-index">
                            <div class="index-circle">
                                <h5>03</h5>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5>DAY 3 : Departure And Small Tour</h5>
                            <strong>10.00 AM to 10.00 PM</strong>
                            <p>
                                Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.
                            </p>
                            <ul>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Specilaized Bilingual Guide
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Private Transport
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Entrance Fees
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Box Lunch,Water,Dinner and Snacks
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-index">
                            <div class="index-circle">
                                <h5>04</h5>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5>DAY 4 : Departure And Small Tour</h5>
                            <strong>10.00 AM to 10.00 PM</strong>
                            <p>
                                Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.
                            </p>
                            <ul>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Specilaized Bilingual Guide
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Private Transport
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Entrance Fees
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Box Lunch,Water,Dinner and Snacks
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-index">
                            <div class="index-circle">
                                <h5>05</h5>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5>DAY 5 : Departure And Small Tour</h5>
                            <strong>10.00 AM to 10.00 PM</strong>
                            <p>
                                Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla.
                            </p>
                            <ul>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Specilaized Bilingual Guide
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Private Transport
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Entrance Fees
                                </li>
                                <li>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                    Box Lunch,Water,Dinner and Snacks
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="tab-pane" id="3">
            <div class="tab-content-3">
                <div class="left-panel"></div>
                <div class="right-panel"></div>
                <div class="picture-slide">
                    <div class="overlay"></div>
                    <div class="slide">
                        <ion-icon name="caret-back" class="slide-icon prev"></ion-icon>
                        <div class="item-show">
                            <ion-icon name="close" class="icon-close"></ion-icon>
                            <img src="" alt="" id="image-show" />
                            <span>hello hello hello hello</span>
                        </div>
                        <ion-icon name="caret-forward" class="slide-icon next"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;


// galary page
import { galleryImage } from '../../Public/data.js';
const leftPanel = document.querySelector('.tab-content-3 .left-panel');
const rightPanel = document.querySelector('.tab-content-3 .right-panel');
const htmlWrapper = document.querySelector('html');

window.addEventListener('DOMContentLoaded', () => {
    renderContent(leftPanel);
    renderContent(rightPanel);
    handleImageClick();
    const navLinks = document.querySelectorAll('.nav-link');
const tabPanes = document.querySelectorAll('.tab-pane');
navLinks.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        showTabs(index);
    });
});
function showTabs(id) {
    navLinks.forEach((navItem) => {
        navItem.classList.remove('active');
    });
    tabPanes.forEach((tabPane) => {
        tabPane.classList.remove('show');
    });

    navLinks[id].classList.add('active');
    tabPanes[id].classList.add('show');
}
});

const renderContent = (container) => {
    let html = '';
    if (container == leftPanel) {
        for (let i = 0; i < galleryImage.length / 2; i += 3) {
            html += `
            <div class="gallery-grid">
                <img src="${galleryImage[i]}" alt="${galleryImage[i]}" />
                <img src="${galleryImage[i + 1]}" alt="${galleryImage[i + 2]}" />
                <img src="${galleryImage[i + 2]}" alt="${galleryImage[i + 3]}" />
            </div>
            `;
        }
    }
    if (container == rightPanel) {
        for (let i = galleryImage.length / 2; i < galleryImage.length; i += 3) {
            html += `
            <div class="gallery-grid">
                <img src="${galleryImage[i]}" alt="${galleryImage[i]}" />
                <img src="${galleryImage[i + 1]}" alt="${galleryImage[i + 2]}" />
                <img src="${galleryImage[i + 2]}" alt="${galleryImage[i + 3]}" />
            </div>
            `;
        }
    }
    container.innerHTML = html;
};

const handleImageClick = () => {
    const images = document.querySelectorAll('.tab-content-3 .gallery-grid img');
    const pictureSlide = document.querySelector('.tab-content-3 .picture-slide');
    const closeButton = pictureSlide.querySelector('.slide .item-show .icon-close');
    const nextButton = pictureSlide.querySelector('.slide .slide-icon.next');
    const prevButton = pictureSlide.querySelector('.slide .slide-icon.prev');
    const imageShow = pictureSlide.querySelector('.slide .item-show #image-show');
    const imageText = pictureSlide.querySelector('.slide .item-show span');

    images.forEach((image, index) => {
        image.onclick = () => {
            const src = image.getAttribute('src');
            imageShow.src = src;
            imageText.textContent = `${index + 1} of ${images.length}`;
            pictureSlide.classList.add('show');
            htmlWrapper.style.overflow = 'hidden';
        };
    });

    closeButton.onclick = () => {
        pictureSlide.classList.remove('show');
        htmlWrapper.style.overflow = 'auto';
    };

    nextButton.onclick = () => {
        const currentSrc = imageShow.getAttribute('src');
        const indexSrc = galleryImage.indexOf(currentSrc);
        let newIndex = indexSrc + 1;
        if (newIndex >= galleryImage.length) {
            newIndex = 0;
        }
        imageShow.src = galleryImage[newIndex];
        imageText.textContent = `${newIndex + 1} of ${galleryImage.length}`;
    };
    prevButton.onclick = () => {
        const currentSrc = imageShow.getAttribute('src');
        const indexSrc = galleryImage.indexOf(currentSrc);
        let newIndex = indexSrc - 1;
        if (newIndex < 0) {
            newIndex = galleryImage.length - 1;
        }
        imageShow.src = galleryImage[newIndex];
        imageText.textContent = `${newIndex + 1} of ${galleryImage.length}`;
    };
    imageShow.onclick = () => {
        const currentSrc = imageShow.getAttribute('src');
        const indexSrc = galleryImage.indexOf(currentSrc);
        let newIndex = null;
        if (newIndex !== indexSrc) {
            newIndex = Math.floor(Math.random() * galleryImage.length + 1) - 1;
        }
        imageShow.src = galleryImage[newIndex];
        imageText.textContent = `${newIndex + 1} of ${galleryImage.length}`;
    };
};

// const cartBtn = document.querySelector(".cart-btn");
// const closeCartBtn = document.querySelector(".close-cart");
// const cartDOM = document.querySelector(".cart");
// const cartOverlay = document.querySelector(".cart-overlay");

// cartBtn.addEventListener('click', () => {
//   showCart();
// })
// closeCartBtn.addEventListener('click', () => {
//   hideCart();
// })
// function showCart() {
//   cartOverlay.classList.add("transparentBcg");
//     cartDOM.classList.add("showCart");
// }
// function hideCart() {
//   cartOverlay.classList.remove("transparentBcg");
//     cartDOM.classList.remove("showCart");
// }
