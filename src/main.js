require('babel-runtime/regenerator')

if (process.env.NODE_ENV !== 'production'){
  require('webpack-hot-middleware/client?reload=true')
}

require('./main.css')
require('./index.html')

/*var a = async (args) => {
  var {a, b} = args
  await console.log('Hello from the future!')
  console.log('done.');
}

a({a: 1, b: 3});
*/
