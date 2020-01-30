const express = require('express');

const server = express();

const usersRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');
const configureMiddleware = require('./configure-middleware');

configureMiddleware(server);

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

module.exports = server;
