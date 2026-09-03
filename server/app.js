import '@dotenvx/dotenvx/config';
//var express = require('express');
import express from 'express';
//var path = require('path');
import path from 'path';
//var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
//var logger = require('morgan');
// import logger from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import requestLogger from './middlewares/request-logger.js';
import logger from './configs/logger.js';
import openapi from './configs/openapi.js'
import swaggerUi from 'swagger-ui-express'

//var indexRouter = require('./routes/index');
import indexRouter from './routes/index.js';
//var usersRouter = require('./routes/users');
import usersRouter from './routes/users.js';


var app = express();

app.use(helmet());
app.use(compression());
// app.use(logger('dev'));
app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(import.meta.dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

if (process.env.OPENAPI_VISIBLE === 'true') {
    logger.warn('OpenAPI documentation visible!');
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapi, {explorer: true}));
}

//module.exports = app;
export default app;