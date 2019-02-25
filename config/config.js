require('dotenv').config()

module.exports = {
  "production": {
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "dialect": "postgres"
  }
}