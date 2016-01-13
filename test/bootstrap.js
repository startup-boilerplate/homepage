require('core-js/es5');

const context = require.context('./test', true, /.+\.spec\.js?$/);
context.keys().forEach(context);
