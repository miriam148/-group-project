import './style.css'

function addElementAp6() {
  const containerAp6 = document.createElement('div');
  containerAp6.classList.add('container-admin');

  const divContainer = document.createElement('div');
  divContainer.classList.add('user-admin');
  divContainer.id = 'user-admin';

  containerAp6.appendChild(divContainer);

  const usuarios = document.createElement('h2');
  usuarios.classList.add('us-admin')
  usuarios.textContent = 'Usuarios';

  usuarioDiv.addEventListener("click", () => {
    // Ocultar contenedor ap6 y mostrar contenedor detalles
    document.querySelector('.container-admin').style.display = "none";
    const containerDetails = document.querySelector("#containerDetails");
    containerDetails.style.display = "block";  // Mostrar contenedor de detalles
  });

  const firstButton = document.createElement('button');
  firstButton.classList.add('access-admin');
  firstButton.textContent = 'Nuevo Usuario';

  const secondButton = document.createElement('button');
  secondButton.classList.add('close-admin');
  secondButton.textContent = 'Log out';

  divContainer.appendChild(usuarios);
  divContainer.appendChild(firstButton);
  divContainer.appendChild(secondButton);

  const userList = document.createElement('div');
  userList.classList.add('userList-admin');
  
  containerAp6.appendChild(userList);
  document.body.appendChild(containerAp6);
}

addElementAp6();

// Función para cargar los usuarios desde la API
function cargarTodosLosUsuarios() {
    // URL de la API donde están los datos
    const url = "http://localhost:3000/api/getAllUsers"; // Reemplaza con la URL correcta de tu API.

    // Hacemos la petición a la API
    fetch(url)
        .then(response => response.json()) // Convertimos la respuesta en JSON
        .then(data => {
        
            const contenedorUsuarios = document.querySelector('.userList-admin');
            
            
            contenedorUsuarios.innerHTML = '';

            data.forEach(usuario => {
             
                const usuarioDiv = document.createElement('div');
                usuarioDiv.classList.add('usuario-admin');
                usuarioDiv.id = `usuario-${usuario._id}`;
                

                const name = document.createElement('p');
                name.textContent = `Nombre: ${usuario.name}`;
                const id = document.createElement('p');
                id.textContent = `ID: ${usuario._id}`;
                const email = document.createElement('p');
                email.textContent = `Email: ${usuario.email}`;

                // Crear los botones
                const stateButton = document.createElement('button');
                stateButton.textContent = 'Inactivo';
                stateButton.classList.add('state-admin');

                const modifyButton = document.createElement('button');
                modifyButton.textContent = 'Modificar';
                modifyButton.classList.add('button-mod-admin');

                modifyButton.addEventListener("click", () => {
                    deleteContainerAP6();
                    containNewUser.style.display = "block";
                    containerAp6.style.display = "none";
                    newUserCreate();
                  });

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.classList.add('button-del-admin');

           
                usuarioDiv.appendChild(name);
                usuarioDiv.appendChild(id);
                usuarioDiv.appendChild(email);
                usuarioDiv.appendChild(stateButton);
                usuarioDiv.appendChild(modifyButton);
                usuarioDiv.appendChild(deleteButton);

                contenedorUsuarios.appendChild(usuarioDiv);

                stateButton.addEventListener('click', () => {
                    if (stateButton.textContent === 'Inactivo') {
                        stateButton.textContent = 'Activo';
                        alert('El estado cambió');
                    } else {
                        stateButton.textContent = 'Inactivo';
                    }
                });

                // Agregar funcionalidad al botón de eliminar usuario
                deleteButton.addEventListener('click', () => {
                    if (confirm('¿Está seguro de que quiere eliminar este usuario?')) {
                        // Aquí deberías agregar la lógica para eliminar el usuario
                        alert('Usuario eliminado');
                    }
                });

            });
        })
        .catch(error => {
            console.error('Error al cargar los datos', error);
        });
}
document.addEventListener('DOMContentLoaded', cargarTodosLosUsuarios);
