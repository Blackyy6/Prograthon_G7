// (Puedes tener otro código de JQuery aquí)

// --- CÓDIGO NUEVO (Punto 5) ---
// Función para enviar mensajes a la región ARIA-LIVE

/**
 * Anuncia un mensaje a los lectores de pantalla usando la región aria-live.
 * @param {string} mensaje El texto a anunciar.
 * @param {string} tipo 'polite' (por defecto) o 'assertive' (para errores urgentes).
 */
function anunciarMensaje(mensaje, tipo = 'polite') {
    const region = $('#live-alert-region');

    // Asignar el tipo de anuncio
    region.attr('aria-live', tipo);

    // Usamos .text('') primero para forzar al lector
    // a leer el mensaje aunque sea idéntico al anterior.
    region.text('');

    // Un pequeño retraso asegura que el DOM se actualice
    // antes de que el lector de pantalla detecte el cambio.
    setTimeout(function () {
        region.text(mensaje);
    }, 100);
}


// --- FIN DEL CÓDIGO NUEVO ---