-- criando a tabela cliente
create table cliente (
  cpf_cnpj INTEGER PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  dt_nasc DATE NOT NULL
);

create table produto(
  codigo INTEGER PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  peso FLOAT NOT NULL
);
alter table produto
add COLUMN preco FLOAT NOT NULL;

create TABLE vendas(
  id INTEGER AUTO_INCREMENT,
  cliente_id INTEGER NOT NULL,
  produto_id INTEGER NOT NULL,
  quantidade INTEGER NOT NULL,
  CONSTRAINT fk_cliente FOREIGN KEY(cliente_id) REFERENCES cliente(cpf_cnpj),
  CONSTRAINT fk_produto FOREIGN KEY(produto_id) REFERENCES produto(codigo)
)

insert into cliente (cpf_cnpj, nome, dt_nasc) VALUES (1234, "Julio Cezar", "2000-08-19"),
	(4567,"Maria Clara", "2001-09-01"), (7890,"Julia Sousa", "1995-02-19");
select * from cliente;
insert into produto (codigo, nome, peso, preco) values (1,"Feijão",1.0, 5.47),(2,"arroz", 5,30.74),
	(3,"pipoca" , 0.250, 1.25);
select * from produto;

insert into vendas (cliente_id, produto_id, quantidade) values (1234,2,3),(4567,1,4),(4567,3,2);
select * from vendas;

-- obtendo a quantidade de clientes cadastrados
CREATE function getQuantidadeClientes() returns INT
BEGIN
	declare quantidade_clientes INT;
    SELECT (SELECT COUNT(1) from cliente) into quantidade_clientes;
    return quantidade_clientes;
END

-- resolvendo atividade
create function getTotalProdutosVendidos() RETURNS INTEGER DETERMINISTIC
BEGIN
	DECLARE total INTEGER;
	SELECT SUM(quantidade) INTO total FROM vendas;
	RETURN total;
END

-- obtendo o valor total ganho no dia
create function getValorTotal() returns FLOAT
BEGIN
	declare valor_total FLOAT;
    select (select sum(produto.preco * vendas.quantidade) 
    	FROM vendas,produto
        WHERE vendas.produto_id = produto.codigo) into valor_total;
    return valor_total ;
END;

SELECT getQuantidadeClientes() as qtdClientesCadastrados,
	getTotalProdutosVendidos() as qtd_produtos_vendidos,
	getValorTotal() as valor_total_arrecadado;
