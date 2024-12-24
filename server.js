const express = require("express");
const sequelize = require("./database/connect");
const User = require("./models/User");
const cors = require("cors");

const app = express();

// Middleware para CORS
app.use(cors());

// Middleware para manejar JSON
app.use(express.json());


sequelize.sync({ force: true })
  .then(() => console.log("Base de datos sincronizada."))
  .catch(error => console.error("Error al sincronizar:", error));



// Ruta de prueba
app.get("/api/test", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.send("Conexión a la base de datos exitosa.");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    res.status(500).send("Error al conectar con la base de datos.");
  }
});

app.post('/api/usuarios', async (req, res) => {
    try {
      const { name, last_name, email, gender, idneighborhood } = req.body;
  
      if (!name || !last_name || !email || !gender || !idneighborhood) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }
  
      const nuevoUsuario = await User.create({ name, last_name, email, gender, idneighborhood });
      res.status(201).json({ usuario: nuevoUsuario });
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      res.status(500).json({ error: 'Error al crear el usuario.' });
    }
  });
  
  
// Inicia el servidor
app.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});
