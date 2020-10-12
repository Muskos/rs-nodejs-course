const {
  getAllEntities,
  getEntity,
  saveEntity,
  updateEntity,
  removeEntity
} = require('../../utils/inMemoryDB');

const TABLE_NAME = 'Boards';

const getAll = async () => getAllEntities(TABLE_NAME);

const getById = async id => getEntity(TABLE_NAME, id);

const save = async board => saveEntity(TABLE_NAME, board);

const update = async board => updateEntity(TABLE_NAME, board.id, board);

const remove = async id => removeEntity(TABLE_NAME, id);

module.exports = { getAll, getById, save, update, remove };
