// export function cerrarAlerta() {
//   const containerAlerta = document.querySelector("#alertaContainer");
//   if (containerAlerta) {
//     containerAlerta.style.display = "none";
//   }
// }

// export function alerta() {
//   let containerAlerta = document.querySelector("#alertaContainer");

//   if (!containerAlerta) {
//     containerAlerta = document.createElement("div");
//     containerAlerta.id = "alertaContainer";
//     containerAlerta.classList.add("alertaDisable");
//     document.body.appendChild(containerAlerta);
//   }

//   const aviso = document.createElement("div");
//   aviso.classList.add("NU-aviso");
//   aviso.textContent =
//     "Al pulsar en Aceptar los datos no se guardarán ¿Desea continuar?";

//   const siBtn = document.createElement("button");
//   siBtn.classList = "buttonDetail";
//   siBtn.textContent = "Aceptar";

//   const cancelBtn = document.createElement("button");
//   cancelBtn.classList = "buttonDetail";
//   cancelBtn.textContent = "Cancelar";

//   aviso.appendChild(cancelBtn);
//   aviso.appendChild(siBtn);

//   containerAlerta.appendChild(aviso);
//   containerAlerta.style.display = "block";

//   cancelBtn.addEventListener("click", cerrarAlerta);

//   siBtn.addEventListener("click", () => {
//     alert("Se procederá a cancelar los datos");
//     cerrarAlerta();
//     deleteContainerNewUser();
//     newUserCreate();
//     return containerAlerta;
//   });

//   containerUserNew.appendChild(containerAlerta);
// }
