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
    contentBase: path.resolve(__dirname, '../dist'),
    // display errors on the browser as well
    overlay: true
  },
  module: {
    // modules need to be installed (it'll applied one by one bottom-up)
    rules: [
      // this needs: npm install style-loader css-loader
     {
       test: /\.css$/,
       use: [
         // this will inject style into the html
          { loader: "style-loader" },
          { loader: "css-loader" }

        ]
     },
     // this needs: npm install html-loader extract-loader file-loader
     {
       test: /\.html$/,
       use: [
         { loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          // this tells webpack to output resource in a separate file
          { loader: "extract-loader" },
          { loader: "html-loader" },
        ]
     }
    ]
  }

}
