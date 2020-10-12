const uuid = require('uuid');
const Column = require('../columns/column.model');

class Board {
  constructor({ id = uuid(), title = 'BOARD', columns = new Column() } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static fromRequest(body) {
    return new Board(body);
  }
}

module.exports = Board;
