"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.config = void 0;
var path_1 = __importDefault(require("path"));
console.log('node_env: ', process.env.TikTok_ENV);
exports.config = {
    TIKTOK_UTL: "https://tiktok.com/",
    ICON_PATH: path_1["default"].join(__dirname, "src/assets/images/", "icon.png"),
    IS_DEV: process.env.TikTok_ENV !== "production"
};
exports["default"] = exports.config;
//# sourceMappingURL=config.js.map