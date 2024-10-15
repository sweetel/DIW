const logo = document.getElementById('logo');
const navbar = document.getElementById('navbar');

logo.addEventListener('mouseenter', () => {
    if (window.innerWidth <= 600) {
        navbar.style.display = 'block'; // Muestra el menú si la pantalla es pequeña
    }
});

navbar.addEventListener('mouseleave', () => {
    if (window.innerWidth <= 600) {
        navbar.style.display = 'none'; // Oculta el menú al salir del menú
    }
});
