// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// Mostrar popup de campo obrigatório
const mostrarPopUp = (e) => {
  const id = e.target.id
  if (id === "username")
    usernameLabel.classList.add("required-popup")
  else if (id === "email")
    emailLabel.classList.add("required-popup")

}

// Ocultar popup de campo obrigatório
const ocultarPopup = (e) => {
  const id = e.target.id
  if (id === "username")
    usernameLabel.classList.remove("required-popup")
  else if (id === "email")
    emailLabel.classList.remove("required-popup")
}

// Validar valor do input
function validarCampo(e) {
  const valor = e.target.value;
  const id = e.target.id;

  if (id === "username") {
    if (valor.length < 3) {
      usernameInput.classList.remove("correct")
      usernameInput.classList.add("error")
      usernameHelper.innerText = "minimo 3 caracteres"
      usernameHelper.classList.add("visible")
    } else {
      usernameInput.classList.remove("error")
      usernameInput.classList.add("correct")
      usernameHelper.classList.remove("visible")
    }
  } else if (id === "email") {
    if (valor.includes('@') && valor.includes(".com") && valor.length > 4) {
      emailInput.classList.remove("error")
      emailInput.classList.add("correct")
      emailHelper.classList.remove("visible")
    } else {
      emailInput.classList.remove("correct")
      emailInput.classList.add("error")
      emailHelper.innerText = "Deve ser um email"
      emailHelper.classList.add("visible")
    }
  }
}

usernameInput.addEventListener("focus", mostrarPopUp)
emailInput.addEventListener("focus", mostrarPopUp)
usernameInput.addEventListener("blur", ocultarPopup)
emailInput.addEventListener("blur", ocultarPopup)
usernameInput.addEventListener("change", validarCampo)
emailInput.addEventListener("change", validarCampo)