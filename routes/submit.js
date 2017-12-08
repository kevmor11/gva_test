const express = require('express'),
      pool = require('../public/js/db'),
      router = express.Router()

.get("/", (req, res) => {
  res.render('submit');
})

.post("/", (req, res) => {
  const title = req.body.title,
        description = req.body.description,
        email = req.body.email;
  pool.getConnection((error, connection) => {
    if (error) throw error;
    connection.query(`INSERT INTO posts (title, description, email) VALUES (${title}, ${description}, ${email})`, (err) => {
      if (err) throw err;
      res.render('posts');
    });
    connection.release();
  });
});

module.exports = router;
