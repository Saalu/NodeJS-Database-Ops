const Students = require('../models/StudentModel')

const studentCtrl = {
    create: async(req,res) => {
        console.log("From Create")
        res.json({msg: "From Create"})

    },
    getAll: async(req,res) => {
        res.json({msg: "From GetAll"})
        console.log("From GetAll")
    },
    getOne: async(req,res) => {
        console.log("From GetOne")
        res.json({msg: "From GetOne"})

    },
    update: async(req,res) => {
        console.log("From update")
        res.json({msg: "From Update"})

    },
    delete: async(req,res) => {
        console.log("From Delete")
        res.json({msg: "From GetAll"})

    },
}