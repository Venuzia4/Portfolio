const AbstractManager = require("./AbstractManager");

class GameManager extends AbstractManager {
  static table = "games";

  findAll() {
    return this.connection.query(`select * from ${this.table} LIMIT 20`);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${GameManager.table} (name) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${GameManager.table} set name = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = GameManager;
