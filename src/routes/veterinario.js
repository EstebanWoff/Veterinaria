const express = require("express");
const router = express.Router(); //manejador de rutas de express
const Veterinario = require("../models/veterinario");

//Nuevo doctor

router.post("/veterinario/crear", (req, res) => {
    const veterinario = Veterinario(req.body);
    veterinario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

router.get("/veterinario/all", (req, res) => {
    Veterinario.find().then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

//get veterinario por nombre
router.get('/veterinario/buscar/:nombre', async (req, res) => {
    const { nombre } = req.params;

    try {
        const veterinario = await Veterinario.findOne({ nombre: nombre });
        if (!veterinario) {
            return res.status(404).send('No se encontró la medicina');
        }
        res.json(veterinario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener la medicina');
    }
});

//actualizar veterinario

router.put("/veterinario/actualizar/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, cedula, edad, telefono, correo, contraseña } = req.body;
    Veterinario.updateOne({ _id: id }, {
        $set: { nombre, cedula, edad, telefono, correo, contraseña }
    }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

router.delete("/veterinario/eliminar/:id", (req, res) => {
    const { id } = req.params;
    Veterinario.deleteOne({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
});