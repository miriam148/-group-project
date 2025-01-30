// import { cerrarAlerta, alerta } from "../New_User/alert";

// export function buttonSaveNU() {
//   const saveBtnNU = document.createElement("button");
//   saveBtnNU.classList = "NU-btnBack";
//   saveBtnNU.textContent = "Guardar";
//   saveBtnNU.addEventListener("click", async () => {
//     try {
//       const nameNewUserInput =
//         document.querySelector("#nameNewUserInput").value;
//       const lastnameNewUserInput = document.querySelector(
//         "#lastnameNewUserInput"
//       ).value;
//       const phoneNumberNewUserInput = document.querySelector(
//         "#phoneNumberNewUserInput"
//       ).value;
//       const roadNewUserInput =
//         document.querySelector("#roadNewUserInput").value;
//       const postCodeNewUserInput = document.querySelector(
//         "#postCodeNewUserInput"
//       ).value;
//       const cityNewUserInput =
//         document.querySelector("#cityNewUserInput").value;
//       const emailNewUserInput =
//         document.querySelector("#emailNewUserInput").value;
//       const passwordNewUserInput = document.querySelector(
//         "#passwordNewUserInput"
//       ).value;
//       const subscriptionNewUserInput = document.querySelector(
//         "#subscriptionNewUserInput"
//       ).value;
//       const roleNewUserInput =
//         document.querySelector("#roleNewUserInput").value;

//       if (
//         !nameNewUserInput ||
//         !lastnameNewUserInput ||
//         !phoneNumberNewUserInput ||
//         !roadNewUserInput ||
//         !postCodeNewUserInput ||
//         !cityNewUserInput ||
//         !emailNewUserInput ||
//         !passwordNewUserInput
//       ) {
//         alert("Por favor, complete todos los campos.");
//         return;
//       }

//       const phoneRegex = /^[0-9]{9}$/;
//       if (!phoneRegex.test(phoneNumberNewUserInput)) {
//         alert("El número de teléfono debe contener exactamente 9 dígitos.");
//         return;
//       }

//       const postCodeRegex = /^[0-9]{5}$/;
//       if (!postCodeRegex.test(postCodeNewUserInput)) {
//         alert("El código postal debe contener exactamente 5 dígitos.");
//         return;
//       }

//       const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//       if (!emailRegex.test(emailNewUserInput)) {
//         alert("El formato del email es inválido.");
//         return;
//       }

//       const passwordRegex =
//         /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//       if (!passwordRegex.test(passwordNewUserInput)) {
//         alert(
//           "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial."
//         );
//         return;
//       }

//       const users = {
//         name: nameNewUserInput,
//         lastname: lastnameNewUserInput,
//         phoneNumber: phoneNumberNewUserInput,
//         road: roadNewUserInput,
//         postCode: postCodeNewUserInput,
//         city: cityNewUserInput,
//         email: emailNewUserInput,
//         password: passwordNewUserInput,
//         subscription: subscriptionNewUserInput,
//         role: roleNewUserInput,
//       };
//       const url = `${API_URL}/api/signup`;
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(users),
//       });

//       if (response.ok) {
//         alert("Usuario creado");
//         deleteContainerNewUser();
//         newUserCreate();
//       } else {
//         alert("El email o contraseña ya existe en nuestra base de datos");
//       }
//     } catch (error) {
//       alert("Error al crear usuario");
//       console.error(error);
//     }
//   });

//   return saveBtnNU;
// }

// export function buttonCancelNU() {
//   const cancelBtnNU = document.createElement("button");
//   cancelBtnNU.classList = "NU-btnBack";
//   cancelBtnNU.textContent = "Cancelar";

//   cancelBtnNU.addEventListener("click", () => {
//     setTimeout(() => {
//       alerta();
//     }, 1000);
//     deleteAlert();
//   });
//   return cancelBtnNU;
// }

// export function buttonBackNU() {
//   const backBtnNU = document.createElement("button");
//   backBtnNU.classList = "NU-btnBack";
//   backBtnNU.textContent = "Volver";

//   backBtnNU.addEventListener("click", () => {
//     deleteContainerNewUser();
//     containerUserNew.style.display = "none";
//     containerAp6.style.display = "block";
//     addElementAp6();
//   });
//   return backBtnNU;
// }

// export function buttonCloseNU() {
//   const closeBtnNU = document.createElement("button");
//   closeBtnNU.classList = "NU-btnBack";
//   closeBtnNU.textContent = "Cerrar Sesión";
//   closeBtnNU.addEventListener("click", () => {
//     deleteContainerNewUser();
//     containerUserNew.style.display = "none";
//     app1.style.display = "block";
//     loginAdm();
//   });
//   return closeBtnNU;
// }
