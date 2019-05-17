const mysql = require('../util/bd');

exports.getChamados = (req, res, next) => {

}

exports.postChamados = (req, res, next) => {
    mysql.query('INSERT INTO chamados (empresa, nome, motivo, data_criacao) VALUES (?, ?, ?, ?)',
        [req.body.empresa, req.body.nome, req.body.motivo, new Date],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json();
            } else {
                res.status(200).json();
            }
        });
}