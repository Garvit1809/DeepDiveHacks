// NPM Libraries
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Application Modules
const fishRouter = require('./routes/fishRoutes');
const researcherRouter = require('./routes/researcherRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// ---------------------------------
// Middlewares

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.options('*', cors());

app.use(express.json());

// ---------------------------------
// API ROUTES

app.use('/api/v1/fishes/', fishRouter);
app.use('/api/v1/researcher/', researcherRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: "Can't find that route on the server",
  });
});

// ---------------------------------
// Global Error Handling Middleware
app.use(globalErrorHandler);

module.exports = app;
