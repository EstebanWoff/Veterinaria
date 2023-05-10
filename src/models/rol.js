const mongoose = require("mongoose");
const rolModel = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Rol', rolModel);