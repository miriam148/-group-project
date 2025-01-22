import "./style.css";

const API_URL = "http://localhost:3000";


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

//Botones Cancelar y/o Aceptar
function buttonsActionNewUser() {
  const commandsActionNU = document.createElement("div");
  commandsActionNU.classList = "NU-actions";

  const saveBtnNU = document.createElement("button");
  saveBtnNU.classList = "NU-btnBack";
  saveBtnNU.textContent = "Guardar";
  saveBtnNU.addEventListener("click", async () => {
    try {
      const nameNewUserInput = document.querySelector("#nameNewUserInput").value;
      const surnameNewUserInput = document.querySelector("#surnameNewUserInput").value;
      const addressNewUserInput = document.querySelector("#addressNewUserInput").value;
      const phoneNewUserInput = document.querySelector("#phoneNewUserInput").value;
      const emailNewUserInput = document.querySelector("#emailNewUserInput").value;
      const passwordNewUserInput = document.querySelector("#passwordNewUserInput").value;

      const users = {
        nombre: nameNewUserInput,
        apellidos: surnameNewUserInput,
        direccion: addressNewUserInput,
        telefono: phoneNewUserInput,
        email: emailNewUserInput,
        password: passwordNewUserInput,
      };

      if (!users.nombre || !users.apellidos || !users.direccion || !users.telefono || !users.email || !users.password) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      const url = `${API_URL}/api/users`; 
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
      console.error(error); // Imprime el error en la consola para depuración
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
  siBtn.classList = "botonDetail";
  siBtn.textContent = "Aceptar";

  const cancelBtn = document.createElement("button");
  cancelBtn.classList = "botonDetail";
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
const selectorPassNewUser = document.querySelector("#selectorNewUserPass");

//CREACIÓN DE LOS ELEMENTOS PARA LA FUNCION newUserCreate

function nameNewUser() {
  const nameNU = document.createElement("input");
  nameNU.id = "nameNewUserInput";
  nameNU.classList = "NU-title";
  nameNU.placeholder = "Nombre";
  return nameNU;
}
function surnameNewUser() {
  const surnameNU = document.createElement("input");
  surnameNU.id = "surnameNewUserInput";
  surnameNU.classList = "NU-title";
  surnameNU.placeholder = "Apellidos";
  return surnameNU;
}

function addressNewUser() {
  const addressNU = document.createElement("input");
  addressNU.id = "addressNewUserInput";
  addressNU.classList = "NU-title";
  addressNU.placeholder = "Direccion";
  return addressNU;
}

function phoneNewUser() {
  const phoneNU = document.createElement("input");
  phoneNU.id = "phoneNewUserInput";
  phoneNU.classList = "NU-title";
  phoneNU.placeholder = "Teléfono";
  return phoneNU;
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

 //Plantilla creación Nuevo Usuario
function newUserCreate() {
  const containNewUser = document.createElement("div");

  const elementsNewUser = document.createElement("div");
  elementsNewUser.classList = "NU-containerElements";

  const titleNU = document.createElement("div");
  titleNU.classList = "NU-title";
  titleNU.textContent = "Nuevo Usuario";

  elementsNewUser.appendChild(nameNewUser());
  elementsNewUser.appendChild(surnameNewUser());
  elementsNewUser.appendChild(addressNewUser());
  elementsNewUser.appendChild(phoneNewUser());
  elementsNewUser.appendChild(emailNewUser());
  elementsNewUser.appendChild(passwordNewUser());
  // elementsNewUser.appendChild(selectorIdNewUser);
  elementsNewUser.appendChild(selectorPassNewUser);
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

