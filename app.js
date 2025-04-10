var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cakesRouter = require('./routes/cakes');

var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var cakes = require("./models/cakes");
var resourceRouter = require('./routes/resource');


require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await cakes.deleteMany();

let instance1 = new cakes({name:"ChocolateCake", flavors:'Vanilla',Price:15.4});
instance1.save().then(doc=>{
console.log("First object saved")}).catch(err=>{
console.error(err)});

let instance2 = new cakes({name: "RedVelvetCake", flavors: "CreamCheese", price: 20.99});
instance2.save().then(doc=>{
console.log("Second object saved")}).catch(err=>{
console.error(err)});

let instance3 = new cakes({name: "CarrotCake", flavors: "Walnut", price: 18.50});
instance3.save().then(doc=>{
console.log("Third object saved")}).catch(err=>{
console.error(err)});

}

let reseed = true;
if (reseed) {recreateDB();}


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cakes', cakesRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);



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



//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});


module.exports = app;
