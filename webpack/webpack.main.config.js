const path = require("path");
const { getPathAliases, CWD_PATH } = require("./helpers");

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: path.join(CWD_PATH, "src/index.ts"),
  // Put your normal webpack config below here
  module: {
    rules: require("./webpack.rules"),
  },
  resolve: {
    alias: getPathAliases(),
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".scss", ".json"],
  },
};
