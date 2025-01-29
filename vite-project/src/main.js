
import './style.css'



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
  h2.textContent = "Acceso administradores";

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
  app.appendChild(header);
  app.appendChild(loginBox);

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
      const response = await fetch("http://localhost:3000/api/login", {
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

loginAdm();





const API_URL = "http://localhost:3000";

//CONTENEDORES GENERALES
// const app1 = document.querySelector("#app1");
// const containerAp6 = document.querySelector("#containerAp6");
// const containerUserNew = document.querySelector("#containerNewUser");
// const containerDetails = document.querySelector("#containerDetails");


// FUNCIONES DE BORRADO

// function deleteContainerAP6() {
//   const container = document.querySelector("#containerAp6");
//   container.innerHTML = "";
// }
// function deleteContainerNewUser() {
//   const containerNU = document.querySelector("#containerNewUser");
//   containerNU.innerHTML = "";
// }
// function deleteContainerDetails() {
//   const container = document.querySelector("#containerDetails");
//   container.innerHTML = "";
// }

function deleteContainerNewUser() {
  const containerNU = document.querySelector("#containerNewUser");
  containerNU.innerHTML = "";
}

function deleteAlert() {
  const container = document.querySelector("#alertaContainer");
  container.innerHTML = "";
}

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

  containerNewUser.appendChild(containerAlerta);
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
      const url = `${API_URL}/api/signup`;
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

function nameNewUser() {
  const nameNU = document.createElement("input");
  nameNU.id = "nameNewUserInput";
  nameNU.classList = "NU-title";
  nameNU.placeholder = "Nombre";
  return nameNU;
}

function lastnameNewUser() {
  const lastnameNU = document.createElement("input");
  lastnameNU.id = "lastnameNewUserInput";
  lastnameNU.classList = "NU-title";
  lastnameNU.placeholder = "Apellidos";
  return lastnameNU;
}

function roadNewUser() {
  const roadNU = document.createElement("input");
  roadNU.id = "roadNewUserInput";
  roadNU.classList = "NU-title";
  roadNU.placeholder = "Direccion";
  return roadNU;
}

function postCodeNewUser() {
  const postCodeNU = document.createElement("input");
  postCodeNU.id = "postCodeNewUserInput";
  postCodeNU.classList = "NU-title";
  postCodeNU.placeholder = "Codigo Postal";
  return postCodeNU;
}

function cityNewUser() {
  const cityNU = document.createElement("input");
  cityNU.id = "cityNewUserInput";
  cityNU.classList = "NU-title";
  cityNU.placeholder = "Ciudad";
  return cityNU;
}

function phoneNumberNewUser() {
  const phoneNumberNU = document.createElement("input");
  phoneNumberNU.id = "phoneNumberNewUserInput";
  phoneNumberNU.classList = "NU-title";
  phoneNumberNU.placeholder = "Teléfono";
  return phoneNumberNU;
}

function emailNewUser() {
  const emailNU = document.createElement("input");
  emailNU.id = "emailNewUserInput";
  emailNU.classList = "NU-title";
  emailNU.placeholder = "pepe@example.com";
  return emailNU;
}

function passwordNewUser() {
  const passwordNU = document.createElement("input");
  passwordNU.id = "passwordNewUserInput";
  passwordNU.classList = "NU-title";
  passwordNU.placeholder = "Password";
  return passwordNU;
}

function subscriptionNewUser() {
  const subscriptionNU = document.createElement("input");
  subscriptionNU.id = "subscriptionNewUserInput";
  subscriptionNU.classList = "NU-title";
  subscriptionNU.placeholder = "Mensual, Semestral, Anual, N/A";
  return subscriptionNU;
}

function roleNewUser() {
  const roleNU = document.createElement("input");
  roleNU.id = "roleNewUserInput";
  roleNU.classList = "NU-title";
  roleNU.placeholder = "user/admin";
  return roleNU;
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

newUserCreate();

// Eliminar usuario
async function deleteUser(userId) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/api/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      alert("Usuario eliminado correctamente");
      // Recargar la lista de usuarios o actualizar la vista
      addElementAp6(); // Asumiendo que esta función actualiza la lista de usuarios
    } else {
      const error = await response.json();
      alert(error.message || "Error al eliminar el usuario");
    }
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    alert("Error al intentar eliminar el usuario");
  }
}

function createDeleteButton(userId) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("NU-btnBack");
  deleteBtn.textContent = "Eliminar";
  
  deleteBtn.addEventListener("click", async () => {
    if (confirm("¿Está seguro de que desea eliminar este usuario?")) {
      await deleteUser(userId);
    }
  });
  
  return deleteBtn;
}

// Modificar la función que muestra los usuarios para incluir el botón de eliminar
function displayUsers(users) {
  const userList = document.createElement("div");
  userList.classList.add("user-list");

  users.forEach(user => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");
    
    // Información del usuario
    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");
    userInfo.innerHTML = `
      <p><strong>Nombre:</strong> ${user.name} ${user.lastname}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Teléfono:</strong> ${user.phoneNumber}</p>
    `;
    
    // Contenedor de acciones
    const actions = document.createElement("div");
    actions.classList.add("user-actions");
    actions.appendChild(createDeleteButton(user.id));
    
    userCard.appendChild(userInfo);
    userCard.appendChild(actions);
    userList.appendChild(userCard);
  });

  return userList;
}