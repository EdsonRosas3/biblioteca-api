const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Autor = mongoose.model('Autor');
const Document = mongoose.model('Document')


const libroSchema = new Schema({
    id_autor: { type: Schema.ObjectId, ref: "Autor" },
    id_document:{type: Schema.ObjectId, ref: "Document" } 
});

module.exports = mongoose.model("Libro", libroSchema);