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
state.textContent = 'Inactivo';
state.classList.add('state');

const buttonMod = document.createElement('button');
buttonMod.textContent = 'Modificar';
buttonMod.classList.add('button-mod');

const buttonDel = document.createElement('button');
buttonDel.textContent = 'Eliminar';
buttonDel.classList.add('button-del');

usuario.appendChild(nombreUsuario);
usuario.appendChild(state);
usuario.appendChild(buttonMod);
usuario.appendChild(buttonDel);
userList.appendChild(usuario);
containerAp6.appendChild(userList)

document.body.appendChild(containerAp6);
}

addElementAp6();

//funcion llamada base de datos para recibir los nombres

// funcion cree los contenedores de cada usuario, con datos concretos

// boton activo/inactivo funcionallidad para que cambie el estado en la base de datos
const stateButton = document.querySelector('.state');

stateButton.addEventListener('click', () => {
    if (stateButton.textContent === 'Inactivo') {
        stateButton.textContent = 'Activo';
        alert('El estado cambió')
    } else {
        stateButton.textContent = 'Inactivo';
    }
});

stateButton.addEventListener( 'click', () => {
    if (stateButton.classList.contains('state')) {
        stateButton.classList.remove('state');
        stateButton.classList.add('state-change');
    } else {
        stateButton.classList.remove('state-change');
        stateButton.classList.add('state');
    }
})


// añadir boton eliminar y modificar, crear alertas para cada uno
const alertDelete = document.querySelector('.button-del');

alertDelete.addEventListener('click', () =>
{
    alert('¿Está seguro de que quiere eliminar este usuario?')
})

// añadir funcion para que al hacer click en cada usuario se muestre una vista detalle


// ejemplo funcion para unir con la parte de Ana G