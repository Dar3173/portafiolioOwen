document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.imagen');
    const modal = document.getElementById('modal');
    const imagenAmpliada = document.getElementById('imagen-ampliada');
    const cerrar = document.getElementById('cerrar');
    let indiceActual = 0;

    function mostrarModal(indice) {
        modal.style.display = 'flex';
        imagenAmpliada.src = imagenes[indice].src;
        indiceActual = indice;
    }

    imagenes.forEach(function (imagen, indice) {
        imagen.addEventListener('click', function () {
            mostrarModal(indice);
        });
    });

    cerrar.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    function cambiarImagen(direccion) {
        indiceActual += direccion;

        if (indiceActual < 0) {
            indiceActual = imagenes.length - 1;
        } else if (indiceActual >= imagenes.length) {
            indiceActual = 0;
        }

        imagenAmpliada.src = imagenes[indiceActual].src;
    }

    document.addEventListener('keydown', function (e) {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                cambiarImagen(-1);
            } else if (e.key === 'ArrowRight') {
                cambiarImagen(1);
            }
        }
    });

    document.getElementById('anterior').addEventListener('click', function () {
        cambiarImagen(-1);
    });

    document.getElementById('siguiente').addEventListener('click', function () {
        cambiarImagen(1);
    });
});
