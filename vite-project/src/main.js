import "./style.css";

const API_URL = "http://localhost:3000";


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

//CONTENEDORES GENERALES
// const app1 = document.querySelector("#app1");
// const containerAp6 = document.querySelector("#containerAp6");
// const containerUserNew = document.querySelector("#containerNewUser");
// const containerDetails = document.querySelector("#containerDetails");



//Funcion borrar contenedor de Nuevo Usuario
function deleteContainerNewUser() {
  const containerNU = document.querySelector("#containerNewUser");
  containerNU.innerHTML = "";
}
function deleteAlert() {
  const container = document.querySelector("#alertaContainer");
  container.innerHTML = "";
}
//BOTONES

//Botones Volver y cerrar sesion


//Botones Cancelar y/o Aceptar


//ALERTA

function cerrarAlerta() {
  const containerAlerta = document.querySelector("#alertaContainer");
  if (containerAlerta) {
    containerAlerta.style.display = "none"; // Ocultar la alerta
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
  aviso.textContent = "Al pulsar en Aceptar los datos no se guardarán ¿Desea continuar?";

  const siBtn = document.createElement("button");
  siBtn.classList = "bottomDetail";
  siBtn.textContent = "Aceptar";

  const cancelBtn = document.createElement("button");
  cancelBtn.classList = "bottomDetail";
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

//SELECTORES
// const selectorIdNewUser = document.querySelector("#selectorIdNewUser");
// const selectorPassNewUser = document.querySelector("#selectorNewUserPass");

//CREACIÓN DE LOS ELEMENTOS PARA LA FUNCION newUserCreate

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



 //Plantilla creación Nuevo Usuario
function newUserCreate() {
  deleteContainerNewUser()
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
  // elementsNewUser.appendChild(selectorIdNewUser);
  // elementsNewUser.appendChild(selectorPassNewUser);


  elementsNewUser.appendChild(buttonsActionNewUser());

  containNewUser.appendChild(buttonsBackNewUser());
  containNewUser.appendChild(titleNU);
  containNewUser.appendChild(elementsNewUser);

  const containerNU = document.querySelector("#containerNewUser");
  containerNU.appendChild(containNewUser);

  const app = document.querySelector("#app");
  app.appendChild(containerNU);
}


function buttonsActionNewUser() {
  const commandsActionNU = document.createElement("div");
  commandsActionNU.classList = "NU-actions";

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
      console.log('subscription:', subscriptionNewUserInput);  // Agrega un log para verificar el valor

      const roleNewUserInput = document.querySelector("#roleNewUserInput").value;
console.log('role:', roleNewUserInput);

      if (!nameNewUserInput || !lastnameNewUserInput || !phoneNumberNewUserInput || !roadNewUserInput || !postCodeNewUserInput || !cityNewUserInput || !emailNewUserInput || !passwordNewUserInput) {
        alert("Por favor, complete todos los campos.");
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
      console.log(users)
      // if (!users.name || !users.lastname || !users.phoneNumber || !users.road || !users.postCode || !users.city  || !users.email || !users.password) {
      //   alert("Por favor, complete todos los campos.");
      //   return;
      // }
      const url = `${API_URL}/api/signup`; 
         const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(users), 
      });

      if (response.ok) {
        alert("Usuario creado");
        deleteContainerNewUser();
        newUserCreate()
      } else {
        alert("El email o contraseña ya existe en nuestra base de datos");
      }
    } catch (error) {
      alert("Error al crear usuario");
      console.error(error); 
    }
  });

  const cancelBtnNU = document.createElement("button");
  cancelBtnNU.classList = "NU-btnBack";
  cancelBtnNU.textContent = "Cancelar";

  cancelBtnNU.addEventListener("click", () => {
    setTimeout(() => {
      alerta();
    }, 1000);
    deleteAlert();
  });

  commandsActionNU.appendChild(saveBtnNU);
  commandsActionNU.appendChild(cancelBtnNU);
  return commandsActionNU;
}

newUserCreate();

function buttonsBackNewUser() {
  const commandsBackNU = document.createElement("div");
  commandsBackNU.classList = "NU-commands";

  const backBtnNU = document.createElement("button");
  backBtnNU.classList = "NU-btnBack";
  backBtnNU.textContent = "Volver";

  backBtnNU.addEventListener("click", () => {
    deleteContainerNewUser();
    containerUserNew.style.display = "none";
    containerAp6.style.display = "block";
    addElementAp6();
  });

  const closeBtnNU = document.createElement("button");
  closeBtnNU.classList = "NU-btnBack";
  closeBtnNU.textContent = "Cerrar Sesión";
  closeBtnNU.addEventListener("click", () => {
    deleteContainerNewUser();
    containerUserNew.style.display = "none";
    app1.style.display = "block";
    loginAdm();
  });

  commandsBackNU.appendChild(backBtnNU);
  commandsBackNU.appendChild(closeBtnNU);
  return commandsBackNU;
}




