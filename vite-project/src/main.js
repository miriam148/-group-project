import './style.css'


function addElementAp6() {
  const containerAp6 = document.createElement('div');
  containerAp6.classList.add('containerAdmin');

  const divContainer = document.createElement('div');
  divContainer.classList.add('user');

  containerAp6.appendChild(divContainer);

  const usuarios = document.createElement('h2');
  usuarios.classList.add('us')
  usuarios.textContent = 'Usuarios';

  const firstButton = document.createElement('button');
  firstButton.classList.add('access');
  firstButton.textContent = 'Nuevo Usuario';

  const secondButton = document.createElement('button');
  secondButton.classList.add('close');
  secondButton.textContent = 'X';

divContainer.appendChild(usuarios);
divContainer.appendChild(firstButton);
divContainer.appendChild(secondButton);

const userList = document.createElement('div');
userList.classList.add('userList');

const usuario = document.createElement('div');
usuario.classList.add('usuario');

const nombreUsuario = document.createElement('h2');
nombreUsuario.classList.add('nombre-usuario');
nombreUsuario.textContent = 'Juan Pérez';

const state = document.createElement('button');
state.textContent = 'Activo/Inactivo';
state.classList.add('state');

usuario.appendChild(nombreUsuario);
usuario.appendChild(state);
userList.appendChild(usuario);
containerAp6.appendChild(userList)

document.body.appendChild(containerAp6);
}

addElementAp6();
