const uuid = require('uuid');
const User = require('../users/user.model');
const Board = require('../boards/board.model');
const Column = require('../columns/column.model');

class Task {
  constructor({
    id = uuid(),
    title = 'TASK',
    order = '',
    description = '',
    userId = new User().id,
    boardId = new Board().id,
    columnId = new Column().id
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static fromRequest(body) {
    return new Task(body);
  }
}

module.exports = Task;
