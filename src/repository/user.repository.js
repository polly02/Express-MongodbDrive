const { connect } = require('../db')

const { ObjectId } = require('mongodb')

async function getAllUsersDB() {
    const { students } = await connect()
    return await students.find().toArray()
}

async function getUserByIdDB(_id) {
    const { students } = await connect()
    return students.findOne({ _id: new ObjectId(_id) })
}

async function createUserDB(name, age, phone, email) {
    const { students } = await connect()
    await students.insertOne({ "name": name, "age": age, "phone": phone, "email": email })
}

module.exports = { getAllUsersDB, getUserByIdDB, createUserDB }