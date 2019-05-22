const express = require('express');
const chamadosController = require('../controllers/chamadosController');

const router = express.Router();

router.get('/', chamadosController.getChamados);

router.post('/:id', chamadosController.putChamado);

router.post('/', chamadosController.postChamados);

module.exports = router;