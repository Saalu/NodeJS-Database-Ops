const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    studentID:{
        type:Number,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
})

module.exports = mongoose.model('student', StudentSchema)