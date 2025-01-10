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

//   // elemento select
//   const selectElement = document.getElementById('subscription');

//   selectElement.addEventListener('change', function() {
//     if (this.value !== "") {
//       const firstOption = this.querySelector('option[value=""]');
//       firstOption.disabled = false;
//     } else {
//       const firstOption = this.querySelector('option[value=""]');
//       firstOption.disabled = true;
//     }
//   });

function createCard() {
  //creamos el contenedor padre
  const containerDetails = document.createElement("div");
  containerDetails.className = "container-details";

  //contenedor del title y exit
  const topDetails = document.createElement("div");
  topDetails.className = "top-details";

  //contenedor top
  const exitDetails = document.createElement("button");
  exitDetails.id = "exit-details";
  exitDetails.textContent = "X";
  // exitDetails.addEventListener("click", () => goBack());

  const titleDetails = document.createElement("p");
  titleDetails.className = "title-details";
  titleDetails.textContent = "MI PERFIL";

  topDetails.appendChild(exitDetails);
  topDetails.appendChild(titleDetails);
  cardDetails.appendChild(topDetails);
  containerDetails.appendChild(cardDetails);

  //contenedor formulario
  const formularioDetails = document.createElement("formulario");
  formularioDetails.id = "formulario";
  formularioDetails.classList.add("formulario");

  //label+input del formulario
  const cardStyle1Details = document.createElement("div");
  cardStyle1Details.classList.add("card-style");

  const nameDetails = document.createElement("label");
  nameDetails.textContent = "name";

  const placeHolder1Details = document.createElement("input");
  placeHolder1Details.type = "name";
  placeHolder1Details.placeholder = "Introduce tu nombre";
  //***********
  const cardStyle2Details = document.createElement("div");
  cardStyle2Details.classList.add("card-style");

  const apellidosDetails = document.createElement("label");
  apellidosDetails.textContent = "apellidos";

  const placeHolder2Details = document.createElement("input");
  placeHolder2Details.type = "apellidos";
  placeHolder2Details.placeholder = "Introduce tu apellido";
  //***********
  const cardStyle3Details = document.createElement("div");
  cardStyle3Details.classList.add("card-style");

  const emailDetails = document.createElement("label");
  emailDetails.textContent = "email";

  const placeHolder3Details = document.createElement("input");
  placeHolder3Details.type = "email";
  placeHolder3Details.placeholder = "Introduce tu e-mail";
  //***********
  const cardStyle4Details = document.createElement("div");
  cardStyle4Details.classList.add("card-style");

  const direccionDetails = document.createElement("label");
  direccionDetails.textContent = "name";

  const placeHolder4Details = document.createElement("input");
  placeHolder4Details.type = "direccion";
  placeHolder4Details.placeholder = "Introduce tu dirección";
  //***********

  const cardStyle5Details = document.createElement("div");
  cardStyle5Details.classList.add("card-style");

  const telDetails = document.createElement("label");
  telDetails.textContent = "tel";

  const placeHolder5Details = document.createElement("input");
  placeHolder5Details.type = "tel";
  placeHolder5Details.placeholder = "Introduce tu teléfono";
  //***********

  const cardStyle6Details = document.createElement("div");
  cardStyle6Details.classList.add("card-style");

  const subscriptionDetails = document.createElement("label");
  subscriptionDetails.textContent = "subscription";

  const placeHolder6Details = document.createElement("input");
  placeHolder6Details.type = "subscription";
  placeHolder6Details.placeholder = "tipo de suscripcion";

  //CONTENEDOR BOTONES FINAL
  const buttonEndDetails = document.createElement("div");
  buttonEndDetails.className = "buttonEnd";

  //BOTONES FINAL
  const activoDetails = document.createElement("button");
  activoDetails.id = "button";
  activoDetails.textContent = "ACTIVO";
  activoDetails.addEventListener("click", () => activoInact());

  const saveDetails = document.createElement("button");
  saveDetails.id = "button";
  saveDetails.textContent = "GUARDAR";
  saveDetails.addEventListener("click", () => save());

  // padre.appendChild(hijo)
  // top.appendChild(exit)
  // top.appendChild(title)
  // card.appendChild(top)
  // container.appendChild(card)
}
createCard()
