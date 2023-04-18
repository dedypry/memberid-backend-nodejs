
exports.up =async function(knex) {
  await knex.schema.createTable('users', (table)=> {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name', 100).notNullable();
    table.string('email').unique().notNullable();
    table.string('phone', 20).unique();
    table.string('password');
    table.boolean('is_active').defaultTo(false);
    table.string('verification_token');
    table.text('image');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at');
  });
};


exports.down = function(knex) {

};
