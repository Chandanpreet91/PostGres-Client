const faker = require("faker");

//To run your seed files,do:
//knex seed:run

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts')
  .del() //Delete from "posts"
    .then(function() {
      //generate an array of 1000 posts using faker
      const posts = Array.from({length:1000}).map(()=>{
        return {
          title: faker.company.catchPhrase(),
          content: faker.lorem.paragraph(),
          imageUrl: faker.image.imageUrl(),
          viewCount: faker.random.number(100),
          CreatedAt: faker.date.past(),
          tags: faker.name.firstName(),
        };
      });
      // Inserts seed entries
      return knex("posts").insert(posts);
    });
};
