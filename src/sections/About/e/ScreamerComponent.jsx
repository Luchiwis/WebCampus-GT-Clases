import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import screamerVideo from './assets/screamer.mp4'; 
import lucioImage from './assets/lucio.jpeg'; 
import './button.css'; 

const ScreamerComponent = () => {
  useEffect(() => {

    const element = document.querySelector('.screamer-target');

    if (element) {

      element.addEventListener('click', handleClick);
    }

    return () => {
      if (element) {
        element.removeEventListener('click', handleClick);
      }
    };
  }, []);

  const handleClick = () => {

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
        popup: 'my-popup-class',
      },
    }).then(() => {
   
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
