const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    quantidadeInscritos: {
        type: Number,
        required: true
    },
    canal: {
        type: String,
        required: true
    },
    plataforma: {
        type: String,
        required: true
    },
    categoriaConteudo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Data', dataSchema);
