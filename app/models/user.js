const {Model, raw, ref} = require('objection');
const knex = require('./knex');
const objectionSoftDelete = require('objection-js-soft-delete');
const Role = require('./role');
const RoleUser = require('./roleUser');
// const userRoleModel = require('./userRole');

Model.knex(knex);

/**
 * Define Soft Delete Module
 */
const softDelete = objectionSoftDelete.default({
  columnName: 'deleted_at',
  deletedValue: new Date(),
  notDeletedValue: null,
});

/**
 * @extends Model
 */
class user extends softDelete(Model) {
  /**
   * create action before insert in database
   */
  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  /**
   * create action before update in database
   */
  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  /**
   * It returns table name
   * @return {string} The table name
   */
  static get tableName() {
    return 'users';
  }

  static get modifiers() {
    /**
     * Return minimum column
     * @param  {any} query
     */
    return {
      listUser(query) {
        query.select(
            'users.*',
            raw('?',
                RoleUser.query()
                    .select(
                        raw(`string_to_array(string_agg(modules.name,','),',')`),
                    )
                    .leftJoin('role_module', 'role_module.role_id', 'role_user.role_id')
                    .leftJoin('modules', 'modules.id', 'role_module.module_id')
                    .where('user_id', ref('users.id')),
            ).as('modules'),
        );
      },
    };
  }


  static table = this.tableName;

  /**
   * Define relation
   * @return {Object}
   */
  static relationMappings() {
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: Role,
        join: {
          from: 'users.id',
          through: {
            from: 'role_user.user_id',
            to: 'role_user.role_id',
          },
          to: 'roles.id',
        },
      },
    };
  }
}

module.exports = user;
