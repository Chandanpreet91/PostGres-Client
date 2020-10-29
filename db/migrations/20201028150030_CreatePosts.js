
exports.up = function(knex) {
  return knex.schema.createTable('posts',(table) => {
      //create table posts
      table.increments('id'); // creates an auto increment column name id ('id', Serial)
      table.string('title');//"title" VARCHAR(255)
      table.text('content');//"content" text
      table.integer("viewCount");// "viewcount" integer
      table.string("tags");//"tags" VARCHAR(255)
      table.timestamp("CreatedAt").defaultTo(knex.fn.now());

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("posts");
};
