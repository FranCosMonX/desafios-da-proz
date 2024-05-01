create table aluno (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(50) NOT NULL,
  matricula INT NOT NULL,
  email VARCHAR(50) NOT NULL,
  endereco VARCHAR(50) NOT NULL,
  telefone VARCHAR(20) NOT NULL
);

create table emprestimo(
  codigo INTEGER PRIMARY KEY AUTOINCREMENT,
  data_hora VARCHAR(20) NOT NULL,
  matric_aluno INT REFERENCES aluno(id),
  data_Devolucao DATE NOT NULL
);

create table sessao(
  codigo INTEGER PRIMARY KEY AUTOINCREMENT,
  descricao VARCHAR(50) NOT NULL,
  localizacao VARCHAR(50) NOT NULL
);

create table livro(
  cod_livro INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo VARCHAR(50) NOT NULL,
  autor VARCHAR(50) NOT NULL,
  cod_sessao INT REFERENCES sessao(codigo)
);

create table livro_emprestimo(
  cod_livro INT REFERENCES livro(codigo),
  cod_emprestimo INT REFERENCES emprestimo(codigo)
);
