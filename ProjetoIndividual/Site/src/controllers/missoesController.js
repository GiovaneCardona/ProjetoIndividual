var missaoModel = require("../models/missoesModel");

function ConcluirMissao(req, res) {

    var idUsuarioServer = req.body.idUsuarioServer;
    var idMissao = req.body.idMissao;

    missaoModel.ConcluirMissao(idUsuarioServer, idMissao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao registrar a conquista! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

        



    //  if (resultado.length > 0) {
    //         res.status(200).json(resultado);
    //         console.log(resultado)
    //     } else {
    //         res.status(204).send("Nenhum resultado encontrado!")
    //     }
    // }).catch(function (erro) {
    //     console.log(erro);
    //     console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
    //     res.status(500).json(erro.sqlMessage);

}


module.exports = {
    ConcluirMissao
}