import './style.css'



// Función para crear los elementos del DOM
function createLoginForm() {
  const app = document.getElementById("app1");
  app.classList.add("container-access-admin");

  const header = document.createElement("header");
  header.classList.add("header-access-admin");

  const logo = document.createElement("div");
  logo.textContent = "Rush";
  logo.classList.add("logo-access-admin");

  const loginBox = document.createElement("div");
  loginBox.classList.add("login-box-access-admin");

  const h2 = document.createElement("h2");
  h2.textContent = "Acceso administradores";

  const form = document.createElement("form");

  const inputGroup = document.createElement("div");
  inputGroup.classList.add("input-group-access-admin");

  const email = document.createElement("label");
  email.textContent = "Email";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Introduce tu email";
  emailInput.id = "email-input";

  const inputGroup1 = document.createElement("div");
  inputGroup1.classList.add("input-group-access-admin");

  const password = document.createElement("label");
  password.textContent = "Password";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Introduce tu password";
  passwordInput.id = "password-input";

  const button = document.createElement("button");
  button.classList.add("btn-access-admin");
  button.textContent = "Login";

  header.appendChild(logo);
  loginBox.appendChild(h2);
  loginBox.appendChild(form);
  form.appendChild(inputGroup);
  inputGroup.appendChild(email);
  inputGroup.appendChild(emailInput);
  form.appendChild(inputGroup1);
  inputGroup1.appendChild(password);
  inputGroup1.appendChild(passwordInput);
  form.appendChild(button);
  app.appendChild(header);
  app.appendChild(loginBox);

  return form; 
}



// Función para agregar evento y manejar el login con llamada al back
function addLoginEvent(form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const emailValue = document.getElementById("email-input").value.trim();
    const passwordValue = document
      .getElementById("password-input")
      .value.trim();

    const data = { email: emailValue, password: passwordValue };

    try { //llama a mi endpoint
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) { //validaciones 
        if (result.user.role === "admin") { //si es admin ok y coge token
          console.log(result)
          const token = result.token;
          console.log(token);
          localStorage.setItem("token", token); //guardo token

          if (token) {
            const app = document.getElementById("app1");
            app.innerHTML = ""; //borra contenedor
            addElementAp6(); //llama a pantalla suso
          }
        } else {
          alert("No tienes permisos de administrador");
        }
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } catch (error) {
      alert("Error al intentar iniciar sesión");
      console.error(error);
    }
  });
}

// Inicializar las funciones
function loginAdm() {
  const form = createLoginForm(); // Crea el formulario
  addLoginEvent(form); // Agrega el evento de login
}

loginAdm();



