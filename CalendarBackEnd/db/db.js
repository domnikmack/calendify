const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DB_URL ||
  'postgres://localhost:5432/calendify', { logging: false}
);

module.exports = db;
