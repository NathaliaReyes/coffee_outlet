const Sequelize = require('sequelize');
const pg = require('pg');
require('dotenv').config();

const { Pool } = pg;

let sequelize;
if(process.env.DB_URL){
  sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      dialectOptions: {
        ssl: false
      }
    }
  );
}

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  })


module.exports = sequelize;
