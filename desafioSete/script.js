let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
const btn_incremento = document.getElementById("btn-adicionar-produto-01");
const input_Quantidade_produto = document.getElementById("quantidade-produto-01");
const valor_produto = 11.66;

let subtotalInfo = {
  quantidade: 0,
  valor: 0,
};

function incrementar() {
  subtotalInfo.quantidade += 1;
  subtotalInfo.valor = (valor_produto * subtotalInfo.quantidade).toFixed(2);
  atualizarPagina();
}

function atualizarPagina() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " item(ns)";
  valorSubtotal.innerText = subtotalInfo.valor;
  input_Quantidade_produto.value = subtotalInfo.quantidade;
}

atualizarPagina()

btn_incremento.addEventListener("click", incrementar)