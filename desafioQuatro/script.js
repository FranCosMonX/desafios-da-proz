const logo = document.getElementById("logo")
console.log(logo)

const classes_post_autor = document.getElementsByClassName("post-autor")
console.log(classes_post_autor)

const post_dois = document.getElementById("post02")
console.log(post_dois)

const formulario = document.getElementById("formulario")
console.log(formulario)

const todos_os_posts = document.getElementById("posts")
console.log(todos_os_posts)

const data_dos_posts = document.getElementsByClassName("post-data")
console.log(data_dos_posts)

const texto_dos_posts = document.getElementsByClassName("post-texto")
console.log(texto_dos_posts)

const lista_redes_sociais = document.getElementsByClassName("lista_redes")
console.log(data_dos_posts)

const testo_post_dois = document.querySelector("#post02 .post-texto")
console.log(testo_post_dois)

const lista_redes_do_footer = document.querySelector("footer .lista_redes")
console.log(lista_redes_do_footer)

const link_do_texto_post_um = document.querySelector("#post01 .post-texto a")
console.log(link_do_texto_post_um)

const pal_negrito_dentro_texto_post_dois = document.querySelector("#post02 .post-texto strong")
console.log(pal_negrito_dentro_texto_post_dois.textContent)

const input_nome_formulario = document.querySelector("#formulario #nome")
console.log(input_nome_formulario)

const links_redes_do_footer = document.querySelectorAll("footer .lista-redes a")
console.log(links_redes_do_footer)

const links_navegacao = document.querySelectorAll("header .elementos_nav a")
console.log(links_navegacao)

const autor_e_data = document.querySelectorAll(".post .post-autor strong,.post .post-data strong")

function imprimeTexto(e) {
  console.log("A seguir será impresso " + e.length + " textos")
  for (let i = 0; i < e.length; i++) {
    console.log(e[i].innerText)
  }
}

imprimeTexto(autor_e_data)