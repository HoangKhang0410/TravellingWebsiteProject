(function () {
    const header = document.querySelector('.header');

    header.innerHTML = `<div class="header-top">
<div id="preloader">
    <img src="../../Public/Images/preloader.png" alt="preloader" class="preloader-icon">
</div>
<div class="phone">
    <ion-icon name="call"></ion-icon>
    <span>+1 763-227-5032</span>
</div>
<div class="email">
    <ion-icon name="mail"></ion-icon>
    <span>info@example.com</span>
</div>
<div class="social">
    <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
    <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
    <a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
</div>
</div>
<div class="header-middle">
<div class="header-middle-navbar">
    <div class="logo">
        <img src="../../Public/Images/logo.png" alt="logo" />
    </div>
    <div class="category">
        <a href="../HomePage/index.html">Home</a>
        <a href="">About Us</a>
        <a href="">Destinations</a>
        <a href="../TourPage/index.html">Tour Package</a>
        <a href="../BlogPage/index.html">Blogs</a>
        <a href="../GalleryPage/index.html">Gallery Pages</a>
        <a href="../ContactPage/index.html">Contact Us</a>
    </div>
    <div class="other">
        <ion-icon name="search" class="other-icon"></ion-icon>
        <ion-icon name="person-outline" class="other-icon"></ion-icon>
        <ion-icon name="menu-outline" class="other-icon"></ion-icon>
    </div>
</div>
<div class="dropdown-box">
    <div class="dropdown-box-item">
        <ion-icon name="log-in" class="dropdown-box-icon"></ion-icon>
        <p>Sign in</p>
    </div>
    <div class="dropdown-box-item">
        <ion-icon name="person-circle" class="dropdown-box-icon"></ion-icon>
        <p>My Account</p>
    </div>
    <div class="dropdown-box-item">
        <ion-icon name="settings" class="dropdown-box-icon"></ion-icon>
        <p>Setting</p>
    </div>
    <div class="dropdown-box-item">
        <ion-icon name="log-out" class="dropdown-box-icon"></ion-icon>
        <p>Log Out</p>
    </div>
</div>
</div>
<div class="header-bottom">
<div class="title-panel">
    <h2 class="title">${
        header.classList.contains('tour')
            ? 'Tour Package'
            : header.classList.contains('about')
            ? 'About Us'
            : header.classList.contains('destination')
            ? 'Destinations'
            : header.classList.contains('blog')
            ? 'Blogs'
            : header.classList.contains('page')
            ? 'Pages'
            : header.classList.contains('contact')
            ? 'Contact Us'
            : 'Others'
    }</h2>
    <h4 class="subtitle">Home <span>> ${
        header.classList.contains('tour')
            ? 'Tour Package'
            : header.classList.contains('about')
            ? 'About Us'
            : header.classList.contains('destination')
            ? 'Destinations'
            : header.classList.contains('blog')
            ? 'Blogs'
            : header.classList.contains('page')
            ? 'Pages'
            : header.classList.contains('contact')
            ? 'Contact Us'
            : 'Others'
    }</span></h4>
</div>
<div class="overlay"></div>
</div>`;

    const dropdownBox = document.querySelector('.dropdown-box');
    const personIcon = document.querySelector('.other .other-icon:nth-child(2)');
    personIcon.onclick = () => {
        dropdownBox.classList.toggle('show');
    };
    const headerMiddle = header.querySelector('.header-middle');
    window.onscroll = () => {
        if (window.scrollY !== 0) {
            headerMiddle.classList.add('sticky');
        } else {
            headerMiddle.classList.remove('sticky');
        }
    };
})();

(function () {
    const preloader = document.querySelector('#preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 2500);
})();
