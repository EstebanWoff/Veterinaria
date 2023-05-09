const express = require("express");
const router = express.Router(); //manejador de rutas de express
const Veterinario = require("../models/veterinario");

//Nuevo doctor

router.post("/veterinario", (req, res) => {
    const veterinario = Veterinario(req.body);
    veterinario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

router.get("/veterinario", (req, res) => {
    Veterinario.find().then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

//get veterinario por id
router.get('/veterinario/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const veterinario = await Veterinario.findOne({ _id: id });
        if (!veterinario) {
            return res.status(404).send('No se encontró el veteinario');
        }
        res.json(veterinario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener el veteinario');
    }
});

//get veterinario por nombre
router.get('/veterinario/:nombre', async (req, res) => {
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

router.put("/veterinario/:nombre", (req, res) => {
    const { nombreV } = req.params;
    const { nombre, cedula, edad, telefono, correo, contraseña } = req.body;
    Veterinario.updateOne({ nombre: nombreV }, {
        $set: { nombre, cedula, edad, telefono, correo, contraseña }
    }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

router.delete("/veterinario/:nombre", (req, res) => {
    const { nombre } = req.params;
    Veterinario.deleteOne({ nombre: nombre }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
});