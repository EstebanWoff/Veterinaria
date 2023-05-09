const mongoose = require("mongoose");
const veterinarioSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },

        cedula: {
            type:String,
            required: true
        },
        edad: {
            type: Number,
            required: true
        },

        telefono: {
            type: String,
            required: true
        },

        correo: {
            type: String,
            required: true
        },

        contraseña: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Veterinario', veterinarioSchema);