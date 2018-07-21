const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:12345@localhost:5432/postgres', {
    logging: false
  }
)
module.exports = db
