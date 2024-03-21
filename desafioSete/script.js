let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
const btn_incremento = document.getElementById("btn-adicionar-produto-01");
const btn_decrementar = document.getElementById("btn-subtrair-produto-01")
const input_Quantidade_produto = document.getElementById("quantidade-produto-01");
const valor_produto = 11.66;

let subtotalInfo = {
  quantidade: 0,
  valor: 0,
};

function incrementar() {
  subtotalInfo.quantidade += 1;
  subtotalInfo.valor = valor_produto * subtotalInfo.quantidade;
  atualizarPagina();
}

function decrementar() {
  if (subtotalInfo.quantidade <= 0) return;
  subtotalInfo.quantidade -= 1;
  subtotalInfo.valor = valor_produto * subtotalInfo.quantidade;
  atualizarPagina();
}

function atualizarPagina() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " item(ns)";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
  input_Quantidade_produto.value = subtotalInfo.quantidade;
}

btn_decrementar.addEventListener("click", decrementar);
btn_incremento.addEventListener("click", incrementar);
atualizarPagina();