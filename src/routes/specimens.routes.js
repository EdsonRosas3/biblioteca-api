const specimenController = require('../controllers/specimen.controller')

const routes = (server,url)=>{

    server.get(`${url}`,specimenController.getSpecimens)
    server.get(`${url}/:id`,specimenController.getSpecimenById)
    server.put(`${url}/:id`,specimenController.updateSpecimenById)
    server.post(`${url}`,specimenController.createSpecimen)
    server.del(`${url}/:id`,specimenController.deleteSpecimenById)
    
}

module.exports = routes;