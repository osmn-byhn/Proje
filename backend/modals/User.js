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
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    telNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    integrations: [integrationSchema]
    
})


const User = mongoose.model('User', userSchema)
module.exports = User