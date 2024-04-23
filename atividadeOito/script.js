const h1 = document.getElementById("titulo")
const a = document.querySelector("a")
const ul = document.querySelector("ul")
const ol = document.querySelector("ol")

a.innerText = "link"
h1.innerText = "Título 1"

ul.innerHTML = `
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
`

ol.innerHTML = `
<a href=""><li>Americanas</li></a>
<a href=""><li>Amazon</li></a>
<a href=""><li>Ali express</li></a>
`