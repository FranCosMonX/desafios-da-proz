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

# atividade 6

Acesse o site [OneCompiler](https://onecompiler.com/), copie e cole o array 'numerosDaSorte', e logo em seguida escreva o código necessário para avaliar cada elemento do array e imprimir uma frase seguindo algum dos seguintes três modelos:

- X é par e menor que 50
- X é menor que 50
- X é maior que 50

```
numerosDaSorte = [37, 14, 26, 5, 94, 87]  
```

# atividade 7

Crie um novo projeto com dois arquivos: index.html e script.js. No arquivo HTML, defina a estrutura padrão HTML, e inclua uma tag h1 com o título "Conexão com um arquivo JavaScript". No arquivo JavaScript defina uma função que imprima a mensagem "Conexão feita com sucesso!" no terminal, e execute ela três vezes. Finalmente, conecte ambos arquivos, abra seu projeto no navegador usando a extensão LiveServer e confira se a mensagem foi impressa três vezes no terminal.

# atividade 8

Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira a estrutura base HTML e dentro da tag 'body' inclua quatro tags vazias: h1, ul, a, ol. Adicione o atributo id="titulo" à tag h1, o atributo href="https://prozeducacao.com.br" à tag 'a', e o atributo id="lista-ordenada" à tag 'ol'. Na sequência, realize a conexão entre o arquivo HTML e o arquivo JavaScript.

No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista ordenada.  

# atividade 9

Acesse o site [OneCompiler](https://onecompiler.com/) e crie uma função que recebe dois números como parâmetros e imprime quatro frases no terminal (a partir de template strings) demonstrando as quatro operações básicas aplicadas a ambos números. Exemplo: 4 + 5 = 9; 4 - 5 = -1; 4 x 5 = 20; 4 / 5 = 0.8.

# atividade 10

Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.

Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo', e um elemento que represente um produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico.

# desafio 8

- chame a função window.addEventListener, passando o evento 'keyup' como primeiro argumento, e uma arrow function como segundo argumento
- atribua um parâmetro evento à arrow function, e imprima no terminal o valor desse parâmetro
- use uma estrutura condicional para imprimir uma mensagem quando a tecla pressionada tem o valor "1" para a propriedade key
- dentro do bloco condicional, aplique agora o display block ao elemento navPerfil usando a propriedade style
- eclare uma variável para guardar o elemento <a> com id link-perfil-dados
- escreva uma segunda estrutura condicional dentro da anterior, que também verifique se o display da navegação secundária é block. Use do método click( ), nativo do JavaScript, para clicar no elemento

Desafio extra: 

- ocultar a barra de navegação secundária usando a tecla "0"
- retornar para a página principal apertando "Backspace"

# desafio 9

- Apague as classes dos estilos dinâmicos do arquivo HTML (correct, error, visible e required-popup)
- adicione um eventListener ao usernameInput, passando como primeiro argumento o evento "focus" e como segundo argumento uma função que adicione a classe required-popup ao usenameLabel
- adicione outro eventListener ao mesmo elemento, dessa vez com o evento "blur" e removendo a classe "required-popup"

adicione um eventListener ao usernameInput, passando como primeiro argumento o evento "change" e como segundo argumento uma função com um parâmetro "evento". Essa função deve:
- imprimir no console o valor da propriedade evento.target.value
- verificar o valor do input possui no mínimo 3 caracteres, imprimindo mensagens diferentes para cada caso
- adicionar ou remover as classes dinâmicas apropriadas nos elementos usernameInput e usernameHelper

- crie variáveis para manipular os elementos label, input e .helper-text do campo email
- adicione listeners para os eventos de focus, blur e change do input de email. O endereço de email será considerado válido se contiver @ e .com

Desafio extra: refatore as funções de exibir/ocultar o popup para que elas possam ser reaproveitadas para o input de email

## Conceitos

### Banco de Dados

* Normalização:
  - 1ª forma normal: Ter um valor atômico em cada tabela e não aceitar uma lista de valores em uma mesma tabela.
  - 2ª forma normal: serve para que cada coluna se relacione diretamente com sua chave primária e não dependa de outra coluna.
  - 3ª forma normal: não pode haver dados que dependem de chaves diferentes em uma mesma tabela (chave primaria e chave estrangeira). Mas é essencial que já esteja cumprindo as normas 1 e 2.

* Ferramenta para aprimorar os estudos com algebra relacional e SQL: [Relax](https://dbis-uibk.github.io/relax/calc/gist/41cf5ce652756d9331eec7562644e074/imdbsample/0)

* Ferramenta para aprimorar os estudos com SQL usando alguns BDs, como PostgreeSQL, MariaDB, SQLite e MS SQL: [sqliteonline.com](https://sqliteonline.com/)

# atividade 11

Construir tabelas no Banco de Dados Relacional. Foi visto, em aulas a sintase de dois SGBDs: SQLite e PostgreeSQL usando DDL para criação e edição da estrutura do Banco de Dados e DML para modificar dados contidos no Banco de dados.

# atividade 12

Fazer consultas no Banco de Dados em tabelas que possuam chave estrangeira e chave primaria. Em resumo foi feito em dois cenários: relacionamento de (1,n) e (m,n). É recomendado que siga os seguintes pontos, mas as consultas estão sendo feitas levando em consideração o Banco de Dados construído na atividade anterior:

- crie uma base de dados;
- crie tabelas nessa base de dados;
- em cada tabela, adicione atributos;
- insira dados em cada tabela;
- utilize comandos Joins para realizar consultas nas tabelas.

# atividade 13

Fazer o mesmo processo de criação e preenchimento de dados, como feito na atividade anterior, a fim de construir um trigger e usá-lo para realizar alguma ação. O Banco de Dados a ser usado, assim como na atividade anterior, será aquele que foi construído na atividade 11. Foi visto a criação de Trigger com a sintaxe dos SGBDs MySQL e SQLite.

# atividade 14

Uma empresa de vendas tem um banco de dados com informações sobre os seus produtos. Ela precisa criar um relatório que faça um levantamento diário da quantidade de produtos comprados por dia. Para ajudar a empresa, crie um `procedure` para agilizar esse processo.
* Atividade respondida usando a sintaxe do MariaDB.

# Atividade 15

Criar uma função para somar todos os clientes que foram cadastrados na loja durante um dia na loja que possui o BD para fazer o controle de vendas de produtos e de cadastros de cliente. Como desafio, foi implementado uma função para somar a quantidade de produtos vendidos e valor arrecadado durante o mesmo dia, elvando em consideração um exemplo simples envolvendo as seguintes tabelas: cliente, produto e vendas.