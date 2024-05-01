INSERT INTO aluno(nome,matricula,email,endereco,telefone)
VALUES ('João Carlos', 1234,'Jcarlos@gmail.com','Rua 13 de maio', '(11)7825-4489'),
	('José Vitor',2345,'Jvitor@gmail.com','Rua da Saudade','(11)7825-6589'),
    ('Paulo André',3456,'Pandr@gmail.com','Rua do Sol', '(11)7825-4495');
select * from aluno;

insert into emprestimo(data_hora, matric_aluno, data_devolucao)
VALUES ('13/03/2022 | 15:25',1234,'2022-03-15'),
	('15/03/2022 | 14:32',3456,'2022-03-18'),
    ('20/03/2022 | 03:51',2345,'2022-03-23');
select * from emprestimo;

INSERT into sessao(descricao,localizacao)
VALUES ('Sessao1','Partilheira1'),
	('Sessao2','Partilheira2'),
    ('Sessao3','Partilheira3');
select * from sessao;

insert into livro(titulo,autor,cod_sessao)
VALUES ('Modelo Conceitual e Diagramas ER', 'Pressman, Roger S.', 3),
	('Livro 2: Modelo Relacional e Álgebra Relacional', 'Heuser, Carlos Alberto', 1),
    ('Livro 3: Linguagem SQL', 'Beighley, Lynn',2);
select * from livro;

insert into livro_emprestimo(cod_livro,cod_emprestimo)
VALUES (3,1), (1,3), (2,2);
select * from livro_emprestimo;