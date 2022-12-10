const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.delete('/tbl_cliente/:id'

    , (req, res) => {

        res.setHeader("Access-Control-Allow-Origin"
            ,
            "*");

        res.header('Access-Control-Allow-Methods'
            ,
            'GET,PUT,POST,DELETE');

        return connect.execSQLQuery("delete from tbl_cliente where id=" + req.params.id, res);
    })

app.post('/tbl_cliente/'

    , (req, res) => {

        res.setHeader("Access-Control-Allow-Origin"
            ,
            "*");

        res.header('Access-Control-Allow-Methods'
            ,
            'GET,PUT,POST,DELETE');

        return connect.execSQLQuery("insert into tbl_cliente (nome) value('" + req.body.nome + "')"
            , res);

    })

app.put('/tbl_cliente/:id', (req, res) => {

    res.setHeader("Access-Control-Allow-Origin"
        ,
        "*");

    res.header('Access-Control-Allow-Methods'
        ,
        'GET,PUT,POST,DELETE');

    return connect.execSQLQuery("update tbl_cliente set nome='" + req.body.nome + "' where id=" + req.params.id, res);
})

app.get('/',
    (req, res) => {
        res.send('A api está rodando' + ' neste servidor!')
        res.end()
    })


app.get('/tbl_cliente'

    , (req, res) => {

        res.setHeader("Access-Control-Allow-Origin"
            ,
            "*");

        res.header('Access-Control-Allow-Methods'
            ,
            'GET,PUT,POST,DELETE');

        return connect.execSQLQuery('select * from tbl_cliente'
            , res);

    })

app.get('/tbl_cliente/:id'

    , (req, res) => {

        res.setHeader("Access-Control-Allow-Origin"
            ,
            "*");

        res.header('Access-Control-Allow-Methods'
            ,
            'GET,PUT,POST,DELETE');

        return connect.execSQLQuery('select * from tbl_cliente where id=' + req.params.id, res);
    })

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Serverstartedonport${PORT}`));