const AbstractManager = require("./AbstractManager");

class MessagesManager extends AbstractManager {
  static table = "messages";

  insert(message) {
    return this.connection.query(
      `insert into ${MessagesManager.table} (firstname, lastname,email,message) values (?,?,?,?)`,
      [
        message.firstname,
        message.lastname,
        message.email,
        message.message,
      ]
    );
  }
}

module.exports = MessagesManager;