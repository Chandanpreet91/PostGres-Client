const knex = require("./connection");

//select all posts where title ends with letter e

//const query = knex
//.select("*")
//.from("posts")
//.where("title","ilike","%e");

//console.log(query.toString());

//query.then(result => {
  //  console.log(result)
//});

//select last 10 posts

knex 
.select("*")
.from("posts")
.orderBy("id","desc")
.limit(10)
.then((data) => {
    //if the query is successful,the result from it will be returned as an array of object
    //where objects corresponds to a row(record) in the table where its key correspond to the
    //column of the table.
    
    //you can use console.table() to display array of objects as a table
 //console.table(data)
})

//count the number of posts, find the maximum id ,find the sum of ids from posts table
const myQuery = knex
.count("* as postCount")
.max("id as maxId")
.sum("id as totalOfIds")
.from("posts");

//or you can type the above query in raw sql
//knex.raw('SELECT COUNT(*) AS "postCount", MAX("id") AS "maxId", SUM("id") AS "totalOfIds" FROM "posts"
// );
console.log(myQuery.toString());
myQuery.then((data)=>{
    console.table(data);
    knex.destroy();
})