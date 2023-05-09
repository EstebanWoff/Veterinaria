const mongoose = require("mongoose");
const rolSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Rol', rolSchema);