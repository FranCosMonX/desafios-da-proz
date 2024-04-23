numerosDaSorte = [37, 14, 26, 5, 94, 87]

for(let i in numerosDaSorte){
  if(numerosDaSorte[i] % 2 === 0 && numerosDaSorte[i] < 50)
    console.log("O numero " + numerosDaSorte[i] + " é par e menor que 50.")
  else if (numerosDaSorte[i] < 50)
    console.log("O numero " + numerosDaSorte[i] + " é menor que 50.")
  else if(numerosDaSorte[i] > 50)
    console.log("O numero " + numerosDaSorte[i] + " é maior que 50.")
  else
    console.log("Caso desconhecido")
}