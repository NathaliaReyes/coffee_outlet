const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const router = require('./api');
const helpers = require('./utils/helpers');
require('dotenv').config();
// const multer = require('multer');
const upload = require('./public/js/uploadFile.js');
// const handlebars = require('handlebars');

const sequelize = require('./config/connection');
// This expression is requiring the connect-session-sequelize package and storing it in the SequelizeStore variable
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3002;
console.log('port is :', PORT);

const hbs = exphbs.create({ helpers });

// app.use(upload);

// This object is creating a session for the user to store their information
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  rolling: true,
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// This statement is telling the app to use the session created above
app.use(session(sess));

// Middleware para inicializar loggedIn en false si no está definido
app.use((req, res, next) => {
  if (req.session.loggedIn === undefined) {
    req.session.loggedIn = false;
  }
  next();
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use('/upload', express.static(path.join(__dirname, 'upload')));

app.use(router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});

// Export the app for Vercel
module.exports = app;