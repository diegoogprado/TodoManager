const listModel = require("../models/listModel");

const taskControllers = {
    list: (req, res) => {
        const id = req.params.id

        const list = listModel.getListById(id)

        const tasks = list.tasks

        res.render('list', { list, tasks } )
    },
    
    task: (req, res) => {
        const id = req.params.id

        const { name } = req.body

        listModel.addTask(id, name)
       
        res.redirect(`/app/${id}`)
    },

    check: (req, res) => {
        const id = req.params.id
        const { key } = req.body
        
        listModel.checkTask(id, key)

        res.redirect(`/app/${id}`)
    }
}

module.exports = taskControllers