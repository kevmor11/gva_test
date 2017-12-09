const express = require('express'),
      mysql = require('mysql'),
      pool = require('../public/js/db'),
      router = express.Router()

.get("/", (req, res) => {
  res.render('submit');
})

.post("/", (req, res) => {
  const title = req.body.title,
        description = req.body.description,
        email = req.body.email,
        body = req.body.body;
  pool.getConnection((error, connection) => {
    if (error) throw error;
    connection.query(`INSERT INTO posts (title, description, email, body) VALUES (${mysql.escape(title)}, ${mysql.escape(description)}, ${mysql.escape(email)}, ${mysql.escape(body)})`, (err) => {
      if (err) throw err;
      res.redirect('/posts');
    });
    connection.release();
  });
});

module.exports = router;
