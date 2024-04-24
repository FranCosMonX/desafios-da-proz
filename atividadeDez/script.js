const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.id = "titulo"
h1.innerText = "Produtos deliciosos"

const objeto = document.createElement("div")
objeto.innerHTML = `
<p>produto: Milk Shake</p>
<p>valor: R$13,00</p>
<p>Descrição: Milk shake de ovomaltine vendido e entregue pelo Bob's</p>
<img src="https://www.portalintelectual.com.br/wp-content/uploads/2016/09/Depositphotos_9640952_original.jpg"
  alt="foto de um milk shake" />
`
body.appendChild(h1)
body.appendChild(objeto)