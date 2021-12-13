$(".guide-slider").owlCarousel({
    loop: true,
    autoplay: false,
    margin: 20,
    width: 300,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 2500,
    nav: true,
    navText: ['<ion-icon class="nav-icon prev-icon" name="chevron-back-outline"></ion-icon>','<ion-icon class="nav-icon next-icon" name="chevron-forward-outline"></ion-icon>']
});
$(".review-slider").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
});