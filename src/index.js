const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const veterinarioRoutes = require("./routes/veterinario");
const loginRoutes = require("./routes/login");
const duenoRoutes = require("./routes/dueno");
const rolRoutes = require("./routes/rol");
const citaRoutes = require("./routes/cita");
const tipoDeServicioRoutes = require("./routes/tipoDeServicio");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON
//Gestión de las rutas usando el middleware
app.use("/api", veterinarioRoutes);
app.use("/api", loginRoutes);
app.use("/api", duenoRoutes);
app.use("/api", rolRoutes);
app.use("/api", tipoDeServicioRoutes);
app.use("/api", rolRoutes);
app.use("/api", citaRoutes);
app.use(express.json());
//Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));
//Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
