const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    // bundle (can ba an array for multiple input files):
    main: [
      // 'babel-polyfill', // too many polyfill gonna be bundled
      // 'core-js/fn/promise', // only promise function is gonna included to the bundle
      './src/main.js'
    ]
  },
  mode:'production',
  output:{
    // output file name, where the convention is [name]-bundle and [name] is the bundle name above
    filename: '[name]-bundle.js',
    // absolute path
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    // modules need to be installed (it'll applied one by one bottom-up)
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      // this needs: npm install style-loader css-loader
     {
       test: /\.css$/,
       use: [
         // this will inject style into the html
          { loader: "style-loader" },
          {
            loader: "css-loader",
            // options: {
            //   minimize: true
            // }
         }

        ]
     },
     // this needs: npm install html-loader extract-loader file-loader
     {
       test: /\.html$/,
       use: [
         /*
         // these two loaders are replaced by HtmlWebpackPlugin
         { loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          // this tells webpack to output resource in a separate file
          { loader: "extract-loader" },*/
          { loader: "html-loader",
            options: {
              attributes: {
                list: [
                  {
                    tag: "img",
                    attribute: "src",
                    type: "src"
                  }
                ]
              }
            }
         },
        ]
     },
     {
       test: /\.(jpg|png)$/,
       use: [
          { loader: "file-loader",
            options: {
              name: "img/[name].[ext]"
              // files can have hashes
              // name: "img/[name]-[hash:8].[ext]"
            }
          }
        ]
     }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]

}
