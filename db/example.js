//To start any query with knex,first require the "db/connection" we created
const knex = require("./connection");


const query1 = knex.insert({title: "My Post"}).into("posts").returning("*")
//.then((result) => console.log(result));

//to look at the generated sql query, use the 'tostring()' method
// at the end of your query.
//Note that this will not run the query in the db.
//this is just for informational purpose.
console.log(query1.toString());

//To execute a query,use the method '.then' at the end of it.
//this will send the sql to your db and execute it asynchronously.
//to get the result of your query ,you must pass a callback to 'then'
//which will get the 'result' as its argument
query1.then((result) => console.table(result));

const query2 = knex.insert([
    {title:"Top 5 Schools",content:"Hogwarts,Codecore etc"},
    {title:"Top 3 Rocks",content:"diamond ,Ruby, Whiterock"},
    {title:"Top 3 Programming languaged",content:"Javascript,Ruby,PHP"},
]).into("posts")
.returning("*")

query2.then(result => { console.table(result);
knex.destroy()});//for destroying connection we run knex.destroy