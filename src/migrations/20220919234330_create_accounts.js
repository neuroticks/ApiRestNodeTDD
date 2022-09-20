/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('accounts', (t) => {
  t.increments('id').primary();
  t.string('nome').notNull();
  t.integer('user_id')
    .references('id')
    .inTable('users')
    .notNull();
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('accounts');
