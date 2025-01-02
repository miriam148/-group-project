import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
/*hago un objeto con los correos de los admi y sus contraseñas*/
const users = {
    "usuario1@gmail.com" : "contraseña1",
    "usuario2@gmail.com" : "contraseña2",
    "usuario3@gmail.com" : "contraseña3",
    "usuario4@gmail.com" : "contraseña4",
    "usuario5@gmail.com" : "contraseña5",
    "usuario6@gmail.com" : "contraseña6"
}

/*añado y creo elem en el dom*/
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const loginButton = document.querySelector(".btn")

const error = document.createElement("p")
error.textContent = "Correo o contraseña incorrectos"
error.style.display = "none"
document.querySelector(".login-box").appendChild(error)


/*evento click */
loginButton.addEventListener("click", (event) => {
    event.preventDefault()
    if (users[emailInput.ValueMax.trim()] === passwordInput.ValueMax.trim()) {
    window.location.href = "otraPagina.html" 
    }
    else {
       
        alert("correo o contraseña incorrectos")
    }
})