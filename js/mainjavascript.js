var slideIndex = 0;
setTimeout(showSlides, 1000); // Start slideshow after 2 seconds

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex < 1) {slideIndex = slides.length}
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function currentSlide(n) {
    slideIndex = n;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
    var toolsBtn = document.querySelector('.tools-btn');
    var toolsMenu = document.querySelector('.tools-menu');

    toolsBtn.addEventListener('click', function() {
        var isShown = toolsMenu.style.display === 'block';
        toolsMenu.style.display = isShown ? 'none' : 'block';
    });
});

function updatePlaceholder() {
    var checkBox = document.getElementById("mtech");
    var emailField = document.getElementById("email");
    if (checkBox.checked) {
        emailField.placeholder = "example@mtu.edu";
    } else {
        emailField.placeholder = "example@example.com";
    }
}