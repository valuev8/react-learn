const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const clientConfig = require('../webpack.config.dev');
  const serverConfig = require('../webpack.config.server');

  const compiler = webpack([clientConfig, serverConfig]);

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
} else {
  const serverRenderer = require('../dist/js/serverRenderer').default;

  app.use(express.static('public'));
  app.use(serverRenderer());
}

module.exports = app;
