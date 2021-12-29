const path = require("path");

const CWD_PATH = process.cwd();

const aliases = {
  "@": path.resolve(CWD_PATH, "src"),
  "@assets": path.resolve(CWD_PATH, "src/assets/"),
  "@constants": path.resolve(CWD_PATH, "src/constants/"),
  "@schema": path.resolve(CWD_PATH, "src/schema/"),
  "@utils": path.resolve(CWD_PATH, "src/utils/"),
};

const getPathAliases = () => aliases;

module.exports = {
  getPathAliases,
  CWD_PATH,
};
