const knex = require("../connection.js");

module.exports = {
    find,
    add,
    findBy,
    findById
}

function find() {
    return knex('users').select('id', 'username').orderBy('id')
}


function findBy(filter) {
    return db("users").where(filter).orderBy("id");
  }

async function add(user) {
    try {
        const [id] = await knex("users").insert(user, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
}

function findById(id) {
    return knex("users").where({ id }).first();
}