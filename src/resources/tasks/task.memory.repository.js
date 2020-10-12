const Task = require('./task.model');
const {
  getAllEntities,
  getEntity,
  saveEntity,
  updateEntity,
  removeEntity,
  fixUsersStructure,
  fixBoardsStructure
} = require('../../utils/inMemoryDB');

const TABLE_NAME = 'Tasks';

const getAll = async () => getAllEntities(TABLE_NAME);

const getById = async id => getEntity(TABLE_NAME, id);

const save = async task => saveEntity(TABLE_NAME, task);

const update = async task => updateEntity(TABLE_NAME, task.id, task);

const remove = async id => {
  if (!(await removeEntity(TABLE_NAME, id))) {
    throw new Error('Not Found');
  }
};

const fixUserId = async id => fixUsersStructure(id);

const fixBoard = async id => fixBoardsStructure(id);

const removeBoardId = async boardId => await Task.deleteMany(boardId);

module.exports = {
  getAll,
  getById,
  save,
  update,
  remove,
  removeBoardId,
  fixUserId,
  fixBoard
};
