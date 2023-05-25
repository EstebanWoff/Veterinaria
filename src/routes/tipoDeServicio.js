const express = require("express");
const router = express.Router(); //manejador de rutas de express
const servicioModel = require("../models/tipoDeServicio");

//crear dueño

router.post("/tipoDeServicio/crear", (req, res) => {
    const tipoDeServicio = servicioModel(req.body);
    tipoDeServicio
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;