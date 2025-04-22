// MÉTRICAS: 
document.addEventListener('DOMContentLoaded', function() {
    const metricas = {
        total_articulos: 185,
        total_volumenes: 3,
        total_semilleros: 15
    };

    document.getElementById('total-articulos').textContent = metricas.total_articulos;
    document.getElementById('total-volumenes').textContent = metricas.total_volumenes;
    document.getElementById('total-semilleros').textContent = metricas.total_semilleros;
});

// ----------------------------------------------------------------------------------------------------

    // CONTADOR DE VISITAS
    
document.addEventListener('DOMContentLoaded', function() {

    let visitas = localStorage.getItem('visitasCienciometrik');

    if (visitas) {
        visitas = parseInt(visitas) + 1;
    } else {
        visitas = 1;
    }

    localStorage.setItem('visitasCienciometrik', visitas);
    const visitasElement = document.getElementById('total-visitas');
    if (visitasElement) {
        visitasElement.textContent = visitas;
    }

    // Lógica para el botón de reseteeo de las visitas:
    const resetButton = document.getElementById('reset-visitas');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            localStorage.removeItem('visitasCienciometrik');
            if (visitasElement) {
                visitasElement.textContent = 0; // O 'Cargando...' si quieres simular una nueva carga
            }
        });
    }
});
// ----------------------------------------------------------------------------------------