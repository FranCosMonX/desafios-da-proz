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
usernameInput.addEventListener("change", validarUsername)