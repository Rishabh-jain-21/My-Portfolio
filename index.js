// navbar scroll change effect
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.navbar-item').click(function () {
        $('.navbar .menu').toggleClass("active");
    });
    //typing animation
    var type = new Typed(".typing", {
        strings: ["Developer", "Coder", "Blogger", "Designer", "Web-Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});