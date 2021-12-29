const path = require("path");

const CWD_PATH = process.cwd();

const aliases = {
  "@": path.resolve(CWD_PATH, "src"),
  "@assets": path.resolve(CWD_PATH, "src/assets/"),
  "@styles": path.resolve(CWD_PATH, "src/styles/"),
  "@utils": path.resolve(CWD_PATH, "src/utils/"),
  "@constants": path.resolve(CWD_PATH, "src/constants/"),
};

const getPathAliases = () => aliases;

module.exports = {
  getPathAliases,
  CWD_PATH,
};
