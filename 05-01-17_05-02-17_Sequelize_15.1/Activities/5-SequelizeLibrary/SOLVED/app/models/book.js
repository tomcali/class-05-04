// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Book = sequelize.define("book", {
  title: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  },
  pages: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});

// Syncs with DB
Book.sync();

// no force true because that would cause replacement of records in the database
// this would not be a good thing to do in production

// Makes the Book Model available for other files (will also create a table)
module.exports = Book;
