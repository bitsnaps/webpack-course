require('babel-runtime/regenerator')
require('react-hot-loader/patch')
require('babel-register')
require('webpack-hot-middleware/client?reload=true')
require('./main.css')
require('./index.html')
require('./app')

var a = async (args) => {
  var {a, b} = args
  await console.log('Hello from the future!')
  console.log('done.');
}

a({a: 1, b: 3});
