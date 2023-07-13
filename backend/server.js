const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config')
const app = express()
const path = require('path')
const PORT = Math.floor(Math.random() * 9999)

const signRouter = require('./router/signRouter')
const loginRouter = require('./router/loginRouter')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
config()

app.use('/signup', signRouter)
app.use('/login', loginRouter)




app.listen(PORT, () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
            keepAlive: true,
            keepAliveInitialDelay: 300000,
        })
        .then(console.log("CONNECT TO DB...", PORT))
        .catch((err) => err)
})
