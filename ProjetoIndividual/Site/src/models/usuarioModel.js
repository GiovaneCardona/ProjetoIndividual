var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, email, senha, idadeatual, jogaainda  FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, idade, Joga) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, idadeatual, jogaAinda) VALUES ('${nome}', '${email}', '${senha}', '${idade}', '${Joga}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function caracteristicas(dtnasc, CampeonatosGanhos, NivelHabilidade, QuantosAnosjoga, fkUsuario) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO caracteristicas (dtnasc, CampeonatosGanhos, NivelHabilidade, QuantosAnosjoga, fkusuario) VALUES ('${dtnasc}', '${CampeonatosGanhos}', '${NivelHabilidade}', '${QuantosAnosjoga}', ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarRank() {
    var instrucao = `
    select count(fkUsuario) * 1000 as pontuacao, nome from missoes_usuario join usuario on fkusuario = idusuario group by fkUsuario order by pontuacao desc limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarMissoes(){
    var instrucao = `
    select count(fkUsuario) as qtdmissoes, fkusuario, nome from missoes_usuario join usuario on idusuario = fkusuario  group by fkusuario order by count(fkusuario) desc limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function maior50joga(){
    var instrucao = `
    select * from usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    caracteristicas,
    mostrarRank,
    mostrarMissoes,
    maior50joga
};