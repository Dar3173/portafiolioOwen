
// Carrusel
const carousels = document.querySelectorAll('.contenedor-carousel');

carousels.forEach(carousel => {
    const leftArrow = carousel.closest('.contenedor-principal').querySelector('.flecha-izquierda');
    const rightArrow = carousel.closest('.contenedor-principal').querySelector('.flecha-derecha');

    leftArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
});



// ? ----- ----- video modal ----- -----

document.addEventListener('DOMContentLoaded', () => {
    const peliculas = document.querySelectorAll('.pelicula a');
    const videoModal = document.getElementById('video-modal');
    const videoIframe = document.getElementById('video-iframe');
    const closeVideoButton = document.getElementById('close-video');

    peliculas.forEach(pelicula => {
        pelicula.addEventListener('click', (e) => {
            e.preventDefault();
            const videoUrl = pelicula.getAttribute('data-video');
            videoIframe.src = videoUrl;
            videoModal.classList.remove('hidden');
        });
    });

    closeVideoButton.addEventListener('click', () => {
        videoModal.classList.add('hidden');
        videoIframe.src = ""; // Detener el video al cerrar el modal
    });
});
