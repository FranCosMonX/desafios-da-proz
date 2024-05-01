-- ver todos os emprestimos feitos pelos alunos
select * from aluno
RIGHT join emprestimo
on aluno.matricula = emprestimo.matric_aluno;

select aluno.nome, emprestimo.codigo as codigo_emprestimo, livro_emprestimo.cod_livro as cod_livro, livro.titulo, livro.autor
from aluno
INNER join emprestimo
on emprestimo.matric_aluno = aluno.matricula
INNER join livro_emprestimo
on livro_emprestimo.cod_emprestimo = emprestimo.codigo
INNER join livro
on livro.cod_livro = livro_emprestimo.cod_livro;