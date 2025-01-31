import { deleteContainerAP6, deleteContainerDetails, deleteContainerNewUser, deleteAlert } from "./utils/utils"
import { nameNewUser, lastnameNewUser, roadNewUser, postCodeNewUser, cityNewUser, phoneNumberNewUser, emailNewUser, passwordNewUser, subscriptionNewUser, roleNewUser } from "./New_User/elements";

const API_URL = "http://localhost:3000/api";

//CONTENEDORES GENERALES
const app = document.querySelector("#app")
const app1 = document.querySelector("#app1");
const containerAp6 = document.querySelector("#containerAp6");
const containerUserNew = document.querySelector("#containerNewUser");
const containerDetails = document.querySelector("#containerDetails");

//Inicio contenido Nuevo Usuario
function cerrarAlerta() {
  const containerAlerta = document.querySelector("#alertaContainer");
  if (containerAlerta) {
    containerAlerta.style.display = "none";
  }
}

function alerta() {
  let containerAlerta = document.querySelector("#alertaContainer");

  if (!containerAlerta) {
    containerAlerta = document.createElement("div");
    containerAlerta.id = "alertaContainer";
    containerAlerta.classList.add("alertaDisable");
    document.body.appendChild(containerAlerta);
  }

  const aviso = document.createElement("div");
  aviso.classList.add("NU-aviso");
  aviso.textContent =
    "Al pulsar en Aceptar los datos no se guardarán ¿Desea continuar?";

  const siBtn = document.createElement("button");
  siBtn.classList = "buttonDetail";
  siBtn.textContent = "Aceptar";

  const cancelBtn = document.createElement("button");
  cancelBtn.classList = "buttonDetail";
  cancelBtn.textContent = "Cancelar";

  aviso.appendChild(cancelBtn);
  aviso.appendChild(siBtn);

  containerAlerta.appendChild(aviso);
  containerAlerta.style.display = "block";

  cancelBtn.addEventListener("click", cerrarAlerta);

  siBtn.addEventListener("click", () => {
    alert("Se procederá a cancelar los datos");
    cerrarAlerta();
    deleteContainerNewUser();
    newUserCreate();
    return containerAlerta;
  });

  containerUserNew.appendChild(containerAlerta);
}

function buttonSaveNU(){
  const saveBtnNU = document.createElement("button");
  saveBtnNU.classList = "NU-btnBack";
  saveBtnNU.textContent = "Guardar";
  saveBtnNU.addEventListener("click", async () => {
    try {
      const nameNewUserInput = document.querySelector("#nameNewUserInput").value;
      const lastnameNewUserInput = document.querySelector("#lastnameNewUserInput").value;
      const phoneNumberNewUserInput = document.querySelector("#phoneNumberNewUserInput").value;
      const roadNewUserInput = document.querySelector("#roadNewUserInput").value;
      const postCodeNewUserInput = document.querySelector("#postCodeNewUserInput").value;
      const cityNewUserInput = document.querySelector("#cityNewUserInput").value;
      const emailNewUserInput = document.querySelector("#emailNewUserInput").value;
      const passwordNewUserInput = document.querySelector("#passwordNewUserInput").value;
      const subscriptionNewUserInput = document.querySelector("#subscriptionNewUserInput").value;
      const roleNewUserInput = document.querySelector("#roleNewUserInput").value;

      if (
        !nameNewUserInput ||
        !lastnameNewUserInput ||
        !phoneNumberNewUserInput ||
        !roadNewUserInput ||
        !postCodeNewUserInput ||
        !cityNewUserInput ||
        !emailNewUserInput ||
        !passwordNewUserInput
      ) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      const phoneRegex = /^[0-9]{9}$/;
      if (!phoneRegex.test(phoneNumberNewUserInput)) {
        alert("El número de teléfono debe contener exactamente 9 dígitos.");
        return;
      }

      const postCodeRegex = /^[0-9]{5}$/;
      if (!postCodeRegex.test(postCodeNewUserInput)) {
        alert("El código postal debe contener exactamente 5 dígitos.");
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(emailNewUserInput)) {
        alert("El formato del email es inválido.");
        return;
      }

      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (!passwordRegex.test(passwordNewUserInput)) {
        alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial.");
        return;
      }
      
      const users = {
        name: nameNewUserInput,
        lastname: lastnameNewUserInput,
        phoneNumber: phoneNumberNewUserInput,
        road: roadNewUserInput,
        postCode: postCodeNewUserInput,
        city: cityNewUserInput,
        email: emailNewUserInput,
        password: passwordNewUserInput,
        subscription: subscriptionNewUserInput,
        role: roleNewUserInput,
      };
      const url = `${API_URL}/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(users),
      });

      if (response.ok) {
        alert("Usuario creado");
        deleteContainerNewUser();
        newUserCreate();
      } else {
        alert("El email o contraseña ya existe en nuestra base de datos");
      }
    } catch (error) {
      alert("Error al crear usuario");
      console.error(error);
    }
  });

  return saveBtnNU
}

function buttonCancelNU(){
 const cancelBtnNU = document.createElement("button");
  cancelBtnNU.classList = "NU-btnBack";
  cancelBtnNU.textContent = "Cancelar";

  cancelBtnNU.addEventListener("click", () => {
    setTimeout(() => {
      alerta();
    }, 1000);
    deleteAlert();
  });
return cancelBtnNU
}

function buttonsActionNewUser() {
  const commandsActionNU = document.createElement("div");
  commandsActionNU.classList = "NU-actions";
  commandsActionNU.appendChild(buttonSaveNU());
  commandsActionNU.appendChild(buttonCancelNU());
  return commandsActionNU;
}

function buttonBackNU(){
  const backBtnNU = document.createElement("button");
  backBtnNU.classList = "NU-btnBack";
  backBtnNU.textContent = "Volver";

  backBtnNU.addEventListener("click", () => {
    deleteContainerNewUser();
    containerUserNew.style.display = "none";
    containerAp6.style.display = "block";
    addElementAp6();
  });
  return backBtnNU
}

function buttonCloseNU(){
const closeBtnNU = document.createElement("button");
  closeBtnNU.classList = "NU-btnBack";
  closeBtnNU.textContent = "Cerrar Sesión";
  closeBtnNU.addEventListener("click", () => {
    deleteContainerNewUser();
    containerUserNew.style.display = "none";
    app1.style.display = "block";
    loginAdm();
  });
  return closeBtnNU
}

function buttonsBackNewUser() {
  const commandsBackNU = document.createElement("div");
  commandsBackNU.classList = "NU-commands";

  commandsBackNU.appendChild(buttonBackNU());
  commandsBackNU.appendChild(buttonCloseNU());
  return commandsBackNU;
}

function newUserCreate() {
  const containNewUser = document.createElement("div");

  const elementsNewUser = document.createElement("div");
  elementsNewUser.classList = "NU-containerElements";

  const titleNU = document.createElement("div");
  titleNU.classList = "NU-mainTitle";
  titleNU.textContent = "Nuevo Usuario";

  elementsNewUser.appendChild(nameNewUser());
  elementsNewUser.appendChild(lastnameNewUser());
  elementsNewUser.appendChild(roadNewUser());
  elementsNewUser.appendChild(postCodeNewUser());
  elementsNewUser.appendChild(cityNewUser());
  elementsNewUser.appendChild(phoneNumberNewUser());
  elementsNewUser.appendChild(emailNewUser());
  elementsNewUser.appendChild(passwordNewUser());
  elementsNewUser.appendChild(subscriptionNewUser());
  elementsNewUser.appendChild(roleNewUser());
  elementsNewUser.appendChild(buttonsActionNewUser());

  containNewUser.appendChild(buttonsBackNewUser());
  containNewUser.appendChild(titleNU);
  containNewUser.appendChild(elementsNewUser);

  const containerNU = document.querySelector("#containerNewUser");
  containerNU.appendChild(containNewUser);

  const app = document.querySelector("#app");
  app.appendChild(containerNU);
}
//Fin contenido Nuevo Usuario

//Inicio contenido Detalles de Usuario
async function updateUser(idUser, updatedUser) {
  const token = localStorage.getItem("jwtToken");

  // Si no hay token, no debería permitir hacer la actualización
  if (!token) {
    alert("No estás autenticado. Inicia sesión.");
    return;
  }

  try {
    const url = `${API_URL}/users/${idUser}`;

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
    loadUsers();
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
      if (!containerDetails) {
        throw new Error("No se encuentra el contenedor.");
      }
      containerDetails.style.display = "none";
      containerAp6.style.display = "block"; // Asegúrate de tener el contenedor 'containerAp6' correctamente definido.
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

  // Añadir los campos del formulario
  formularioDetails.appendChild(createInputField("Nombre", "text", "name"));
  formularioDetails.appendChild(createInputField("Apellidos", "text", "apellidos"));
  formularioDetails.appendChild(createInputField("E-mail", "email", "email"));
  formularioDetails.appendChild(createInputField("Calle", "text", "street"));
  formularioDetails.appendChild(createInputField("Código Postal", "text", "postal"));
  formularioDetails.appendChild(createInputField("Ciudad", "text", "city"));
  formularioDetails.appendChild(createInputField("Teléfono", "tel", "phone"));
  formularioDetails.appendChild(createInputField("Suscripción", "text", "subscription"));

  // Botón de Editar y Guardar
  const buttonEndDetails = document.createElement("div");
  buttonEndDetails.classList.add("button-end-details");

  const buttonEditar = document.createElement("button");
  buttonEditar.classList.add("button-details");
  buttonEditar.textContent = "EDITAR";
  buttonEditar.type = "button";

  const buttonGuardar = document.createElement("button");
  buttonGuardar.classList.add("button-details");
  buttonGuardar.textContent = "GUARDAR";
  buttonGuardar.style.display = "none";

  buttonEditar.addEventListener("click", () => {
    // Habilitar los campos para edición
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
      updateUser(idUser, updatedUser); // Llamar a la función de actualización del usuario
    } else {
      alert("No se han realizado cambios.");
    }

    // Deshabilitar campos después de guardar
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

  // Campos del formulario
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

  // Acción para enviar el formulario (submit)
  formularioDetails.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado

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
      alert("¡Datos actualizados!");
      await updateUser(idUser, updatedUser); // Llamar a la función de actualización
    } else {
      alert("No se detectaron cambios.");
    }
  });
});
//Fin contenido de Detalles de usuario

//Inicio contenido Vista General de Admin
function addElementAp6() {
  const containerAp6 = document.querySelector('#containerAp6');
  containerAp6.classList.add('containerAdmin');

  const divContainer = document.createElement('div');
  divContainer.classList.add('user-admin');
  divContainer.id = 'user-admin';

  containerAp6.appendChild(divContainer);

  const usuarios = document.createElement('h2');
  usuarios.classList.add('us-admin')
  usuarios.textContent = 'Usuarios';

  const firstButton = document.createElement('button');
  firstButton.classList.add('access-admin');
  firstButton.textContent = 'Nuevo Usuario';
firstButton.addEventListener("click", ()=>{
  deleteContainerAP6();
  containerAp6.style.display = "none";
  containerUserNew.style.display = "block";
  newUserCreate()
})


  const secondButton = document.createElement('button');
  secondButton.classList.add('close-admin');
  secondButton.textContent = 'Log out';
secondButton.addEventListener("click", ()=>{
deleteContainerAP6(),
containerAp6.style.display = "none";
app1.style.display = "block";
loginAdm()
})
  
  divContainer.appendChild(usuarios);
  divContainer.appendChild(firstButton);
  divContainer.appendChild(secondButton);



  // const userList = document.createElement('div');
  // userList.classList.add('userList-admin');
  
  // containerAp6.appendChild(userList);
  containerAp6.appendChild(divContainer);
  app.appendChild(containerAp6);
}

function cargarTodosLosUsuarios() {
  const url = `${API_URL}/users`; 

  fetch(url)
    .then(response => response.json()) 
    .then(data => {
      
      const contenedorUsuarios = document.createElement('div');
      contenedorUsuarios.innerHTML = '';

      data.forEach(usuario => {
      
        const usuarioDiv = document.createElement('div');
        usuarioDiv.classList.add('usuario-admin');
        usuarioDiv.id = `usuario-${usuario._id}`;

        const fullname = document.createElement('div')
        fullname.classList.add('fullname-admin');

        const name = document.createElement('p');
        name.textContent = `${usuario.name}`;

        const lastname = document.createElement('p');
        lastname.textContent = `${usuario.lastname}`;

        fullname.appendChild(name)
        fullname.appendChild(lastname)
        // const id = document.createElement('p');
        // id.textContent = `ID: ${usuario._id}`;
        const emailAdmin = document.createElement('div')
        emailAdmin.classList.add('email-admin');

        const email = document.createElement('p');
        email.textContent = `Email: ${usuario.email}`;

        emailAdmin.appendChild(email)

        const buttonsDiv = document.createElement('div')
        buttonsDiv.classList.add('button-admin');

        const modifyButton = document.createElement('button');
        modifyButton.textContent = 'Modificar';
        modifyButton.classList.add('button-mod-admin');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('button-del-admin');

        buttonsDiv.appendChild(modifyButton)
        buttonsDiv.appendChild(deleteButton)

        usuarioDiv.appendChild(fullname);
        // usuarioDiv.appendChild(name);
        // usuarioDiv.appendChild(lastname);
        // usuarioDiv.appendChild(id);
        usuarioDiv.appendChild(emailAdmin);
        // usuarioDiv.appendChild(email);
        // usuarioDiv.appendChild(modifyButton);
        // usuarioDiv.appendChild(deleteButton);
        usuarioDiv.appendChild(buttonsDiv);
        
        contenedorUsuarios.appendChild(usuarioDiv);

        deleteButton.addEventListener('click', () => {
          if (confirm('¿Está seguro de que quiere eliminar este usuario?')) {
            alert('Usuario eliminado');
          }
        });

        modifyButton.addEventListener('click', () => {
  
          containerAp6.style.display = "none";
          containerDetails.style.display = "block";

          const nameField = document.getElementById("name");
          const apellidosField = document.getElementById("apellidos");
          const emailField = document.getElementById("email");
          const streetField = document.getElementById("street");
          const postalField = document.getElementById("postal");
          const cityField = document.getElementById("city");
          const phoneField = document.getElementById("phone");
          const subscriptionField = document.getElementById("subscription");

          nameField.value = usuario.name;
          apellidosField.value = usuario.lastname; 
          emailField.value = usuario.email;
          streetField.value = usuario.road; 
          postalField.value = usuario.postCode;
          cityField.value = usuario.city;
          phoneField.value = usuario.phoneNumber;
          subscriptionField.value = usuario.subscription;
        });

       
        containerAp6.appendChild(contenedorUsuarios);
        app.appendChild(containerAp6);
      });
    })
    .catch(error => {
      console.error('Error al cargar los datos', error);
    });
}

document.addEventListener('DOMContentLoaded', cargarTodosLosUsuarios);
// Fin contenido Vista General de Admin

//Inicio contenido Login Admin
// Función para crear los elementos del DOM
function createLoginForm() {
  const app = document.getElementById("app1");
  app.classList.add("container-access-admin");

  const header = document.createElement("header");
  header.classList.add("header-access-admin");

  const logo = document.createElement("div");
  logo.textContent = "Rush";
  logo.classList.add("logo-access-admin");

  const loginBox = document.createElement("div");
  loginBox.classList.add("login-box-access-admin");

  const h2 = document.createElement("h2");
  h2.textContent = "Acceso";

  const form = document.createElement("form");

  const inputGroup = document.createElement("div");
  inputGroup.classList.add("input-group-access-admin");

  const email = document.createElement("label");
  email.textContent = "Email";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Introduce tu email";
  emailInput.id = "email-input";

  const inputGroup1 = document.createElement("div");
  inputGroup1.classList.add("input-group-access-admin");

  const password = document.createElement("label");
  password.textContent = "Password";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Introduce tu password";
  passwordInput.id = "password-input";

  const button = document.createElement("button");
  button.classList.add("btn-access-admin");
  button.textContent = "Login";

  header.appendChild(logo);
  loginBox.appendChild(h2);
  loginBox.appendChild(form);
  form.appendChild(inputGroup);
  inputGroup.appendChild(email);
  inputGroup.appendChild(emailInput);
  form.appendChild(inputGroup1);
  inputGroup1.appendChild(password);
  inputGroup1.appendChild(passwordInput);
  form.appendChild(button);
  app1.appendChild(header);
  app1.appendChild(loginBox);
  return form; 
}

// Función para agregar eventos y manejar el login
function addLoginEvent(form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const emailValue = document.getElementById("email-input").value.trim();
    const passwordValue = document
      .getElementById("password-input")
      .value.trim();

    const data = { email: emailValue, password: passwordValue };

    try {
      const response = await fetch ("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.user.role === "admin") {
          console.log(result)
          const token = result.token;
          console.log(token);
          localStorage.setItem("token", token);

          if (token) {
            const app = document.getElementById("app1");
            app.innerHTML = "";
            app1.style.display = "none";
    containerAp6.style.display = "block";
            addElementAp6();
          }
        } else {
          alert("No tienes permisos de administrador");
        }
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } catch (error) {
      alert("Error al intentar iniciar sesión");
      console.error(error);
    }
  });
}

// Inicializar las funciones
function loginAdm() {
  const form = createLoginForm(); // Crea el formulario
  addLoginEvent(form); // Agrega el evento de login
}
//Fin contenido Login Admin

loginAdm();

// Eliminar usuario
// async function deleteUser(userId) {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await fetch(`${API_URL}/api/users/${userId}`, {
//       method: "DELETE",
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json"
//       }
//     });

//     if (response.ok) {
//       alert("Usuario eliminado correctamente");
//       // Recargar la lista de usuarios o actualizar la vista
//       addElementAp6(); // Asumiendo que esta función actualiza la lista de usuarios
//     } else {
//       const error = await response.json();
//       alert(error.message || "Error al eliminar el usuario");
//     }
//   } catch (error) {
//     console.error("Error al eliminar usuario:", error);
//     alert("Error al intentar eliminar el usuario");
//   }
// }

// function createDeleteButton(userId) {
//   const deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("NU-btnBack");
//   deleteBtn.textContent = "Eliminar";
  
//   deleteBtn.addEventListener("click", async () => {
//     if (confirm("¿Está seguro de que desea eliminar este usuario?")) {
//       await deleteUser(userId);
//     }
//   });
  
//   return deleteBtn;
// }

// // Modificar la función que muestra los usuarios para incluir el botón de eliminar
// function displayUsers(users) {
//   const userList = document.createElement("div");
//   userList.classList.add("user-list");

//   users.forEach(user => {
//     const userCard = document.createElement("div");
//     userCard.classList.add("user-card");
    
//     // Información del usuario
//     const userInfo = document.createElement("div");
//     userInfo.classList.add("user-info");
//     userInfo.innerHTML = `
//       <p><strong>Nombre:</strong> ${user.name} ${user.lastname}</p>
//       <p><strong>Email:</strong> ${user.email}</p>
//       <p><strong>Teléfono:</strong> ${user.phoneNumber}</p>
//     `;
    
//     // Contenedor de acciones
//     const actions = document.createElement("div");
//     actions.classList.add("user-actions");
//     actions.appendChild(createDeleteButton(user.id));
    
//     userCard.appendChild(userInfo);
//     userCard.appendChild(actions);
//     userList.appendChild(userCard);
//   });

//   return userList;
// }




