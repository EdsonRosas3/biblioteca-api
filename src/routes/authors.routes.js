
const authorController = require('../controllers/author.controller')

const routes = (server,url)=>{

    server.get(`${url}`,authorController.getAuthors)
    server.get(`${url}/:id`,authorController.getAuthorById)
    server.put(`${url}/:id`,authorController.updateAuthorById)
    server.post(`${url}`,authorController.createAuthor)
    server.del(`${url}/:id`,authorController.deleteAuthorById)
    
}

module.exports = routes;