const mongoose = require("mongoose");
const tipoDeServicioSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('tipoDeServicio', tipoDeServicioSchema);