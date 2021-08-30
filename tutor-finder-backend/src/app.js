const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./Controllers/errorController');
//const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/users');
const requestRouter = require('./routes/requests');
const reviewRouter = require('./routes/review');
const paymentOptionRouter = require('./routes/paymentOption');
const paymentConfrimationRouter = require('./routes/paymentConfirmation');
const adminRouter = require('./routes/admin');

const app = express();
const cors = require('cors');
app.use(cors());

// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());



// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      
    
    ]
  })
);

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});

// 3) ROUTES
//app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/requests', requestRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/paymentOptions', paymentOptionRouter);
app.use('/api/v1/paymentConfirmations', paymentConfrimationRouter);
app.use('/api/v1/admins', adminRouter);


app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;