
exports.up = async function(knex) {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "pg_trgm"');
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "dblink"');
};


exports.down = function(knex) {

};
