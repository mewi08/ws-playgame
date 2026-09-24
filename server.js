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

app.get('/videojuegos', async (require, result) => {
    try{
        const [res] = await db.query(
            `SELECT id, titulo, genero, desarrollador, fecha_lanz, precio, descripcion
            FROM videojuegos
            ORDER BY id DESC
            LIMIT 20`
        );

        if(res.length == 0){
            throw new Error('No hay registros');
        }

        sendSuccess(result, res);
    }catch(error){
        sendError(result, error);
    }
});

app.delete('/videojuegos/:id', async (require, result) => {
    try{
        const { id } = require.params;

        const [res] = await db.query(
            'DELETE FROM videojuegos WHERE id = ?', [id]
        );

        if(res.affectedRows == 0){
            throw new Error('No encontrado');
        }

        sendSuccess(result, { mensaje: "Registro eliminado" });
    }catch(error){
        sendError(result, error);
    }
})

db.getConnection((err) => {
    if(err) throw err;
    console.log('Conectado a la base de datos playgame');
});

app.listen(env.port, () => {
    console.log(`Servidor iniciado en http://localhost:3000`);
});