require("dotenv").config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');

const authRouter = require('../auth/auth-router.js');
const twitterRouter = require("../twitter/twitter-router");

const server = express();


server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(passport.initialize());
server.use(passport.session());

server.use('/api/auth', authRouter);
server.use('/twitter', twitterRouter);




module.exports = server;
