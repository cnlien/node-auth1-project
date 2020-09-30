const knex = require("../connection.js");

module.exports = {
    find
}

function find() {
    return knex('users').select('id', 'username').orderBy('id')
}