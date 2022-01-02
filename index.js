const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
app.use(express.json({ extended: true }))
app.use(cors())
app.use('/', require('./routes/auth.routes'))

const PORT = process.env.PORT || 5000

async function start () {
    try {
        await mongoose.connect(`mongodb+srv://lemkas:nll2000nll@cluster0.sfwb3.mongodb.net/PDD?retryWrites=true&w=majority`)
        app.listen(PORT, () => {
            console.log(`Server is running on Port: ${PORT}`)
        })
    } catch (e) {
        console.log('Server error: ', e.message)
        process.exit(1)
    }
}

start ()