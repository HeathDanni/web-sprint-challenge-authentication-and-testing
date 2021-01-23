const db = require("../../data/dbConfig")

module.exports = {
    find,
    findById,
    findBy,
    add
}

function find() {
    return db("users").select("id", username)
}

function findById() {
    return db("users").where({id}).first()
}

function findBy() {
    return db("users").select("id", "username", "password").where(filter)
}

async function add(user) {
    const [id] = await db("users").insert(user)
        return findById(id)
}
