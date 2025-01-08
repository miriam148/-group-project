import "./style.css";
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

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
  aviso.classList.add("aviso");
  aviso.textContent =
    "Al pulsar en Aceptar los datos no se guardarán ¿Desea continuar?";

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
    //   borrarNewUserCreate();
    //   newUserCreate();
  });

  containerNewUser.appendChild(containerAlerta);
}

function newUserCreate() {
  const containNewUser = document.createElement("div");
  const newUser = document.createElement("div");
  newUser.classList = "h2NewUser";
  newUser.textContent = "Nuevo Usuario";

  const comandsBack = document.createElement("div");
  comandsBack.classList = "comandos";

  const backBtn = document.createElement("button");
  backBtn.classList = "botonBack";
  backBtn.textContent = "Volver";
  comandsBack.appendChild(backBtn);

  const closeBtn = document.createElement("button");
  closeBtn.classList = "botonBack";
  closeBtn.textContent = "Cerrar Sesión";
  comandsBack.appendChild(closeBtn);

  const info = document.createElement("div");
  info.classList = "containerInfo";

  const nameNewUser = document.createElement("input");
  nameNewUser.classList = "h2User";
  nameNewUser.placeholder = "Nombre Completo";

  const adressNewUser = document.createElement("input");
  adressNewUser.classList = "h2User";
  adressNewUser.placeholder = "Direccion";

  const phoneNewUser = document.createElement("input");
  phoneNewUser.classList = "h2User";
  phoneNewUser.placeholder = "Telefono";

  const emailNewUser = document.createElement("input");
  emailNewUser.classList = "h2User";
  emailNewUser.placeholder = "Email";

  const passwordNewUser = document.createElement("input");
  passwordNewUser.classList = "h2User";
  passwordNewUser.placeholder = "Password";

  const selectorAdmin = document.querySelector("#selectorAdmin");
  const selectorSuscripcion = document.querySelector("#selector");

  info.appendChild(nameNewUser);
  info.appendChild(adressNewUser);
  info.appendChild(phoneNewUser);
  info.appendChild(emailNewUser);
  info.appendChild(passwordNewUser);
  info.appendChild(selectorAdmin);
  info.appendChild(selectorSuscripcion);

  const comandsCreate = document.createElement("div");
  comandsCreate.classList = "comando";

  const saveBtn = document.createElement("button");
  saveBtn.classList = "botonBack";
  saveBtn.textContent = "Guardar";
  comandsCreate.appendChild(saveBtn);

  const borrowBtn = document.createElement("button");
  borrowBtn.classList = "botonBack";
  borrowBtn.textContent = "Cancelar";
  comandsCreate.appendChild(borrowBtn);

  containNewUser.appendChild(newUser);
  containNewUser.appendChild(comandsBack);
  containNewUser.appendChild(info);
  info.appendChild(comandsCreate);

  borrowBtn.addEventListener("click", () => {
    setTimeout(() => {
      alerta();
    }, 1000);
  });

  // const containerUser = document.querySelector("#containerUser");
  // backBtn.addEventListener("click", () => {
  //   borrarNewUserCreate();
  //   containerUser.style.display = "block";
  //   containNewUser.style.display = "none";
  //   adminViewGeneral();
  // });

  const contenedorUsuarioNuevo = document.querySelector("#containerNewUser");
  contenedorUsuarioNuevo.appendChild(containNewUser);

  const app = document.querySelector("#app");
  app.appendChild(contenedorUsuarioNuevo);

  // closeBtn.addEventListener("click", () => {
  //   borrarNewUserCreate();
  //   containPrincipal.style.display = "block";
  //   containNewUser.style.display = "none";
  //   form();
  // });
}
newUserCreate();
