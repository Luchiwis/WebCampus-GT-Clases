import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import screamerVideo from './assets/screamer.mp4'; // Asegúrate de que la ruta sea correcta
import lucioImage from './assets/lucio.jpeg'; // Importa la imagen
import './button.css'; // Importa tu archivo CSS

const ScreamerComponent = () => {
  useEffect(() => {
    // Seleccionamos el elemento con la clase 'screamer-target'
    const element = document.querySelector('.screamer-target');

    if (element) {
      // Añadimos un evento de click al elemento
      element.addEventListener('click', handleClick);
    }

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      if (element) {
        element.removeEventListener('click', handleClick);
      }
    };
  }, []);

  const handleClick = () => {
    // Mostrar una alerta antes del screamer con una imagen centrada
    Swal.fire({
      title: '¡No hay ningún screamer! :)',
      text: 'Confía en mí, no hay nada.',
      html: `
        <div class="image-container">
          <img src="${lucioImage}" alt="Lucio" class="centered-image"/>
        </div>
      `,
      icon: 'warning',
      confirmButtonText: 'Cerrar',
      customClass: {
        popup: 'my-popup-class', // Clase personalizada para el contenedor
      },
    }).then(() => {
      // Mostrar el screamer con el video local
      Swal.fire({
        title: '¡Screamer!',
        html: `<video src="${screamerVideo}" autoplay style="width: 100%;"></video>`,
        showConfirmButton: false,
        allowOutsideClick: false,
      });
    });
  };

  return (
    <div>
      <h1>Haz clic en el siguiente botón para una sorpresa:</h1>
      <button className="screamer-target">¡Haz clic aquí!</button>
    </div>
  );
};

export default ScreamerComponent;
