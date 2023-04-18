const RoleModule = require('../../models/roleModule');


async function insertRoleModule(body) {
  await RoleModule.transaction(async (trx)=> {
    for (const item of body.modules) {
      const find = await RoleModule.query(trx).findOne({
        module_id: item.moduleId,
        role_id: body.roleId,
        deleted_at: null,
      });

      await RoleModule.query(trx)
          .upsertGraph({
            id: find && find.id,
            module_id: item.moduleId,
            role_id: body.roleId,
            read: item.read,
            create: item.create,
            update: item.update,
            delete: item.delete,
          });
    }
  });
}

module.exports={
  insertRoleModule,
};
