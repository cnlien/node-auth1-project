
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'chris', password: 'chris'},
      ]);
    });
};
