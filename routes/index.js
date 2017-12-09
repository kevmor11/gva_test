const express = require('express'),
      // pool = require('../public/js/db'),
      router = express.Router()

.get("/", (req, res) => {
  res.redirect('/posts');
});

module.exports = router;
