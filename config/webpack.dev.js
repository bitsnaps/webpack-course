const path = require('path');

module.exports = {

  entry: {
    // bundle (can ba an array for multiple input files):
    main: ['./src/main.js']
  },
  mode:'development',
  output:{
    // output file name, where the convention is [name]-bundle and [name] is the bundle name above
    filename: '[name]-bundle.js',
    // absolute path
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      // this needs: npm install style-loader css-loader
     {
       test: /\.css$/,
       use: [
         // this will inject style into the html
          { loader: "style-loader" },
          { loader: "css-loader" }

        ]
     }
    ]
  }

}
