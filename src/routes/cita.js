const express = require("express");
const router = express.Router(); //manejador de rutas de express
const citaModel = require("../models/cita");

//crear cita

router.post("/cita/crear", (req, res) => {
    const cita = citaModel(req.body);
    cita
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

router.get("/cita/all", (req, res) => {
    citaModel.find().then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

//get cita por dueño
router.get('/cita/buscar/:dueno', async (req, res) => {
    const { dueno } = req.params;

    try {
        const cita = await citaModel.findOne({ dueno: dueno});
        if (!cita) {
            return res.status(404).send('No se encontró la cita');
        }
        res.json(cita);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener la cita');
    }
});

//get cita por dueño
router.get('/cita/buscar/:veterinario', async (req, res) => {
    const { veterinario } = req.params;

    try {
        const cita = await citaModel.findOne({ veterinario: veterinario});
        if (!cita) {
            return res.status(404).send('No se encontró la cita');
        }
        res.json(cita);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener la cita');
    }
});

//actualizar cita por id

router.put("/cita/actualizar/:id", (req, res) => {
    const { id } = req.params;
    const { dueno, veterinario, fecha, hora, tipoDeServicio } = req.body;
    citaModel.updateOne({ _id: id }, {
        $set: { dueno, veterinario, fecha, hora, tipoDeServicio }
    }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

//eliminar dueño

router.delete("/cita/eliminar/:id", (req, res) => {
    const { id } = req.params;
    citaModel.deleteOne({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
});