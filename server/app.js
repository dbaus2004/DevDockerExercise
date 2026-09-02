//var express = require('express');
import express from 'express';
//var path = require('path');
import path from 'path';
//var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
//var logger = require('morgan');
import logger from 'morgan';

//var indexRouter = require('./routes/index');
import indexRouter from './routes/index.js';
//var usersRouter = require('./routes/users');
import usersRouter from './routes/users.js';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(import.meta.dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//module.exports = app;
export default app;