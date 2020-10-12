const taskRepo = require('./task.memory.repository');

const getAll = () => taskRepo.getAll();

const getTask = id => taskRepo.getById(id);

const saveTask = task => taskRepo.save(task);

const updateTask = task => taskRepo.update(task);

const removeTask = id => taskRepo.remove(id);

const removeTaskByBorderId = async id => taskRepo.fixBoard(id);

const removeUserFromTask = async id => taskRepo.fixUserId(id);

module.exports = {
  getAll,
  getTask,
  saveTask,
  updateTask,
  removeTask,
  removeTaskByBorderId,
  removeUserFromTask
};
