const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");
const { getPathAliases } = require("./helpers");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    alias: getPathAliases(),
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".scss", ".json"],
  },
};
