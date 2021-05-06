let slides = document.querySelectorAll('#forsl .sl');
let currentSlide = 0;
prewBtn = document.getElementById('prev');
nextBtn = document.getElementById('next');
goToSlide(currentSlide);
function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'sl';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'sl showing';
}
nextBtn.onclick = function() {
    nextSlide();
};
prewBtn.onclick = function() {
    previousSlide();
};