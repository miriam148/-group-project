document.addEventListener("DOMContentLoaded", function () {
  const containerDetails = document.querySelector(".container-details");

  const cardDetails = document.createElement("div");
  cardDetails.classList.add("card-details");

  const topDetails = document.createElement("div");
  topDetails.classList.add("top-details");
  topDetails.id = "top";

  const exitButton = document.createElement("button");
  exitButton.classList.add("exit-details");
  exitButton.textContent = "X";

  exitButton.addEventListener("click", () => {
    containerAp6.style.display = "block";
    containerDetails.style.display = "none";
    addElementAp6();
  });


  const titleDetails = document.createElement("p");
  titleDetails.classList.add("title-details");
  titleDetails.textContent = "MI PERFIL";

  const formularioDetails = document.createElement("form");
  formularioDetails.id = "formulario-details";
  formularioDetails.classList.add("formulario-details");

  function createInputField(labelText, inputType, inputId) {
    const cardList = document.createElement("div");
    cardList.classList.add("card-list-details");

    const label = document.createElement("label");
    label.classList.add("sub_title");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    const input = document.createElement("input");
    input.classList.add("card-style-details");
    input.type = inputType;
    input.id = inputId;
    input.placeholder = "";

    cardList.appendChild(label);
    cardList.appendChild(input);

    return cardList;
  }
  formularioDetails.appendChild(createInputField("Nombre", "text", "name"));
  formularioDetails.appendChild(
    createInputField("Apellidos", "text", "apellidos")
  );
  formularioDetails.appendChild(createInputField("E-mail", "email", "email"));
  formularioDetails.appendChild(
    createInputField("Calle", "password", "street")
  );
    //desde aqui
    formularioDetails.appendChild(
      createInputField("Código Postal", "password", "street")
    );
    formularioDetails.appendChild(
      createInputField("Ciudad", "password", "street")
    );


    //hasta aqui
  formularioDetails.appendChild(createInputField("Teléfono", "tel", "phone"));
  formularioDetails.appendChild(
    createInputField("Suscripción", "text", "subscription")
  );


  const buttonEndDetails = document.createElement("div");
  buttonEndDetails.classList.add("button-end-details");

  const buttonActivo = document.createElement("button");
  buttonActivo.classList.add("button-details");
  buttonActivo.textContent = "EDITAR";

  const buttonGuardar = document.createElement("button");
  buttonGuardar.classList.add("button-details");
  buttonGuardar.textContent = "GUARDAR";


  document.body.appendChild(exitButton);
  
  topDetails.appendChild(exitButton);
  topDetails.appendChild(titleDetails);

  buttonEndDetails.appendChild(buttonActivo);
  buttonEndDetails.appendChild(buttonGuardar);
  formularioDetails.appendChild(buttonEndDetails);
  cardDetails.appendChild(topDetails);
  cardDetails.appendChild(formularioDetails);
  containerDetails.appendChild(cardDetails);

  const app = document.querySelector("#app")
  app.appendChild(containerDetails)
});