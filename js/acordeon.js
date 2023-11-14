document.addEventListener('DOMContentLoaded', function() {
    const titulos = document.querySelectorAll('.titulo');
  
    // Ocultar todos los contenidos excepto el del primer acordeón
    const contenidos = document.querySelectorAll('.contenido');
    contenidos.forEach((contenido, index) => {
      if (index !== 0) {
        contenido.style.display = 'none';
      }
    });
  
    titulos.forEach((titulo, index) => {
      titulo.addEventListener('click', function() {
        const item = this.closest('.item');
  
        // Ocultar todos los contenidos
        contenidos.forEach(contenido => {
          contenido.style.display = 'none';
        });
  
        // Mostrar u ocultar el contenido del acordeón clicado
        item.querySelector('.contenido').style.display = 
          item.querySelector('.contenido').style.display === 'none' ? 'block' : 'none';
      });
    });
  });
  