const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const libroSchema = new Schema({
    titulo: String,
    number_pages: Number,
    tipo: String,
});

module.exports = mongoose.model("Document", libroSchema);