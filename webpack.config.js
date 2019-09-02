const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname,'dist'),
    library: 'araNumToCnNum',
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}