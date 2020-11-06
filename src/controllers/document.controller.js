

const getDocuments = (req,res,next)=>{
    res.send('los documentos')
}
const getDocumentById = (req,res,next)=>{
    res.send('los autores')
}
const updateDocumentById = (req,res,next)=>{
    res.send('los autores')
}
const createDocument = (req,res,next)=>{
    res.send('los autores')
}
const deleteDocumentById = (req,res,next)=>{
    res.send('los autores')
}

module.exports = {
    getDocuments,
    getDocumentById,
    updateDocumentById,
    createDocument,
    deleteDocumentById
}