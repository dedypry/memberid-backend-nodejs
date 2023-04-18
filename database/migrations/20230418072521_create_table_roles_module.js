
exports.up = async function(knex) {
  await knex.schema.createTable('role_module', (table)=> {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('module_id');
    table.uuid('role_id');
    table.boolean('create').defaultTo(false);
    table.boolean('read').defaultTo(false);
    table.boolean('update').defaultTo(false);
    table.boolean('delete').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at');
  });
};


exports.down = function(knex) {

};
