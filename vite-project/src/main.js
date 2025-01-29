import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


//boton eliminar usuario 
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