import './style.css'


/*hago un objeto con los correos de los admi y sus contraseñas*/
const users = {
  "anam@gmail.com": "anam",
  "anag@gmail.com": "anag",
  "emmanuel@gmail.com": "emmanuel",
  "jesus@gmail.com": "jesus",
  "edey@gmail.com": "edey",
  "miriam@gmail.com": "miriam",
};


function loginAdm () {

    
    const app = document.getElementById("app1")
    app.classList.add("container-access-admin")

    const header = document.createElement("header")
    header.classList.add("header-access-admin")

    const logo = document.createElement("div")
    logo.textContent = "Rush"
    logo.classList.add("logo-access-admin")

    const loginBox = document.createElement("div")
    loginBox.classList.add("login-box-access-admin")

    const h2 = document.createElement("h2")
    h2.textContent = "Acceso administradores"

    const form = document.createElement("form")

    const inputGroup = document.createElement("div")
    inputGroup.classList.add("input-group-access-admin")

    const email = document.createElement("label")
    email.textContent = "Email"

    const placeHolder = document.createElement("input")
    placeHolder.type = "email"
    placeHolder.placeholder = "Introduce tu email"

    const inputGroup1 = document.createElement("div")
    inputGroup1.classList.add("input-group-access-admin")

    const password = document.createElement("label")
    password.textContent = "Password"

    const placeHolder1 = document.createElement("input")
    placeHolder1.type = "password"
    placeHolder1.placeholder = "Introduce tu password"

    const button = document.createElement("button")
    button.classList.add("btn-access-admin")
    button.textContent = "Login"

   
    header.appendChild(logo)
    loginBox.appendChild(h2)
    loginBox.appendChild(form)
    form.appendChild(inputGroup)
    inputGroup.appendChild(email)
    inputGroup.appendChild(placeHolder)
    form.appendChild(inputGroup1)
    inputGroup1.appendChild(password)
    inputGroup1.appendChild(placeHolder1)
    form.appendChild(button)
    app.appendChild(header)
    app.appendChild(loginBox)
    
   //evento click con verificación de si existe el admin e integración back
   //TENGO QUE METER LOS TOKENS????

   form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const emailValue = placeHolder.value.trim();
    const passwordValue = placeHolder1.value.trim();
  
    const data = { email: emailValue, password: passwordValue };
  
    try {
      const response = await fetch("http://localhost:3000/api/login", data);
      if (response.success) {
        if (response.role === "admin") {
          alert("Acceso concedido: Eres administrador");
        } else {
          alert("No tienes permisos de administrador");
        }
      } else {
        alert("Correo o contraseña incorrectos");
      }
      const result = await response.json()
      const token = result.token
      if( token ) {
        //si existe token aqui se debe añadir la redirección a la landing o dnd sea
      }
    } catch (error) {
      alert("Error al intentar iniciar sesión");
    }
  });
 
}

loginAdm()






// form.addEventListener("submit", (event) => {
//   event.preventDefault()

//   const emailValue = placeHolder.value.trim()
//   const passwordValue = placeHolder1.value.trim()

//   const user = users[emailValue]


//   if (user && user.password === passwordValue) {
//     if(user.role === "admin") {
//       alert("acceso concedido")
    
//   } else {
//     alert("acceso denegado");
//   }
// }

// })