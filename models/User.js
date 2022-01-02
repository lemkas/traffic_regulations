const { Schema, model } = require('mongoose')

const User = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    firstName: {
        type: String,
    },
    surname: {
        type: String,
    },
    roles: [{type: String, ref: 'Role'}]


})

module.exports = model('User', User )