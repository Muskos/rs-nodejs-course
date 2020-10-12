const {
  getAllEntities,
  getEntity,
  saveEntity,
  updateEntity,
  removeEntity
} = require('../../utils/inMemoryDB');

const TABLE_NAME = 'Users';

const getAll = async () => getAllEntities(TABLE_NAME);

const getById = async id => getEntity(TABLE_NAME, id);

const save = async user => saveEntity(TABLE_NAME, user);

const update = async user => updateEntity(TABLE_NAME, user.id, user);

const remove = async id => {
  if (!(await removeEntity(TABLE_NAME, id))) {
    throw new Error('Not Found');
  }
};

module.exports = { getAll, getById, save, update, remove };
