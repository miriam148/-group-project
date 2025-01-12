// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))




document.addEventListener('DOMContentLoaded', function () {
  const containerDetails = document.querySelector('.container-details');

  // Crear el div para los detalles (card-details)
  const cardDetails = document.createElement('div');
  cardDetails.classList.add('card-details');

  // Crear la sección de la parte superior (top-details)
  const topDetails = document.createElement('div');
  topDetails.classList.add('top-details');
  topDetails.id = 'top';

  // Crear el botón de cierre (exit-details)
  const exitButton = document.createElement('button');
  exitButton.classList.add('exit-details');
  exitButton.textContent = 'X';

  // Crear el título de la sección (title-details)
  const titleDetails = document.createElement('p');
  titleDetails.classList.add('title-details');
  titleDetails.textContent = 'MI PERFIL';

  // Agregar el botón y el título al topDetails
  topDetails.appendChild(exitButton);
  topDetails.appendChild(titleDetails);

  // Crear el formulario (formulario-details)
  const formularioDetails = document.createElement('form');
  formularioDetails.id = 'formulario-details';
  formularioDetails.classList.add('formulario-details');

  // Función para crear un campo de formulario (etiqueta + input)
  function createInputField(labelText, inputType, inputId) {
    const cardList = document.createElement('div');
    cardList.classList.add('card-list-details');

    const label = document.createElement('label');
    label.classList.add('sub_title');
    label.setAttribute('for', inputId);
    label.textContent = labelText;

    const input = document.createElement('input');
    input.classList.add('card-style-details');
    input.type = inputType;
    input.id = inputId;
    input.placeholder = '';

    cardList.appendChild(label);
    cardList.appendChild(input);

    return cardList;
  }

  // Crear los campos del formulario
  formularioDetails.appendChild(createInputField('Nombre', 'text', 'name'));
  formularioDetails.appendChild(createInputField('Apellidos', 'text', 'apellidos'));
  formularioDetails.appendChild(createInputField('E-mail', 'email', 'email'));
  formularioDetails.appendChild(createInputField('Dirección', 'password', 'street'));
  formularioDetails.appendChild(createInputField('Teléfono', 'tel', 'phone'));
  formularioDetails.appendChild(createInputField('Suscripción', 'text', 'subscription'));

  // Crear el contenedor de los botones (button-end-details)
  const buttonEndDetails = document.createElement('div');
  buttonEndDetails.classList.add('button-end-details');

  // Crear los botones
  const buttonActivo = document.createElement('button');
  buttonActivo.classList.add('button-details');
  buttonActivo.textContent = 'ACTIVO';

  const buttonGuardar = document.createElement('button');
  buttonGuardar.classList.add('button-details');
  buttonGuardar.textContent = 'GUARDAR';

  // Agregar los botones al contenedor
  buttonEndDetails.appendChild(buttonActivo);
  buttonEndDetails.appendChild(buttonGuardar);

  // Agregar los botones al formulario
  formularioDetails.appendChild(buttonEndDetails);

  // Agregar los elementos al div principal (card-details)
  cardDetails.appendChild(topDetails);
  cardDetails.appendChild(formularioDetails);

  // Finalmente, agregar el div con los detalles al contenedor principal
  containerDetails.appendChild(cardDetails);
});