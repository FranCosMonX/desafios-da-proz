const voltar = document.getElementById("pagina-principal")

document.addEventListener("keydown", (e) => {
  console.log(e.key)
  if (e.key === "Backspace") voltar.click()
})