const env = require("./env");
const express = require("express");
const db = require("./database");
const app = express();

app.use(express.json());

db.getConnection((err) => {
    if(err) throw err;
    console.log('Conectado a la base de datos playgame');
});

app.listen(env.port, () => {
    console.log(`Servidor iniciado en http://localhost:3000`);
});