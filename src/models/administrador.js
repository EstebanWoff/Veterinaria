const mongoose = require("mongoose");
const administradorSchema = mongoose.Schema(
    {
        correo: {
            type: String,
            required: true
        },

        contraseña: {
            type: String,
            required: true
        },

        rol: {
            type: String,
            required: false
        }

    }
)

module.exports = mongoose.model('Administrador', administradorSchema);