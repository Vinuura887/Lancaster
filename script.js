document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 3000; // Intervalo de troca de slide (em milissegundos)

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Inicializa o slideshow
    slides[currentSlide].classList.add('active');

    // Troca automática de slide
    setInterval(nextSlide, slideInterval);
});
