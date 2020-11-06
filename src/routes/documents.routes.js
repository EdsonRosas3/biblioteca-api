const documentController = require('../controllers/document.controller')

const routes = (server,url)=>{

    server.get(`${url}`,documentController.getDocuments)
    server.get(`${url}/:id`,documentController.getDocumentById)
    server.put(`${url}/:id`,documentController.updateDocumentById)
    server.post(`${url}`,documentController.createDocument)
    server.del(`${url}/:id`,documentController.deleteDocumentById)
    
}

module.exports = routes;