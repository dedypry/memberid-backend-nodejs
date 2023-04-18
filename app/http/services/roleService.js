const Role = require('../../models/role');
const {slugify} = require('../../utils/slugify');

async function listRole(query) {
  return await Role.query()
      .withGraphFetched('[modules]')
      .whereNull('deleted_at')
      .orderBy('name', 'DESC')
      .page(query.page||0, query.pageSize || 10);
}

async function insertRole(body) {
  return await Role.query().insert({
    name: body.name.toUpperCase(),
    slug: slugify(body.name),
  });
}

async function updateRole(id, body) {
  return await Role.query().findById(id).patch({
    name: body.name.toUpperCase(),
    slug: slugify(body.name),
  });
}

async function deleteRole(id) {
  return await Role.query().deleteById(id);
}


module.exports = {
  listRole,
  insertRole,
  updateRole,
  deleteRole,
};
