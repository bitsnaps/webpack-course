
# Init a project
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
# Introducing loaders
```
# CSS Loader: create a css file
touch src/main.css
npm install style-loader css-loader

# Html loader
npm install html-loader extract-loader file-loader
```
