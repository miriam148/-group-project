import './style.css'


function addElementAp6() {
  const containerAp6 = document.createElement('div');
  containerAp6.classList.add('container-admin');

  const divContainer = document.createElement('div');
  divContainer.classList.add('user-admin');

  containerAp6.appendChild(divContainer);

  const usuarios = document.createElement('h2');
  usuarios.classList.add('us-admin')
  usuarios.textContent = 'Usuarios';

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

const usuario = document.createElement('div');
usuario.classList.add('usuario-admin');

const nombreUsuario = document.createElement('h2');
nombreUsuario.classList.add('nombre-usuario-admin');
nombreUsuario.textContent = 'Juan Pérez';

const state = document.createElement('button');
state.textContent = 'Inactivo';
state.classList.add('state-admin');

const buttonMod = document.createElement('button');
buttonMod.textContent = 'Modificar';
buttonMod.classList.add('button-mod-admin');

const buttonDel = document.createElement('button');
buttonDel.textContent = 'Eliminar';
buttonDel.classList.add('button-del-admin');

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
const stateButton = document.querySelector('.state-admin');

stateButton.addEventListener('click', () => {
    if (stateButton.textContent === 'Inactivo') {
        stateButton.textContent = 'Activo';
        alert('El estado cambió')
    } else {
        stateButton.textContent = 'Inactivo';
    }
});

stateButton.addEventListener( 'click', () => {
    if (stateButton.classList.contains('state-admin')) {
        stateButton.classList.remove('state-admin');
        stateButton.classList.add('state-change-admin');
    } else {
        stateButton.classList.remove('state-change-admin');
        stateButton.classList.add('state-admin');
    }
})


// añadir boton eliminar y modificar, crear alertas para cada uno
const alertDelete = document.querySelector('.button-del-admin');

alertDelete.addEventListener('click', () =>
{
    alert('¿Está seguro de que quiere eliminar este usuario?')
})

// añadir funcion para que al hacer click en cada usuario se muestre una vista detalle


// ejemplo funcion para unir con la parte de Ana G