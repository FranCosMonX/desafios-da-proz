// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
const soMostrarPopUp = () => {
  usernameLabel.classList.add("required-popup")
}
usernameInput.addEventListener("focus", soMostrarPopUp)

// Ocultar popup de campo obrigatório
const ocultarPopup = () => {
  usernameLabel.classList.remove("required-popup")
}
usernameInput.addEventListener("blur", ocultarPopup)

// Validar valor do input
