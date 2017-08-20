/* eslint-disable no-console */

// todo-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');

  db.schema.hasTable('todo').then(exists => {
    if(!exists) {
      db.schema.createTable('todo', table => {
        table.increments('id');
        table.string('title');
        table.string('description');
        table.boolean('complete');
        table.dateTime('due');
        table.boolean('expired');
        table.timestamps();
      }).then(
        () => console.log('Updated todo table'),
        e => console.error('Error updating todo table', e)
      );
    }
  });
  

  return db;
};
