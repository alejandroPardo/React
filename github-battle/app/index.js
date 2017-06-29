var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

var App = require('./components/App');
// state
// lifecycle event
// UI

//npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server

ReactDOM.render(
  <App />,
  document.getElementById('app')
);