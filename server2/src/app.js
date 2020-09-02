require('dotenv').config();
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./logger');
const favicon = require('serve-favicon');
const compress = require('compression');

const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');

const services = require('./services');
const channels = require('./channels');
const appHooks = require('./app.hooks');
const middleware = require('./middleware');

const authentication = require('./authentication');

const knex = require('./knex')

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

app.configure(knex);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

app.logger = logger;

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
