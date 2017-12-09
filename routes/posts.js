const express = require('express'),
      moment = require('moment'),
      pool = require('../public/js/db'),
      router = express.Router()

.get("/", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    connection.query('SELECT * FROM posts ORDER BY id DESC', (err, posts) => {
      if (err) throw err;
      res.render('posts', { posts });
    });
  connection.release();
  });
});

module.exports = router;
