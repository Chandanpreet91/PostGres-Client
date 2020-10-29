const knex= require('./connection');

const query = knex("posts").where("id","<=","5").update({
    title:"Sparkled"
});

console.log(query.toString());

query.then((result) => {
    //The result returned from executing an 'update' is the number of rows
    //affected by that update
    console.table(result);
    //knex.destroy();
})

//Delete all posts but one
const deleteQuery = knex("posts")
.where ("id","!=",1).del();

console.log(deleteQuery.toString());

deleteQuery.then((result) => {
    console.log("deleteQuery:",deleteQuery);
    //knex.destroy();
})
//lets select all post after delete them, so we should get back one post if oor deleteQuery worked"
const query3 = knex.raw("SELECT * FROM posts");

console.log(query3.toString());

query3.then((result) => {
    console.table(result.raw);
    knex.destroy();
})