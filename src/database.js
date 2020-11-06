const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bibliote_api',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db=>console.log('db conected'))
    .catch(error=>console.log(error))
