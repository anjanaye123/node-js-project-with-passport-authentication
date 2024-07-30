

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const mongoose = require('mongoose');


const app = express();
const port = 3000;

//DB Config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected.....'))
  .catch(err => console.log(err));


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Bodyparser
//app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));


// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { error } = require('console');

app.use('/', indexRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
