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

    // Owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Form Submission message

    let nameInput = document.querySelector("#fname");
    let emailInput = document.querySelector("#femail");
    let submitEl = document.querySelector("#sendmessage");
    let submissionResponseEl = document.querySelector("#response");

    // Action to be performed on click store in named function
    function showResponse(event) {
        // Prevent default action
        event.preventDefault();
        console.log(event);
        let response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
        submissionResponseEl.textContent = response;
    }

    // Add listener to submit element
    submitEl.addEventListener("click", showResponse);

});