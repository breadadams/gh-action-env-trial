const path = require("path");
const DotenvPlugin = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  plugins: [new DotenvPlugin()],
};
