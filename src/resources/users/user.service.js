const usersRepo = require('./user.memory.repository');
const { removeUserFromTask } = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const getUser = id => usersRepo.getById(id);

const saveUser = user => usersRepo.save(user);

const updateUser = user => usersRepo.update(user);

const removeUser = async id => {
  await usersRepo.remove(id);
  await removeUserFromTask(id);
};

module.exports = { getAll, getUser, saveUser, updateUser, removeUser };
