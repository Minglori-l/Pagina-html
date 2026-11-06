document.addEventListener('DOMContentLoaded', () => {
    const albumes = document.querySelectorAll('.album-card');
    const seccionDiscos = document.getElementById('Discos');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    const discoTitulo = document.getElementById('disco-titulo');
    const discoCancion = document.getElementById('disco-cancion');
    const discoDesc = document.getElementById('disco-desc');
    const audio = document.getElementById('reproductor-audio');
    const btnPlay = document.getElementById('btn-play');
    const progresoContenedor = document.getElementById('progreso-contenedor');
    const progresoBarra = document.getElementById('progreso-barra');

    // Empezamos en el álbum de Beauty in Death Deluxe (índice 3)
    let currentIndex = 3; 

    function actualizarCarrusel() {
        albumes.forEach((card, index) => {
            card.className = 'album-card';
            const offset = index - currentIndex;

            if (offset === 0) {
                card.classList.add('active');
                
                // 1. Cambia el fondo solo de la sección Discografía
                if (card.dataset.bg) {
                    seccionDiscos.style.background = card.dataset.bg;
                }

                // 2. Actualiza los textos del panel inferior
                discoTitulo.textContent = card.dataset.titulo;
                discoCancion.textContent = card.dataset.cancion;
                discoDesc.textContent = card.dataset.desc;

                // 3. Cambia la ruta del audio si cambió de disco
                const nuevoAudio = card.dataset.audio;
                if (!audio.src.endsWith(nuevoAudio)) {
                    audio.src = nuevoAudio;
                    btnPlay.textContent = '▶';
                }
            } else if (offset === -1) {
                card.classList.add('prev-1');
            } else if (offset === 1) {
                card.classList.add('next-1');
            } else if (offset === -2) {
                card.classList.add('prev-2');
            } else if (offset === 2) {
                card.classList.add('next-2');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    // Navegación con flechas
    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            actualizarCarrusel();
        }
    });

    btnNext.addEventListener('click', () => {
        if (currentIndex < albumes.length - 1) {
            currentIndex++;
            actualizarCarrusel();
        }
    });

    // Clic directo en cualquier álbum del carrusel
    albumes.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index;
            actualizarCarrusel();
        });
    });

    // Control de reproducción (Play / Pausa)
    btnPlay.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            btnPlay.textContent = '❚❚';
        } else {
            audio.pause();
            btnPlay.textContent = '▶';
        }
    });

    // Actualización de la barra de progreso
    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const porcentaje = (audio.currentTime / audio.duration) * 100;
            progresoBarra.style.width = `${porcentaje}%`;
        }
    });

    // Click en la barra de progreso para saltar en la canción
    progresoContenedor.addEventListener('click', (e) => {
        const width = progresoContenedor.clientWidth;
        const clickX = e.offsetX;
        if (audio.duration) {
            audio.currentTime = (clickX / width) * audio.duration;
        }
    });

    // Inicializar el carrusel al cargar la página
    actualizarCarrusel();
});