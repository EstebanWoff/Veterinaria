const express = require("express");
const router = express.Router(); //manejador de rutas de express
const duenoModel = require("../models/dueno");

//Nuevo doctor

router.post("/dueno", (req, res) => {
    const dueno = duenoModel(req.body);
    dueno
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
