
exports.up = async function(knex) {
  await knex.schema.createTable('roles', (table)=> {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name', 50);
    table.string('slug', 50).unique();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at');
  });
};


exports.down = function(knex) {

};
