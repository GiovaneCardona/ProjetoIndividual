var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
                    // transforma JSON em String


                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        if (resultadoAutenticar.length > 0) {
                            res.json({
                                idUsuario: resultadoAutenticar[0].idUsuario,
                                email: resultadoAutenticar[0].email,
                                nome: resultadoAutenticar[0].nome,
                                senha: resultadoAutenticar[0].senha,
                                idade: resultadoAutenticar[0].idadeinicio

                            });
                        } else {
                            res.status(204).json({ aquarios: [] });
                        }

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var idade = req.body.idadeServer;
    var nome = req.body.nomeServer;
    var Joga = req.body.jogaAindaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (Joga == undefined) {
        res.status(400).send("Seu joga está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, idade, Joga)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function caracteristicas(req, res) {
    console.log(req.body)
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var dtnasc = req.body.dtnasc;
    var CampeonatosGanhos = req.body.CampeonatosGanhos;
    var QuantosAnosJoga = req.body.QuantosAnosJoga;
    var NivelHabilidade = req.body.NivelHabilidade;
    var fkUsuario = req.body.fkUsuario;

    // Faça as validações dos valores
    if (dtnasc == undefined) {
        console.log('dtnasc undefined')
        res.status(400).send("Sua dtnasc está undefined!");
    } else if (CampeonatosGanhos == undefined) {
        console.log('camps undefined')
        res.status(400).send("Seu Campeonatos Ganhos está undefined!");
    } else if (NivelHabilidade == undefined) {
        console.log('habilidade undefined')
        res.status(400).send("Seu Nivel de habilidade está undefined!");
    } else if (fkUsuario == undefined) {
        console.log('fkuser undefined')
        res.status(400).send("Sua fkUsuario está undefined!");
    } else if (QuantosAnosJoga == undefined) {
        console.log('anos undefined')
        res.status(400).send("Seu tempo de jogo está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.caracteristicas(dtnasc, CampeonatosGanhos, NivelHabilidade, QuantosAnosJoga, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function mostrarRank(req, res) {

        usuarioModel.mostrarRank()
            .then(
                function (resultado) {
                    res.json(resultado)
                    if(resultado.ok){
                        console.log(resultado.json());
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    function mostrarMissoes(req, res) {

        usuarioModel.mostrarMissoes()
            .then(
                function (resultado) {
                    res.json(resultado)
                    if(resultado.ok){
                        console.log("aaaaaaaaaaaaaa", resultado.json());
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    function maior50joga(req, res) {

        usuarioModel.maior50joga()
            .then(
                function (resultado) {
                    res.json(resultado)
                    if(resultado.ok){
                        console.log("aaaaaaaaaaaaaa", resultado.json());
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    autenticar,
    cadastrar,
    caracteristicas,
    mostrarRank,
    mostrarMissoes,
    maior50joga
}