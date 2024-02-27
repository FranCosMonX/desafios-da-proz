# desafios-da-proz
atividades da proz usando algumas linguagens

## desafio 1
Usando a linguagem de marcação para concluir algumas atividades, como:
- estruturar o conteúdo por TAGs
- usar o ancora para ir para outra página html
- uso de tags h1 - h6, p, ul e li para listas, header para o cabeçalho do body, section, main e footer.

## desafio 2
Introdução ao CSS:
- Criar um formulário simples com nome, email, telefone e senha.
- Linkar o file do CSS no HTML a usar algumas propriedades.

Sobre o CSS:
- O id tem maior prioridade que class;
- O código mais ao final do arquivo tem maior prioridade que os primeiros. Por exemplo, a cor seria "aqua" ao usar este código a seguir (se trocar a posição você perceberá que quanto o código mais abaixo é que irá ser mantido, seguindo o mesmo sentido de linguagens de programação - o ultimo valo instanciado é quem permanecerá):
```CSS
#ultima-caixa {
    border-color: blueviolet;
}

#ultima-caixa {
    border-color: aqua;
}
```
- Para estilizar uma tag usando um ID como referência, precisará colocar o "#" na frente. Se for referenciar um class terá que usar um ".".