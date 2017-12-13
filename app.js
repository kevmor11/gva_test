"use strict";

const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      compression = require('compression'),
      http = require('http'),

      // Routes
      index = require('./routes/index'),
      posts = require('./routes/posts'),
      submit = require('./routes/submit'),

   app = express()

  // view engine setup
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')

   .use(compression())
   .use(logger('dev'))
   .use(bodyParser.json())
   .use(bodyParser.urlencoded({
     extended: false
   }))
   .use(cookieParser())
   .use(express.static(path.join(__dirname, 'public')))
   .set('view cache', true)

   .use('/', index)
   .use('/posts', posts)
   .use('/posts/submit', submit)

   .get('/500', () => {
    throw new Error('This is a 500 Error');
  })

  //The 404 Route (ALWAYS Keep this as the last route)
  .get('/*', function(req, res){
    res.render('error');
    throw new NotFound;
  });

setInterval(() => {
    http.get("http://gva-blog.herokuapp.com");
}, 2700000);

function NotFound(msg){
  this.name = 'Not Found';
  Error.call(this, msg);
  Error.captureStackTrace(this, arguments.callee);
}


module.exports = app;