const UserModel = require('../../app/models/user');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await UserModel.query().insertGraph([
    {
      email: 'dedypry@gmail.com',
    },
    {
      email: 'dedypry30@gmail.com',
    },
  ]);
};
