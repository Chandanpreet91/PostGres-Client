//This loads the exported configuration object from our knexfile
const knexfile = require("..knexfile");


// This gets the knex client constructor, we use this to create
//an instance of the knex client which allows us to make
//queries to our database (knex_demo)
const knexConnector = require("knex");

//we call our client constructor with the "development" configuration
//object from our knexfile
const knex = knexConnector(knexfile.development)

//finally, we export the client so that we can just require this file
// anywhere when we need to make sql queries.
module.exports = knex;