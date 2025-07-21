let elementDocument = document.getElementById('contador');
function actualizarContador() {
    var fechaFinal = new Date('2024-05-24T23:59:00');
    var fechaActual = new Date();
    var diff = fechaFinal - fechaActual;

    if (!elementDocument) return;

    if (diff <= 0) {
        elementDocument.innerHTML = '<div class="hoy">¡Hoy es su gran día!</div>';
    } else {
        var dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
        elementDocument.innerHTML = '<div class="time"><span class="date">' + dias + ' </span><span class="text">Días</span> </div>' +
                                                '<div class="time"><span class="date">' + horas + '</span> <span class="text">Horas</span></div>' +
                                                '<div class="time"><span class="date">' + minutos + '</span> <span class="text">Minutos</span>';
    }  
}

setInterval(actualizarContador, 1000);

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     },
//     breakpoints: {  
//         320: {       
//             slidesPerView: 1,
//             spaceBetween: 10     
//         },     
//         768: {       
//             slidesPerView: 2,
//             spaceBetween: 10     
//         }, 
//         1280: {       
//             slidesPerView: 3,       
//             spaceBetween: 30     
//         } 
//     }
// });

// Fancybox.bind("[data-fancybox]", {});

var miAudio = document.getElementById('audio');
var overlay = document.getElementById('overlay');

function startPlayback() {
    overlay.style.opacity = 0;
    setTimeout(function() {
        overlay.style.display = 'none';
        miAudio.style.display = 'none';
        miAudio.play();
    }, 500); 
}

function habilitarScroll() {
    document.body.classList.remove('scrollDeshabilitado');
}

window.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('scrollDeshabilitado');
    miAudio.style.display = 'none';
});
        