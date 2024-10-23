document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('mouseover', function() {
        navbar.style.display = 'block'; // Muestra el menú al pasar el ratón
    });

    menuIcon.addEventListener('mouseout', function() {
        navbar.style.display = 'none'; // Oculta el menú al salir
    });

    navbar.addEventListener('mouseover', function() {
        navbar.style.display = 'block'; // Mantiene el menú visible al pasar el ratón
    });

    navbar.addEventListener('mouseout', function() {
        navbar.style.display = 'none'; // Oculta el menú al salir
    });
});
