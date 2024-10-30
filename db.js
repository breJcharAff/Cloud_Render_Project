const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(

    // TODO: database connection string
  'postgresql://public_u40l_user:w1NCbba5mzTUmYFp8aBWUp0Ncvd8ARVb@dpg-csh051rqf0us739rnh1g-a/public_u40l',

    {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
