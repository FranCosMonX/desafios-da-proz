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

## atividade 2
A cidade do Recife é uma das mais famosas do Nordeste, ela possui diversos pontos turísticos e um deles é o Marco Zero. Sabendo disso, crie uma página HTML, falando sobre esse ponto turístico de acordo com os seguintes pré-requisitos: 

1. A página precisa ter cabeçalho, conteúdo e rodapé;
2. A página precisa ter imagens; 
3. Use a tag de semântica textual inline.

*fontes:*
- [www.viajali.com.br - imagens e conteúdos](https://www.viajali.com.br/marco-zero-recife/)

## atividade 3
Usando a mesma página criada na atividade anterior, criar duas novas páginas html com cada uma falando sobre outros pontos turísticos de Recife Antigo. As páginas devem contém um link que leva o usuário às demais páginas.
*fontes:*
- [www.viajali.com.br - imagens e conteúdos](https://www.viajali.com.br/recife-antigo/#:~:text=Recife%20antigo%3A%20o%20que%20fazer%201%201.%20Pra%C3%A7a,Olinda%20Andr%C3%A9%20Luiz%20Lopes%20Vieira%20...%20Mais%20itens)

## desafio 2
Introdução ao CSS:
- Criar um formulário simples com nome, email, telefone e senha.
- Linkar o file do CSS no HTML a usar algumas propriedades.

Sobre o CSS:
- O id tem maior prioridade que class;
- O código mais ao final do arquivo tem maior prioridade que os primeiros. Por exemplo, a cor seria "aqua" ao usar este código a seguir (se trocar a posição você perceberá que quanto o código mais abaixo é que irá ser mantido, seguindo o mesmo sentido de linguagens de programação - o ultimo valor instanciado é quem permanecerá, mas isto pode não funcionar quando está configurando o display de um grupo de elementos.):
```CSS
#ultima-caixa {
    border-color: blueviolet;
}

#ultima-caixa {
    border-color: aqua;
}
```
- Para estilizar uma tag usando um ID como referência, precisará colocar o "#" na frente. Se for referenciar um class terá que usar um ".".

## desafio 3

Fazer o html ficar semelhante ao da imagem seguindo as limitações propostas pelo tutor.
![Objetivo](./images/imagem.webp)

## atividade 4

Construir um estilo paras as três páginas implementados (da atividade 3).

## atividade 5

Brincar com o joguinho FLEXBOX FROGGY [link](https://flexboxfroggy.com/) e colocar seu código no vscode.

## prática guiada 1

Estilizar o html já criado pela plataforma, de acordo com o que foi pedido.
- **Desafio:** - aplicar a responsividade.

## desafio 4 
Com HTML e CSS já fornecido, faça:
- crie um arquivo .js
- conecte esse arquivo ao html do projeto
- crie uma variável para manipular a logo da página
- crie outra variável para manipular os elementos com a classe "post-autor"
- parágrafo contendo o texto do segundo post
- lista de redes dentro do footer
- Crie uma função que receba um NodeList e imprima no console a propriedade innerText de cada elemento

Desafio extra: crie novas variáveis para manipular os seguintes elementos:

- post 02
- formulario
- section com ambos os posts
- datas dos posts
- textos dos posts
- listas com links das redes sociais
- O link dentro do texto do primeiro post
- A palavra em negrito dentro do texto do segundo post
- O input de nome do formulário
- Os links da lista de redes no final da página
- Os links da navegação (só os links, não os elementos de lista)
- Os 4 "Autor:" e "Data:" em negrito nos dois posts'
- Como parte da execução da função, adicione uma frase que informe a quantidade de elementos da lista

# desafio 5

- crie um elemento article
- recorte para esse elemento o conteúdo HTML do #post-1
- adicione o elemento à tag main
- crie um novo elemento article
- use template strings para substituir o titulo e subtitulo do conteúdo anterior pelos dados correspondentes no segundo item do arrayPostagens
- adicione o elemento à tag main
- imprima todas as postagens de forma a não repetir código.

Desafio extra:

- adicione o id "post-2" ao elemento criado
- substitua também os conteúdos de data e texto

# desafio 6

- remova as classes error, correct e visible dos elementos do formulário
- crie um arquivo script.js, com uma variável para manipular o elemento h2
- altere a cor e o tamanho da fonte desse elemento usando a propriedade style

Imaginando que alguém tenha digitado um nome de usuário inválido no formulário, faça o seguinte:

- crie uma variável para manipular o input do nome de usuário
- adicione a classe error a esse elemento
- repetindo o exemplo das etapas anteriores, adicione a classe visible ao parágrafo da mensagem de erro

Imagine que o mesmo visitante da prática anterior tenha corrigido o nome de usuário, porém preenchido a senha incorretamente:

- remova a classe error do input de usernamen, adicionando em seguida a classe correct
- remova a classe visible do elemento da mensagem de erro
- seguindo o mesmo padrão, faça as mudanças de estilização apropriadas no campo da senha

Desafio extra:

- seguindo o mesmo padrão, faça alterações na estilização do botão de envio do formulário

# desafio 7
-  Refatore o código, movendo as linhas 9 e 10 para uma função que atualiza a página com os valores da variável subtotalInfo
- crie variáveis para manipular o botão de adicionar e o input da quantidade do produto
- faça com que a função de atualizar a página atualize também o valor do input
- crie uma função para incrementar a quantidade do produto no carrinho. Ela deve atualizar os valores da variável subtotalInfo e, em seguida, atualizar a página para que ela exiba os novos valores
use a função addEventListener para que a função seja chamada no clique do botão
- implementar a logica do btn decrementar.

Desafio extra: faça com que o subtotal seja sempre exibido com duas casas decimais

# desafio 8

- chame a função window.addEventListener, passando o evento 'keyup' como primeiro argumento, e uma arrow function como segundo argumento

- atribua um parâmetro evento à arrow function, e imprima no terminal o valor desse parâmetro

- use uma estrutura condicional para imprimir uma mensagem quando a tecla pressionada tem o valor "1" para a propriedade key

- dentro do bloco condicional, aplique agora o display block ao elemento navPerfil usando a propriedade style

Desafio extra: 

- ocultar a barra de navegação secundária usando a tecla "0"