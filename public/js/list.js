#!/usr/bin/env node

const pool = require('./db');

pool.getConnection((error, connection) => {
  if (error) throw error;
  connection.query('SELECT * FROM posts ORDER BY id DESC LIMIT 5', (err, posts) => {
    if (err) throw err;
    console.log("5 Most Recent Blog Posts\n")
    posts.forEach((post, i) => {
      console.log('Post #',i+1, '\n');
      console.log('Title:', post.title, '\n');
      console.log('Description:', post.description, '\n');
      console.log('Author:', post.email, '\n');
      console.log('Body:', post.body, '\n\n');
    })
  });
connection.release();
});
