$(document).ready(function () {
    let puntos = 0;
    let tiempo = 30;

    // Temporizador
    let temporizador = setInterval(() => {
        tiempo--;
        $("#tiempo").text(tiempo);
        if (tiempo <= 0) {
            clearInterval(temporizador);
            clearInterval(intervaloTopo);
            alert("Juego terminado. Puntos: " + puntos);
        }
    }, 1000);

    // Mostrar topo en agujeros aleatorios
    function mostrarTopo() {
        $(".agujero").empty(); 
        let agujeroAleatorio = Math.floor(Math.random() * 3) + 1;
        $("#agujero" + agujeroAleatorio).append('<div class="topo"></div>');
    }

    let intervaloTopo = setInterval(mostrarTopo, 800);

    // Dar click en el topo
    $(document).on("click", ".topo", function () {
        puntos++;
        $("#puntos").text(puntos);
    });
});