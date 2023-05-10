const express = require("express");
const router = express.Router(); //manejador de rutas de express
const duenoModel = require("../models/dueno");

//crear dueño

router.post("/dueno/crear", (req, res) => {
    const dueno = duenoModel(req.body);
    dueno
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

router.get("/dueno/all", (req, res) => {
    duenoModel.find().then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

//get dueño por nombre
router.get('/dueno/buscar/:nombre', async (req, res) => {
    const { nombre } = req.params;

    try {
        const dueno = await duenoModel.findOne({ nombre: nombre });
        if (!dueno) {
            return res.status(404).send('No se encontró el dueño');
        }
        res.json(dueno);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener el dueño');
    }
});

//actualizar dueño

router.put("/dueno/actualizar/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, cedula, edad, nombre_Mascota,raza_Mascota,edad_Mascota, telefono, cita, correo, contraseña } = req.body;
    duenoModel.updateOne({ _id: id }, {
        $set: { nombre, cedula, edad, nombre_Mascota,raza_Mascota, edad_Mascota, telefono, cita, correo, contraseña }
    }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

//eliminar dueño

router.delete("/dueno/eliminar/:id", (req, res) => {
    const { id } = req.params;
    duenoModel.deleteOne({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
});