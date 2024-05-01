--inserindo uma coluna de estado nos livros
alter TABLE livro_emprestimo
ADD column devolvido BOOLEAN;
--informando que nenhum livro foi devolvido ainda
update livro_emprestimo set devolvido = false where livro_emprestimo.devolvido is NULL;
--validando as alterações
select * from livro_emprestimo;

create table exemplo(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  livro_id INT NOT NULL
);

create trigger marcar_como_devolvido
UPDATE OF devolvido
on livro_emprestimo for EACH ROW
WHEN NEW.devolvido = 1
BEGIN
	INSERT INTO exemplo(livro_id) VALUES(NEW.cod_livro);
END

update livro_emprestimo set devolvido = true where livro_emprestimo.cod_livro = 1;
select * from exemplo;