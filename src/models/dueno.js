const mongoose = require("mongoose");
const duenoModel = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },

        cedula: {
            type: String,
            required: true
        },
        edad: {
            type: Number,
            required: true
        },

        nombre_Mascota: {
            type: String,
            required: true
        },
        edad_Mascota: {
            type: Number,
            required: true
        },
        raza_Mascota: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        cita: {
            type: String,
            required: false
        },
        
        rol: {
            type: String,
            required: false
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
module.exports = mongoose.model('Dueno', duenoModel);