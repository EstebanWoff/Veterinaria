const express = require("express");
const router = express.Router(); //manejador de rutas de express
const Veterinario = require("../models/veterinario");
const Dueno = require("../models/dueno");
const Admin = require("../models/administrador");




router.post('/login', async (req, res) => {
        const { correo, contraseña } = req.body;
      
        try {
          const veterinario = await Veterinario.findOne({correo:correo, contraseña:contraseña});
          const dueno = await Dueno.findOne({correo:correo, contraseña:contraseña});
          const admin = await Admin.findOne({correo:correo, contraseña:contraseña});
          if (!veterinario && !dueno && !admin) {
            return res.status(404).send('Usuario o contraseña incorrectos');
          }
          res.status(201).send("Bienvenido");
        } catch (error) {
          console.log(error);
          res.status(500).send('Hubo un error al loguearse');
        }
      });



module.exports = router;