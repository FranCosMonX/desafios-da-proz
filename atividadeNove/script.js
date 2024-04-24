function mostra_possibilidades(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} - ${b} = ${a - b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  if (b !== 0) console.log(`${a} / ${b} = ${a / b}`);
}

mostra_possibilidades(4, 5);