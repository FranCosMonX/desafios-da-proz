const h2 = document.querySelector("h2")
const btn_enviar = document.querySelector("button")
const errorInput = document.querySelector("#login-usuario")
const errorText = document.querySelector(".error-text")

h2.style = `
  color: darkblue;
  font-size: 2em;
`

btn_enviar.style = `
  border:none;
`

errorInput.classList.add("error")
errorText.classList.add("visible")