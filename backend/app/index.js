//const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');
const accountRouter = require('./api/account');
const app = express();

const engine = new GenerationEngine();

app.locals.engine = engine;

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5100',
      'https://dragonstack-frontend-react-app.herokuapp.com',
    ],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

// Set static folder
app.use(express.static('public'));

// Define Route Paths
app.use('/account/', accountRouter);
app.use('/dragon/', dragonRouter);
app.use('/generation/', generationRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    type: 'error',
    message: err.message,
  });
});

engine.start();

module.exports = app;
