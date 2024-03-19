const h2 = document.querySelector("h2")
const btn_enviar = document.querySelector("button")
const errorInput = document.querySelector("#login-usuario")
const errorText = document.querySelectorAll(".error-text")
const errorPassword = document.querySelector("#login-senha")

h2.style = `
  color: darkblue;
  font-size: 2em;
`

btn_enviar.style = `
  border:none;
`

errorInput.classList.add("error")
errorText[0].classList.add("visible")

errorInput.classList.remove("error")
errorText[0].classList.remove("visible")
errorInput.classList.add("correct")

errorPassword.classList.add("error")
errorText[1].classList.add("visible")