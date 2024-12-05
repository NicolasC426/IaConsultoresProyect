// Seleccionamos el contenedor del carrusel y el contenedor de las imágenes
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

// Duplicar las imágenes y añadirlas al final del carrusel
const clonedItems = Array.from(items).map(item => item.cloneNode(true));
clonedItems.forEach(item => carousel.appendChild(item));

// Variable para el desplazamiento de las imágenes
let offset = 0;

// Número de imágenes que se muestran en una fila
const visibleItems = 5;

// Función para mover el carrusel hacia la izquierda
function moveCarousel() {
    offset++;
    if (offset >= items.length) {
        offset = 0; // Al llegar al final, volver al principio
    }
    updateCarouselPosition();
}

// Función para actualizar la posición del carrusel
function updateCarouselPosition() {
    carousel.style.transform = `translateX(-${offset * 220}px)`; // 220px es el tamaño de cada item + márgenes
}

// Mover el carrusel cada 3 segundos (ajusta la velocidad a tu preferencia)
setInterval(moveCarousel, 3000);

// Iniciar el carrusel con la posición correcta
updateCarouselPosition();z