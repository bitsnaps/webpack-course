# Webpack Course

Course from Udemy: https://www.udemy.com/course/webpack-beyond-the-basics

## Init a project
```
mkdir src dist config
git init .
npm init -y
sudo npm install -g webpack webpack-cli
touch src/index.js dist/index.html

# test if everything is ok
webpack --mode=development
webpack --mode=production

# create config file
touch config/webpack.dev.js
rm dist/main.js src/index.js
touch src/main.js

# run with config file:
webpack --config=config/webpack.dev.js

```

Using a webpack-dev-server to run the app from a browser:
```
npm install -s webpack webpack-cli webpack-dev-server

# add to package.json the command:
"dev-server": "webpack-dev-server --config=config/webpack.dev.js",
# then run:
npm run dev-server
```
## Introducing loaders
```
# CSS Loader: create a css file
touch src/main.css
npm install style-loader css-loader

# Html loader
npm install html-loader extract-loader file-loader

# Image loader

```

## Including babel:
```
npm install babel-core

# create babel config file
touch .babelrc

# install some babel's plugins & babel's cli
npm install babel-plugin-transform-es2015-arrow-functions babel-cli

# check if everything is ok (babel will transform es2015 to es5)
./node_modules/babel-cli/bin/babel.js src/main.js

# install babel-loader for Webpack4
npm install babel-loader@7

# install babel async plugin to transform async/await to Promise
npm install babel-plugin-async-to-promises

# install babel polyfill for better IE11 compatibility
npm install babel-polyfill

# installing babel-preset is easy to setup
npm install babel-preset-env
npm install babel-plugin-transform-runtime
```

## Adding express.js
```
npm install express
mkdir src/server
touch src/server/main.js src/server/express.js

# webpack-dev middleware will glue webpack to express
npm install webpack-dev-middleware

# webpack-hot-middleware allows hot reloading
npm install webpack-hot-middleware
```

## Adding nodemon
```
npm install -g nodemon
```

## Enable html hot reloading from the server side
```
npm install html-webpack-plugin
```

## debugging
```
# adding "debugger" at any line into your source (server or client)
# will allows you to pause chrome for debugging
```

## hookup vue.js
```
npm install vue vue-loader

# style loader for hot reloading
npm install vue-template-compiler vue-style-loader

touch src/app.js src/App.vue
```
