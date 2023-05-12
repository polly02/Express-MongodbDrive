const { getAllUsersDB, getUserByIdDB, createUserDB } = require('../repository/user.repository')

async function getAllUsers() {
    return await getAllUsersDB()
}

async function getUserById(_id) {
    return await getUserByIdDB(_id)
}

async function createUser(name, age, phone, email){
    return await createUserDB(name, age, phone, email)
}

module.exports = { getAllUsers, getUserById, createUser }