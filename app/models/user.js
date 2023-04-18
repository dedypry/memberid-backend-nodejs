const {Model} = require('objection');
const knex = require('./knex');
const objectionSoftDelete = require('objection-js-soft-delete');
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

  static modifiers = {
    /**
     * Return minimum column
     * @param  {any} query
     */

  };


  static table = this.tableName;

  /**
   * Define relation
   * @return {Object}
   */
  static relationMappings() {
    return {};
  }
}

module.exports = user;
