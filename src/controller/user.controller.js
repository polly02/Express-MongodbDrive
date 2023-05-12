const express = require('express')
const { getAllUsers, getUserById, createUser } = require('../service/user.service')
const route = express.Router()

route.get('/', async function (req, res) {
    res.status(200).send(await getAllUsers())
})

route.get('/:_id', async function (req, res) {
    const {_id} = req.params
    res.status(200).send(await getUserById(_id))
})

route.post('/', async function (req, res){
    const {name, age, phone, email} = req.body
    res.status(200).send(await createUser(name, age, phone, email))
})


module.exports = route