const path = require('path');

const dirname = __dirname;

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
