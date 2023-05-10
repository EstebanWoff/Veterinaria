const mongoose = require("mongoose");
const citaSchema = mongoose.Schema(
    {
        veterinario: {
            type: String,
            required: true
        },

        dueno: {
            type:String,
            required: true
        },
        fecha: {
            type: Date,
            required: true
        },

        hora: {
            type: String,
            required: true
        },

        tipoDeServicio: {
            type: String,
            required: false
        }

    }
)

module.exports = mongoose.model('Cita', citaSchema);