const ModuleModel = require('../../models/module');

async function listModule(query) {
  return await ModuleModel.query()
      .whereNull('deleted_at')
      .orderBy('name', 'DESC')
      .page(query.page||0, query.pageSize || 10);
}

async function insertModule(body) {
  return await ModuleModel.query()
      .insert({
        name: body.name.toUpperCase(),
        icon: body.icon,
        url: body.url,
        parent_id: body.parentId,
      });
}

async function updateModule(id, body) {
  return await ModuleModel.query()
      .findById(id)
      .patch({
        name: body.name.toUpperCase(),
        icon: body.icon,
        url: body.url,
        parent_id: body.parentId,
      });
}

async function deleteModule(id) {
  return await ModuleModel.query()
      .deleteById(id);
}

module.exports ={
  listModule,
  insertModule,
  updateModule,
  deleteModule,
};
