let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarPagina() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " item(ns)";
  valorSubtotal.innerText = subtotalInfo.valor;
}

atualizarPagina()