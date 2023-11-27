-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

/*Fazer data  hora de inserção dos dados para a tabela associativa não ter apenas dois campos*/

create database projetoindi;

use projetoindi;

create table usuario(
idUsuario int primary key auto_increment,
Nome varchar(45),
Email varchar(70),
senha varchar(45),
IdadeAtual int,
JogaAinda CHAR(3));

create table missoes(
idMissao int primary key auto_increment,
descMissao varchar(45)
);

create table missoes_usuario(
fkUsuario int,
fkMissao int,
primary key (fkusuario, fkmissao));

alter table missoes_usuario add constraint fkmissoesUser foreign key (fkUsuario) references usuario(idusuario);

alter table missoes_usuario add constraint fkmissao foreign key (fkmissao) references missoes(idmissao);

create table caracteristicas(
idCaracteristicas int primary key auto_increment,
dtnasc Date,
CampeonatosGanhos int,
quantosanosjoga int,
NivelHabilidade Varchar(45),
fkUsuario int,
foreign key (fkusuario) references usuario(idusuario));

select * from usuario;


insert into missoes_usuario values
(1,1);

desc missoes_usuario;

alter table missoes_usuario drop column pontuacaototal;

insert into missoes values
(null, 'missão 1 ping pong', null);

select * from missoes;

select * from missoes_usuario;

insert into missoes values
(null, 'missão 2 ping pong', null);

insert into missoes values
(null, 'missão 3 ping pong', null),
(null, 'missão 4 ping pong', null),
(null, 'missão 5 ping pong', null),
(null, 'missão 6 ping pong', null);

/*selects utilizados para exibição dos dados*/

INSERT INTO usuario (nome, email, senha, idadeatual, jogaAinda) VALUES ('${nome}', '${email}', '${senha}', '${idade}', '${Joga}');

SELECT idUsuario, nome, email, senha, idadeatual, jogaainda  FROM usuario WHERE email = '${email}' AND senha = '${senha}';

INSERT INTO caracteristicas (dtnasc, CampeonatosGanhos, NivelHabilidade, QuantosAnosjoga, fkusuario) VALUES ('${dtnasc}', '${CampeonatosGanhos}', '${NivelHabilidade}', '${QuantosAnosjoga}', ${fkUsuario});

select count(fkUsuario) * 1000 as pontuacao, nome from missoes_usuario join usuario on fkusuario = idusuario group by fkUsuario order by pontuacao desc limit 5;

select count(fkUsuario) as qtdmissoes, fkusuario, nome from missoes_usuario join usuario on idusuario = fkusuario  group by fkusuario order by count(fkusuario) desc limit 5;

select * from usuario;
