const db = require("../utils/db");

module.exports = class Location {
  constructor(name, contact) {
    this.name = name;
    this.contact = contact;
  }

  static find() {
    return db.execute("SELECT * FROM locations");
  }

  static findById(id) {
    return db.execute("SELECT * FROM locations  WHERE _id = " + id);
  }

  save() {
    return db.execute("INSERT INTO locations (name, contact) values (?, ?)", [
      this.name,
      this.contact,
    ]);
  }
};
