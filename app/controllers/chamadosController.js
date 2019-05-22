const bd = require('../util/bd');

exports.getChamados = (req, res, next) => {
    const mysql = bd();

    mysql.query("SELECT id, empresa, nome, motivo, DATE_FORMAT(data_criacao, '%d/%m/%Y %H:%i:%s') as data_criacao FROM chamados WHERE finalizado = 'N' order by data_criacao asc", (err, result) => {
        if (err) {
            res.status(500).json({
                message: "ERRO ao conectar no bd",
                err: err
            });
        } else {
            //console.log(result);
            res.send({
                chamados: result
            });
        }
        mysql.close();
    });
}

exports.postChamados = (req, res, next) => {
    const mysql = bd();
    mysql.query('INSERT INTO chamados (empresa, nome, motivo, data_criacao) VALUES (?, ?, ?, ?)',
        [req.body.empresa, req.body.nome, req.body.motivo, new Date],
        (err, result) => {
            if (err) {
                console.log(err);
                mysql.close();
                res.status(500).json({ err: err });
            } else {
                mysql.close();
                res.status(200).json();
            }
        });
}

exports.putChamado = (req, res, next) => {
    const mysql = bd();
    mysql.query("UPDATE chamados SET finalizado = ?, data_finalizado = ? WHERE id = ?",
        [req.body.finalizado, req.body.data_finalizado, req.params.id],
        (err, result) => {
            if (err) {
                res.status(500).json({
                    message: "Erro ao atualizar chamado",
                    err: err
                });
            } else {
                res.status(200).json({
                    result: result
                });
            }
            mysql.close();
        });
}