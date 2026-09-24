const env = require("./env");
const express = require("express");
const db = require("./database");
const app = express();

app.use(express.json());

function sendSuccess(result, datos){
    result.status(200).send({
        success: true,
        datos,
    });
};

function sendError(result, error){
    result.status(error.status || 500).send({
        success: false,
        mensaje: error.message,
    });
};

db.getConnection((err) => {
    if(err) throw err;
    console.log('Conectado a la base de datos playgame');
});

app.listen(env.port, () => {
    console.log(`Servidor iniciado en http://localhost:3000`);
});