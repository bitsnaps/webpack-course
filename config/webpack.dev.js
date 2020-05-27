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
    overlay: true,
    hot: true,
    stats: { colors: true }
  },
  devtool: 'source-map',
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
          { loader: "css-loader" }

        ]
     },
      // this needs: npm install node-sass sass-loader
     {
       test: /\.sass$/,
       use: [
         // this will inject style into the html
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
     },
      /*/ this needs: npm install stylus stylus-loader
     {
       test: /\.styl/,
       use: [
         // this will inject style into the html
          { loader: "style-loader" },
          { loader: "css-loader" },
          // you need to: npm install postcss postcss-loader
          { loader: "postcss-loader" },
          { loader: "stylus-loader" }
        ]
     },*/
      // this needs: npm install less less-loader
     {
       test: /\.less$/,
       use: [
         // this will inject style into the html
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
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
              name: "img/[name].[ext]",
              esModule: false
              // files can have hashes
              // name: "img/[name]-[hash:8].[ext]"
            }
          }
        ]
     },
     {
       test: /\.pug$/,
       use: [
          { loader: 'pug-loader' }
        ]
     },/*
     {
       test: /\.hbs/,
       use: [
         // need to: npm install handlebars handlebars-loader
          {
          loader: 'handlebars-loader',
          query: {
            inlineRequires: "/img/"
          }
        }
        ]
     }*/
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      // template: './src/index.pug',
      // template: './src/index.hbs',
      title: 'Hello Webpack4',

      // you can include as much options as you want to use them in the template
    })
  ]

}
