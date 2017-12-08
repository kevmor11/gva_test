const express = require('express'),
      pool = require('../public/js/db'),
      router = express.Router()

.get("/", (req, res) => {
  const title = "Kevin's Express Template";
  res.render('index', { title });
});

module.exports = router;

// pool.getConnection((error, connection) => {
//   if (error) throw error;
//   connection.query('SELECT * FROM table', (err, result) => {
//     if (err) throw err;
//   });
//   connection.release();
// });
