const express = require("express");
const router = express.Router(); //manejador de rutas de express
const rolModel = require("../models/rol");

//crear dueño

router.post("/rol/crear", (req, res) => {
    const rol = rolModel(req.body);
    rol
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;