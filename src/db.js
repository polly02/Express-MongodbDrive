const { MongoClient } = require('mongodb')

async function connect() {
    const MongoDBClient = new MongoClient('mongodb://localhost:27017')
    await MongoDBClient.connect()

    const db = MongoDBClient.db('hschool')

    return {
        students: db.collection('students')
    }
}

module.exports = { connect }