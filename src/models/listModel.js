let lists = []

// List { id:, title:, tasks: [ {name: , status:} ]}

const listModel = {
    getAllLists() {
        return lists
    },

    getListById(id) {
        return lists.find(list => list.id === id)
    },

    createList(title) {
        const list = {
            id: Date.now().toString(),
            title: title,
            tasks: []
        }
        return lists.push(list)
    },

    addTask(id, name) {
        const task = {
            key: Date.now().toString(),
            name: name,
            status: false,
        }

        const index = lists.findIndex(list => list.id === id)
        lists[index].tasks = [...lists[index].tasks, task]
    },

    deleteList(id) {
        lists = lists.filter(list => list.id !== id)
    },

    checkTask(id, key) {
        const index = lists.findIndex(list => list.id == id)
        const list = lists[index]
        const i = list.tasks.findIndex(task => task.key == key)
        if(list.tasks[i].status == false) {
            return list.tasks[i].status = true
        } else {
            return list.tasks[i].status = false
        }
    }

}

module.exports = listModel