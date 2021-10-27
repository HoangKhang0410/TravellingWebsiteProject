import { blogs } from '../../Public/data.js';
const blogList = document.querySelector('.body .blog-list');

const html = blogs.map((blog) => {
    return `<div class="blog-item">
    <div class="blog-item-top">
        <img src=${blog.image} alt="b-1.png" />
    </div>
    <div class="blog-item-main">
        <div class="blog-item-main-top">
            <p>
                <ion-icon name="person-outline"></ion-icon>
                <span>${blog.author}</span>
            </p>
            <p>
                <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                <span>(${blog.comment})Comment</span>
            </p>
        </div>
        <div class="blog-item-main-middle">
            <p>${blog.title}</p>
        </div>
        <div class="blog-item-main-bottom">
            <button>Read More</button>
        </div>
    </div>
    <div class="blog-item-schedule">
        <ion-icon name="calendar-outline"></ion-icon>
        <span>1 April, 2021</span>
    </div>
</div>`;
});

blogList.innerHTML = html.join('');
