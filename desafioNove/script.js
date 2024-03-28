// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// Mostrar popup de campo obrigatório
const soMostrarPopUp = () => {
  usernameLabel.classList.add("required-popup")
}
const soMostrarPopUpEmail = () => {
  emailLabel.classList.add("required-popup")
}

// Ocultar popup de campo obrigatório
const ocultarPopup = () => {
  usernameLabel.classList.remove("required-popup")
}
const ocultarPopopEmail = () => {
  emailLabel.classList.remove("required-popup")
}

// Validar valor do input
function validarUsername(e) {
  const tamanho = e.target.value;
  console.log(e)

  if (tamanho.length < 3) {
    usernameInput.classList.remove("correct")
    usernameInput.classList.add("error")
    usernameHelper.innerText = "minimo 3 caracteres"
    usernameHelper.classList.add("visible")
  } else {
    usernameInput.classList.add("error")
    usernameInput.classList.add("correct")
    usernameHelper.innerText = "minimo 3 caracteres"
    usernameHelper.classList.remove("visible")
  }
}

function validarEmail(e) {
  const string = e.target.value

  if (string.includes('[a-zA-Z.]*[@gmail.com]')) {
    console.log("funfo")
  } else {
    console.log("nao funfo")
  }
}

usernameInput.addEventListener("focus", soMostrarPopUp)
emailInput.addEventListener("focus", soMostrarPopUpEmail)
usernameInput.addEventListener("blur", ocultarPopup)
emailInput.addEventListener("blur", ocultarPopopEmail)
usernameInput.addEventListener("change", validarUsername)
emailInput.addEventListener("change", validarEmail)