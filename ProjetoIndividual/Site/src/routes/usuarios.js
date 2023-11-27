var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/caracteristicas", function (req, res) {
    usuarioController.caracteristicas(req, res);
});

router.get("/mostrarRank", function (req, res) {
    usuarioController.mostrarRank(req, res);
});
router.get("/mostrarMissoes", function (req, res) {
    usuarioController.mostrarMissoes(req, res);
});

router.get("/maior50joga", function (req, res) {
    usuarioController.maior50joga(req, res);
});



module.exports = router;