var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
const keys = require('./secretkeys');

// Import routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let tweetsRouter = require('./routes/tweets');
let IBMRouter = require('./routes/watson')
let pokeRouter = require('./routes/pokemon');

var app = express();
app.use(express.json());

mongoose.connect(keys.database.dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(4500, () => { console.log('Server is running...') });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Imported routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/twitter', tweetsRouter);
app.use('/watson', IBMRouter);
app.use('/pokemon', pokeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
