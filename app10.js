/* /* //Selecciona todos los elementos con la clase 'pepe'
const botones = document.querySelectorAll('.pepe');

//Asigna el controlador de eventos a cada botón-->
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    // Asumiendo que 'ventana' es un elemento que quieres mostrar
    // Asegúrate de tener una referencia correcta a este elemento
    ventana.showModal();
  });
});

//Este código asume que tienes un botón con un controlador para cerrar la ventana
// Asegúrate de que 'hide' sea un selector válido para el botón de cerrar-->
document.querySelector('#hide').addEventListener('click', () => {
  ventana.close();
});

*/
/*   // Selecciona todos los elementos con la clase 'pepe'
  const botones = document.querySelectorAll('.pepe');

  // Asigna el controlador de eventos a cada botón
  botones.forEach(boton => {
    boton.addEventListener('click', (event) => {
      // Accede al elemento que fue clickeado
      const elementoClickeado = event.target;
      
      // Recupera el valor del atributo 'data-info'
      const info = elementoClickeado.getAttribute('data-info');
      
      // Aquí puedes decidir qué ventana mostrar basado en el valor de 'data-info'
      // Por ejemplo, usando un switch o if/else para mostrar diferentes ventanas/modal
      console.log(info); // Muestra 'infoDiegui' o 'infoNegro' dependiendo del botón clickeado
      
      // Suponiendo que tengas diferentes modales para cada tipo de info
      // muestra el modal correspondiente
      if(info === 'infoDiegui') {
        // muestra el modal para Diegui
        window.pepe.addEventListener('click', () => {
            window.ventana.showModal()
          })

      } else if(info === 'infoNegro') {
        // muestra el modal para Negro
      }
    });
  }); 
 */


//Este enfoque te permite determinar de manera dinámica cuál botón fue presionado y actuar en consecuencia. El uso de atributos de datos (data-*) te proporciona una manera flexible de asociar datos específicos con elementos HTML, lo que es especialmente útil para manejar eventos y realizar acciones basadas en esos datos.



/* 
  window.pepe.addEventListener('click', () => {
    window.ventana.showModal()
  })

  window.hide.addEventListener('click', () => {
    window.ventana.close()
  })
 */


  // Selecciona todos los elementos con la clase 'pepe'
  const botones = document.querySelectorAll('.pepe');

  botones.forEach(boton => {
    boton.addEventListener('click', (event) => {
      const info = event.target.getAttribute('data-info');
      mostrarModal(info);
    });
  });

  function mostrarModal(info) {
    const idModal = `modal${info}`; // Construye el ID basado en la info
    const modal = document.getElementById(idModal);
    if (modal) {
      modal.style.display = "block";
    }
  }

  function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
      modal.style.display = "none";
    }
  }


