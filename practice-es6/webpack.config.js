module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(nodel_modules)/,
      loader: 'babel-loader'
    }]
  }
}