document.getElementById('toggleNightMode').addEventListener('click', function() {
    // Obtener el cuerpo de la página
    let body = document.body;
    
    // Cambiar el tema
    if (body.classList.contains('bg-dark')) {
      // Si está en modo oscuro, cambiar a modo claro
      body.classList.remove('bg-dark', 'text-light');
      body.classList.add('bg-light', 'text-dark');
      
      // Cambiar el icono a modo claro
      let modeIcon = document.getElementById('modeIcon');
      modeIcon.setAttribute('class', 'bi bi-emoji-angry-fill');
      
      // Cambiar el texto del botón a "Modo Noche"
      document.getElementById('toggleNightMode').innerText = 'Modo Noche';
    } else {
      // Si está en modo claro, cambiar a modo oscuro
      body.classList.remove('bg-light', 'text-dark');
      body.classList.add('bg-dark', 'text-light');
      
      // Cambiar el icono a modo oscuro
      let modeIcon = document.getElementById('modeIcon');
      modeIcon.setAttribute('class', 'bi bi-emoji-laughing');
      
      // Cambiar el texto del botón a "Modo Día"
      document.getElementById('toggleNightMode').innerText = 'Modo Día';
    }
  });
