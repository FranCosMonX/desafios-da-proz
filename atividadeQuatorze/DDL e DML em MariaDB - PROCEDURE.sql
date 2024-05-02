create table produto(
  codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(20) NOT NULL,
  preco FLOAT NOT NULL
);

create table produto_vendido(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  codigo_produto INTEGER REFERENCES produto(codigo),
  quantidade INTEGER NOT NULL
);

INSERT INTO produto(nome, preco)
VALUES ('feijão', 5.26),
		('arroz 5 kg', 30.15),
        ('batata 1 kg', 5.15),
        ('milho de pipoca', 1.75);
select * from produto;

insert INTO produto_vendido(codigo_produto,quantidade)
VALUES (1, 47), (2,13), (4,72), (3,57);
select * from produto_vendido;

create PROCEDURE calcular_qtd_produtos(OUT param1 varchar(50) )
BEGIN
	select CONCAT('A quantidade de produtos vendidos é: ', SUM(quantidade)) into param1 from produto_vendido;
END;

call calcular_qtd_produtos(@quantidadeP);
select @quantidadeP;

