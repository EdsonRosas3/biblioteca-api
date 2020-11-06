
const server = require('./server')

//data base conected
require('./database')

//start server
server.listen(3000,()=>{
    console.log('server on port 3000')
})