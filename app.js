var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardRouter = require('./routes/board');
var facultyRouter = require('./routes/faculty');
var selectorRouter = require('./routes/selector');
var faculty = require("./models/faculty");

var resourceRouter = require("./routes/resource")

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});


var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("connection to DB succeeded")});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
}))

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);
app.use('/faculty', facultyRouter);
app.use('/selector', selectorRouter);
app.use('/resource',resourceRouter);
  

async function recreateDB(){
  // Delete everything
  await faculty.deleteMany();
  let instance1 = new faculty({Cust_Name:"Ganesh", Cust_Age:25,Mail_Id:"Ganesh@gmail.com"});
  
  instance1.save().then((res)=> {
    console.log(res);
    console.log("first object saved")
  }).catch(err => {
    console.log(err);
  });
 
 let instance2 = new faculty({Cust_Name:"uday", Cust_Age:25,Mail_Id:"uday@gmail.com"});
  
  instance2.save().then((res) => {
    console.log(res);
    console.log("second object saved")
  }).catch(err => {
    console.log(err);
  });
 
 let instance3 = new faculty({Cust_Name:"rakesh", Cust_Age:25,Mail_Id:"rakesh@gmail.com"});
  
  instance3.save().then((res) => {
    console.log(res);
    console.log("Third object saved")
  }).catch(err => {
    console.log(err);
  });
}
 let reseed = true;
 if (reseed) { recreateDB();}


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
