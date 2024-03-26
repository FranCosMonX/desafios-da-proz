const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkMeusDados = document.getElementById("link-perfil-dados");

const umPressionado = () => { navPerfil.style.display = "block" }
const zeroPressionado = () => { navPerfil.style.display = "none" }

linkPerfil.addEventListener("mouseover", umPressionado)

document.addEventListener("keydown", (e) => {
  const keyPressUm = e.key === "1"
  const keyPressDois = e.key === "0"
  const menuIsOpen = navPerfil.style.display === "block"

  console.log(e.key)
  if (keyPressUm) {
    if (menuIsOpen) {
      linkMeusDados.click();
    } else {
      console.log(`Botao "um" pressionado`)
      umPressionado()
    }
  } else if (keyPressDois) {
    console.log(`Botao "zero" pressionado`)
    zeroPressionado()
  }
})