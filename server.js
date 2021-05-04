const express = require('express');
const routes = require("./routes");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Import the connection object
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// // Start the API server
// 
