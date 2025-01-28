import "./style.css";

const API_URL = "http://localhost:3000";

async function updateUser(id, updatedUser) {
  // Obtén el token JWT (esto podría ser un token válido que tengas guardado en localStorage, cookies, etc.)
  const token = localStorage.getItem("jwtToken");

  // Si no hay token, no debería permitir hacer la actualización
  if (!token) {
    alert("No estás autenticado. Inicia sesión.");
    return;
  }

  try {
    const url = `${API_URL}/api/user/${id}`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUser),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar el usuario");
    }

    alert("Usuario actualizado correctamente");
    loadUsers(); // Recarga la lista de usuarios
  } catch (error) {
    console.error(error);
    alert("Error al actualizar el usuario");
  }
}

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
    try {
      if (!containerAp6 || !containerDetails) {
        throw new Error("No se encuentran los contenedores.");
      }
      containerDetails.style.display = "none";
      containerAp6.style.display = "block";
      addElementAp6();
      console.log("Has vuelto a la página anterior");
    } catch (error) {
      console.error("Error:", error.message);
    }
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
  formularioDetails.appendChild(createInputField("Apellidos", "text", "apellidos"));
  formularioDetails.appendChild(createInputField("E-mail", "email", "email"));
  formularioDetails.appendChild(createInputField("Calle", "password", "street"));
  formularioDetails.appendChild(createInputField("Código Postal", "password", "postal"));
  formularioDetails.appendChild(createInputField("Ciudad", "password", "city"));
  formularioDetails.appendChild(createInputField("Teléfono", "tel", "phone"));
  formularioDetails.appendChild(createInputField("Suscripción", "text", "subscription"));

  const buttonEndDetails = document.createElement("div");
  buttonEndDetails.classList.add("button-end-details");

  const buttonEditar = document.createElement("button");
  buttonEditar.classList.add("button-details");
  buttonEditar.textContent = "EDITAR";
  buttonEditar.addEventListener("click", () => {
    const isEditing = nameField.disabled === false;

    if (isEditing) {
      console.log("El formulario ya está en modo edición.");
      return;
    }

    nameField.disabled = false;
    apellidosField.disabled = false;
    emailField.disabled = false;
    streetField.disabled = false;
    postalField.disabled = false;
    cityField.disabled = false;
    phoneField.disabled = false;
    subscriptionField.disabled = false;

    buttonEditar.style.display = "none";
    buttonGuardar.style.display = "inline-block";
  });

  const buttonGuardar = document.createElement("button");
  buttonGuardar.classList.add("button-details");
  buttonGuardar.textContent = "GUARDAR";
  buttonGuardar.style.display = "none";

  buttonGuardar.addEventListener("click", (event) => {
    event.preventDefault();

    // Obtener los nuevos valores del formulario
    const updatedUser = {
      name: nameField.value,
      lastname: apellidosField.value,
      email: emailField.value,
      road: streetField.value,
      postCode: postalField.value,
      city: cityField.value,
      phoneNumber: phoneField.value,
      subscription: subscriptionField.value,
    };

    const changedValues = {
      name: nameField.value !== originalValues.name,
      apellidos: apellidosField.value !== originalValues.apellidos,
      email: emailField.value !== originalValues.email,
      street: streetField.value !== originalValues.street,
      postal: postalField.value !== originalValues.postal,
      city: cityField.value !== originalValues.city,
      phone: phoneField.value !== originalValues.phone,
      subscription: subscriptionField.value !== originalValues.subscription,
    };
    const anyChanges = Object.values(changedValues).includes(true);
    if (anyChanges) {
      alert("Cambios guardados exitosamente!");
      updateUser(id, updatedUser); // Llamar a la función de actualización del usuario
    } else {
      console.error("Error al modificar los campos: No se han hecho cambios.");
    }

    nameField.disabled = true;
    apellidosField.disabled = true;
    emailField.disabled = true;
    streetField.disabled = true;
    postalField.disabled = true;
    cityField.disabled = true;
    phoneField.disabled = true;
    subscriptionField.disabled = true;

    buttonGuardar.style.display = "none";
    buttonEditar.style.display = "inline-block";
  });

  document.body.appendChild(exitButton);
  topDetails.appendChild(exitButton);
  topDetails.appendChild(titleDetails);
  buttonEndDetails.appendChild(buttonEditar);
  buttonEndDetails.appendChild(buttonGuardar);
  formularioDetails.appendChild(buttonEndDetails);
  cardDetails.appendChild(topDetails);
  cardDetails.appendChild(formularioDetails);
  containerDetails.appendChild(cardDetails);

  const app = document.querySelector("#app");
  app.appendChild(containerDetails);

  //FORMULARIO
  const nameField = document.getElementById("name");
  const apellidosField = document.getElementById("apellidos");
  const emailField = document.getElementById("email");
  const streetField = document.getElementById("street");
  const postalField = document.getElementById("postal");
  const cityField = document.getElementById("city");
  const phoneField = document.getElementById("phone");
  const subscriptionField = document.getElementById("subscription");

  const originalValues = {
    name: nameField.value,
    apellidos: apellidosField.value,
    email: emailField.value,
    street: streetField.value,
    postal: postalField.value,
    city: cityField.value,
    phone: phoneField.value,
    subscription: subscriptionField.value,
  };

  buttonEditar.addEventListener("click", () => {
    nameField.disabled = false;
    apellidosField.disabled = false;
    emailField.disabled = false;
    streetField.disabled = false;
    postalField.disabled = false;
    cityField.disabled = false;
    phoneField.disabled = false;
    subscriptionField.disabled = false;

    buttonEditar.style.display = "none";
    buttonGuardar.style.display = "inline-block";
  });

  buttonGuardar.addEventListener("click", () => {
    const changedValues = {
      name: nameField.value !== originalValues.name,
      apellidos: apellidosField.value !== originalValues.apellidos,
      email: emailField.value !== originalValues.email,
      street: streetField.value !== originalValues.street,
      postal: postalField.value !== originalValues.postal,
      city: cityField.value !== originalValues.city,
      phone: phoneField.value !== originalValues.phone,
      subscription: subscriptionField.value !== originalValues.subscription,
    };
    const anyChanges = Object.values(changedValues).includes(true);

    if (anyChanges) {
      alert("Cambios guardados exitosamente!");
      console.log("Cambio hecho:", changedValues);
    } else {
      console.error("Error al modificar los campos: No se han hecho cambios.");
    }

    nameField.disabled = true;
    apellidosField.disabled = true;
    emailField.disabled = true;
    streetField.disabled = true;
    postalField.disabled = true;
    cityField.disabled = true;
    phoneField.disabled = true;
    subscriptionField.disabled = true;

    buttonGuardar.style.display = "none";
    buttonEditar.style.display = "inline-block";

    updateUser();
  
  });
});




window.onload = loadUsers;

