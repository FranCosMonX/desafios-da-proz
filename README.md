# desafios-da-proz
atividades da proz usando algumas linguagens

## atividade 1
**Descrição:** Crie o corpo de uma página sobre lugares turísticos na Europa. Nela, você deve focar apenas no conteúdo da página, adicionando textos, cards, imagens, entre outros.

**Limitações:** Construa apenas o html.

*Fontes:*
    - [Site sobre pontos turisticos na europa](https://turismo.eurodicas.com.br/pontos-turisticos-na-europa/)
    - [Imagem do mural da página inicial](https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Faviao-ceu&psig=AOvVaw3q4vXQRBYjPeOD6RuSu16I&ust=1709565411543000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPj5lcqx2IQDFQAAAAAdAAAAABAE)
    - [mapa da Europa](https://mundoeducacao.uol.com.br/geografia/o-continente-europeu.htm)


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