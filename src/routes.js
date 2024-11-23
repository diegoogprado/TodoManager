const express = require('express')
const listControllers = require('./controllers/listControllers')
const taskControllers = require('./controllers/taskControllers')
const router = express.Router()


router.get('/', listControllers.index)

router.get('/app', listControllers.app)
router.get('/app/newList', listControllers.create) //ok
router.post('/app/newList', listControllers.save) //ok
router.post('/app/:id/delete', listControllers.delete) //ok

router.get('/app/:id', taskControllers.list) //ok
router.post('/app/:id/task', taskControllers.task) //ok
router.post('/app/:id/check', taskControllers.check) //ok

module.exports = router