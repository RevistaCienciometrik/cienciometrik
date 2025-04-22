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