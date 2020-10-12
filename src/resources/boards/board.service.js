const boardsRepo = require('./board.memory.repository');
const { removeTaskByBorderId } = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();

const getBoard = id => boardsRepo.getById(id);

const saveBoard = board => boardsRepo.save(board);

const updateBoard = board => boardsRepo.update(board);

const removeBoard = async id => {
  await boardsRepo.remove(id);
  await removeTaskByBorderId(id);
};

module.exports = { getAll, getBoard, saveBoard, updateBoard, removeBoard };
