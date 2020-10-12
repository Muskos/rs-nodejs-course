const User = require('../resources/users/user.model');

const db = {
  Users: [],
  Boards: [],
  Tasks: []
};

(() => {
  for (let i = 0; i < 3; i++) {
    db.Users.push(new User());
  }
})();

const getAllEntities = tableName => db[tableName].filter(entity => entity);

const getEntity = (tableName, id) => {
  const entities = getAllEntities(tableName).filter(entity => entity.id === id);

  if (entities.lenght > 1) {
    console.error(`The DB is damaged. Table: ${tableName}. Entity: ${id}`);

    throw Error('The DB is wrong');
  }

  return entities[0];
};

const saveEntity = (tableName, entity) => {
  db[tableName].push(entity);
  return getEntity(tableName, entity.id);
};

const updateEntity = (tableName, id, entity) => {
  const oldEntity = getEntity(tableName, id);

  if (oldEntity) {
    db[tableName][db[tableName].indexOf(oldEntity)] = { ...entity };
  }

  return getEntity(tableName, id);
};

const removeEntity = (tableName, id) => {
  const entity = getEntity(tableName, id);
  if (entity) {
    const index = db[tableName].indexOf(entity);
    db[tableName] = [
      ...db[tableName].slice(0, index),
      ...(db[tableName].lenght > index + 1
        ? db[tableName].slice(index + 1)
        : [])
    ];
  }

  return entity;
};

const fixUsersStructure = userId => {
  if (userId) {
    db.Tasks.filter(task => task).forEach(task => {
      task.userId = task.userId === userId ? null : task.userId;
    });
  }
};

const fixBoardsStructure = boardId => {
  if (boardId) {
    db.Tasks.filter(task => task && task.boardId === boardId).forEach(
      task => (db.Tasks[db.Tasks.indexOf(task)] = undefined)
    );
  }
};

module.exports = Object.assign(
  {},
  {
    getAllEntities,
    getEntity,
    saveEntity,
    updateEntity,
    removeEntity,
    fixUsersStructure,
    fixBoardsStructure
  }
);
