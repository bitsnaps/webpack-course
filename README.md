

```
# Init a project
mkdir src dist config
git init .
npm init -y
sudo npm install -g webpack webpack-cli
touch src/index.js dist/index.html

# test
webpack --mode=development
webpack --mode=production

# create config file
touch config/webpack.dev.js
rm dist/main.js src/index.js
touch src/main.js

# run with config file:
webpack --config=config/webpack.dev.js

```
