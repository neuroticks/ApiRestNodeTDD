/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable(
      'users',
      (t) => {
        t.increments('id').primary();
        t.string('nome').notNullable();
        t.string('email').notNullable().unique();
        t.string('senha').notNullable();
      },
    );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('users');
};
