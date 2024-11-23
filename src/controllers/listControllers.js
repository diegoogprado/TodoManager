const listModel = require("../models/listModel");

const listControllers = {
    index: (req, res) => {
        res.render('index')
    },

    app: (req, res) => {
        const lists = listModel.getAllLists()

        res.render('app', { lists })
    },

    create: (req,res) => {
        res.render('newList')
    },

    save: (req, res) => {
        const { title } = req.body

        listModel.createList(title)

        res.redirect('/app')
    },

    delete: (req,res) => {
        const id = req.params.id

        listModel.deleteList(id)

        res.redirect('/app')
    }


}

module.exports = listControllers