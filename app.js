"use strict";

const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      compression = require('compression'),

      // Routes
      index = require('./routes/index'),

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

   .get('/500', () => {
    throw new Error('This is a 500 Error');
  })

  //The 404 Route (ALWAYS Keep this as the last route)
  .get('/*', function(req, res){
    res.render('error');
    throw new NotFound;
  });

function NotFound(msg){
  this.name = 'Not Found';
  Error.call(this, msg);
  Error.captureStackTrace(this, arguments.callee);
}


module.exports = app;