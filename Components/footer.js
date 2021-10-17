(function () {
    const footer = document.querySelector('.footer');
    console.log(footer);

    footer.innerHTML = ` <div class="footer-top">
<div class="title">
    <h1>Subscribe To Our Newsletter For Latest Update</h1>
</div>
<div class="form">
    <input type="email" placeholder="Enter your email" />
    <button>subscribe</button>
</div>
</div>
<div class="footer-main">
<div class="footer-main-top">
    <div class="column">
        <img src="../../Public/Images/logo-2.png" alt="logo" class="column-top" />
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid maxime aut ut voluptate
            dolorum nisi ducimus ratione
        </p>
        <h3>Follow Us</h3>
        <div class="social">
            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
            <a href="#"><ion-icon name="basketball-outline"></ion-icon></a>
        </div>
    </div>
    <div class="column">
        <h2 class="column-top">Contact Us</h2>
        <div class="info">
            <ion-icon class="icon" name="call-outline"></ion-icon>
            <div class="detail">
                <p>
                    +01852-1265122 <br />
                    +01852-1265122
                </p>
            </div>
        </div>
        <div class="info">
            <ion-icon class="icon" name="mail-outline"></ion-icon>
            <div class="detail">
                <p>
                    info@example.com <br />
                    support@example.com
                </p>
            </div>
        </div>
        <div class="info">
            <ion-icon class="icon" name="location-outline"></ion-icon>
            <div class="detail">
                <p>
                    2752 Willison Street <br />
                    Eagan, United State
                </p>
            </div>
        </div>
    </div>
    <div class="column">
        <h2 class="column-top">Support</h2>
        <h4>Contact Us</h4>
        <h4>About Us</h4>
        <h4>Services</h4>
        <h4>Our Blogs</h4>
        <h4>Terms And Conditions</h4>
    </div>
    <div class="column">
        <h2 class="column-top">We Accept:</h2>
        <div class="payment">
            <div class="payment-img">
                <img src="../../Public/Images/payment-card-2.png" alt="card image" />
            </div>
            <div class="payment-img">
                <img src="../../Public/Images/payment-card-1.png" alt="card image" />
            </div>
            <div class="payment-img">
                <img src="../../Public/Images/payment-card-3.png" alt="card image" />
            </div>
            <div class="payment-img">
                <img src="../../Public/Images/payment-card-4.png" alt="card image" />
            </div>
            <div class="payment-img">
                <img src="../../Public/Images/payment-card-5.png" alt="card image" />
            </div>
        </div>
    </div>
</div>
<div class="footer-main-bottom">
    <p>Copyright 2021 <span>TourX</span> | Design By <span>Egens Lab</span></p>
</div>
</div>`;
})();
