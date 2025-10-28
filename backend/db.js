// db.js
const { Sequelize } = require('sequelize');

// Ensure all required env variables are set
const {
  PG_DBNAME,
  PG_USERNAME,
  PG_PASSWORD,
  PG_HOST,
  PG_PORT,
  SSLROOTCERT
} = process.env;

if (!PG_DBNAME || !PG_USERNAME || !PG_PASSWORD || !PG_HOST || !PG_PORT || !SSLROOTCERT) {
  throw new Error('Database environment variables are not properly set.');
}

// Initialize Sequelize
const sequelize = new Sequelize(PG_DBNAME, PG_USERNAME, PG_PASSWORD, {
  host: PG_HOST,
  port: PG_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: true,
      ca: SSLROOTCERT
    }
  },
  logging: false, // set true if you want SQL logs
});

module.exports = sequelize;
