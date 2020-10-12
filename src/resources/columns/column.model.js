const uuid = require('uuid');

class Column {
  constructor({ id = uuid(), title = 'COLUMN', order = '' } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static fromRequest(body) {
    return new Column(body);
  }
}

module.exports = Column;
