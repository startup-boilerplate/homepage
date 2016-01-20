import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import routes from './routes.js';
import './stylesheet/style.scss';


module.exports = {

  'react-router': {

    getPaths(parser) {
      return parser(routes);
    },

    buildHtml(path, callback) {
      match({ routes, location: path }, (error, redirectLocation, renderProps) => {
        callback(renderToStaticMarkup(<RoutingContext {...renderProps} />));
      });
    },
  },
};
