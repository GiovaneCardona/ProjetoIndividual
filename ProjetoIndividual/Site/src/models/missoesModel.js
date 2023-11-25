var database = require("../database/config")

function ConcluirMissao(idUsuarioServer, idMissao) {
    console.log("Concluindo")
    var instrucao = `
    insert into missoes_usuario (fkUsuario, fkMissao) values
    (${idUsuarioServer}, ${idMissao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    ConcluirMissao
};