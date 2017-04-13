var path = require('path');

module.exports = {
  entry: './main/main.js',
  target: 'electron-main',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};