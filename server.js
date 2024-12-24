
const express = require("express");
const sequelize = require("./database/connect");

const app = express();

app.get("/api/test", async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send("Conexión a la base de datos exitosa.");
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
        res.status(500).send("Error al conectar con la base de datos.");
    }
});

app.listen(5000, () => {
    console.log("Servidor corriendo en http://localhost:5000");
});