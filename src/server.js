const restify = require('restify')
const server = restify.createServer()

//import routes
const authorsRouter = require('./routes/authors.routes')
const documentRouter = require('./routes/documents.routes')
const specimensRouter = require('./routes/specimens.routes')

//settings
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

//routes
authorsRouter(server,'/api/authors')
documentRouter(server,'/api/documents')
specimensRouter(server,'/api/specimens')


module.exports = server;