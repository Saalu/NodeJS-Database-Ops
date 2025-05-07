require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const studentRouter = require('./router/studentRouter')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/students', studentRouter)
app.use('/', (req,res) => {
    // res.json({msg: "Hello Nodejs World"})
    console.log("Test all now")


} )


app.listen( () => {
    console.log(`Server started on port: ${PORT}`)
})
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))