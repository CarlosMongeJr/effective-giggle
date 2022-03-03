$(document).ready(function(){
    $(window).scroll(function(){
        // Sticky Navbar on scroll
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }

        // Scroll-up Btn show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});

        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){

        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle Menu/Navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation
    var typed = new Typed('.typing', {
        strings: ['Coder', 'Programmer', 'Developer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});