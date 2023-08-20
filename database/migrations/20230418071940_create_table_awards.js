
exports.up = async function(knex) {
  await knex.schema.createTable('awards', (table)=> {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name');
    table.decimal('point', 15, 2);
    table.decimal('price', 15, 2);
    table.string('image');
    table.enu('type', ['VOUCHER', 'PRODUCT', 'GIFTCARD']);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at');
  });
};


exports.down = function(knex) {

};
