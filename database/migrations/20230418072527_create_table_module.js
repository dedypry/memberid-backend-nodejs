
exports.up = async function(knex) {
  await knex.schema.createTable('modules', (table)=> {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('parent_id');
    table.string('name');
    table.string('icon');
    table.string('url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at');
  });
};


exports.down = function(knex) {

};
