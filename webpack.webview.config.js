var path = require('path');

module.exports = {
  entry: './js/webview.js',
  target: 'electron',
  output: {
    filename: 'webview.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};