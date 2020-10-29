// Update with your config settings.

module.exports = {
development: {
  client: "pg", // this setting corresponds to the db connection js package

  connection: {
    database: "knex_demo",

    //the following two fields are required for Linux setup. If you don't have a password
    //you must create one.
    //to set a password, do the following inside your terminal.
    //psql
    //oem=# \password

    username: "oem",
    password:  "Jatin@123"
  },

  migrations: {
    tableName: "migrations",
    directory:"./db/migrations"
  },

  seeds: {
    directory: "./db/seeds",
  },
},
  

};
