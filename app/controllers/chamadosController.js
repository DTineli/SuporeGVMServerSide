const bd = require('../util/bd');

exports.getChamados = (req, res, next) => {
    const mysql = bd();

    mysql.query("SELECT * FROM chamados WHERE finalizado = 'N' order by data_criacao asc", (err, result) => {
        if (err) {
            res.status(500).json({ message: "ERRO ao conectar no bd" });
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
                res.status(500).json();
            } else {
                mysql.close();
                res.status(200).json();
            }
        });
}