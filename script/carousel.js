let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("imagesSlides"); 
    const dots   = document.getElementsByClassName("dot");    
    if (!slides.length) return;

    if (n > slides.length)  { slideIndex = 1; }
    if (n < 1)              { slideIndex = slides.length; }

    // hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // deactivate all dots (if any)
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // show current slide
    slides[slideIndex - 1].style.display = "block";

    // activate current dot (if exists)
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
    }
}