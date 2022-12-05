// Import and require mysql2
// const mysql2 = require("mysql2");

// Connect to database
const Sequelize = require("sequelize");

// Enable access to .env variables
require("dotenv").config();

// Use environment variables to connect to database
// create a connection object
const sequelize = new Sequelize(
  // database name
  process.env.DMB_NAME,
  // database user
  process.env.DB_USER,
  // database password
  process.env.DB_PASSWORD,
  {
    // database location
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
