const path = require("path");

module.exports = {
  entry: "./src/index.html",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
};
