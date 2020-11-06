const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Document = mongoose.model('Document')


const libroSchema = new Schema({
    borrowed:Boolean,
    state:{
        type:String,
        default:"nuevo"
    },
    id_document:{type: Schema.ObjectId, ref: "Document" } 
});

module.exports = mongoose.model("Specimen", libroSchema);