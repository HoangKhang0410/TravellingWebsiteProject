(function () {
    const header = document.querySelector('.header');

    header.innerHTML = `<div class="header-top">
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
<div class="logo">
    <img src="../../Public/Images/logo.png" alt="logo" />
</div>
<div class="category">
    <a href="">Home</a>
    <a href="">About Us</a>
    <a href="">Destinations</a>
    <a href="">Tour Package</a>
    <a href="">Blogs</a>
    <a href="">Pages</a>
    <a href="">Contact Us</a>
</div>
<div class="other">
    <ion-icon name="search" class="other-icon"></ion-icon>
    <ion-icon name="person-outline" class="other-icon"></ion-icon>
    <ion-icon name="menu-outline" class="other-icon"></ion-icon>
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
})();
