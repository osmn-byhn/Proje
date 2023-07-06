const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const integrationSchema = mongoose.Schema({
    platformName: {
        type: String,
        required: true
    },
    apiKey: {
        type: String,
        required: true,
        unique: true
    },
    suplierId: {
        type: String,
        required: true,
        unique: true
    },
    apiSecretKey: {
        type: String,
        required: true,
        unique: true
    }
    
})


const Integrations = mongoose.model('Integrations', integrationSchema)
module.exports = Integrations