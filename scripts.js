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
        // CONTADOR DE VISITAS
        let visitas = localStorage.getItem('visitasCienciometrik');
        const visitasElement = document.getElementById('total-visitas');
    
        if (visitas) {
            visitas = parseInt(visitas) + 1;
        } else {
            visitas = 1;
        }
    
        localStorage.setItem('visitasCienciometrik', visitas);
        if (visitasElement) {
            visitasElement.textContent = visitas;
        }
    
        // Lógica para el botón de resetear visitas
        const resetButton = document.getElementById('reset-visitas');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                localStorage.removeItem('visitasCienciometrik');
                if (visitasElement) {
                    visitasElement.textContent = 0;
                }
            });
        }
    
        // --------------------- MEDICIÓN DEL TIEMPO DE CARGA ---------------------
        const tiempoCargaElement = document.getElementById('tiempo-carga');
        const tiempoInicio = performance.now(); // Marca el tiempo al inicio de la carga
    
        window.addEventListener('load', function() {
            const tiempoFin = performance.now(); // Marca el tiempo al final de la carga
            const tiempoTotal = (tiempoFin - tiempoInicio).toFixed(2); // Calcula la diferencia en milisegundos y lo formatea a 2 decimales
    
            if (tiempoCargaElement) {
                tiempoCargaElement.textContent = `${tiempoTotal} ms`; // Muestra el tiempo en milisegundos
            }
        });
    });