var express = require("express");
var router = express.Router();

var missoesController = require("../controllers/missoesController");



router.post("/Concluir", function (req, res) {
    missoesController.ConcluirMissao(req, res);
})


module.exports = router;