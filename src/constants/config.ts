import path from "path";

export const config = {
  TIKTOK_UTL: "https://tiktok.com/",
  USER_AGENT:
    "Mozilla/5.0 (Linux; Android 11; Surface Duo 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Mobile Safari/537.36 EdgA/95.0.1020.42",
  ICON_PATH: path.join(__dirname, "src/assets/images/", "icon.png"),
  IS_DEV: process.env.TikTok_ENV !== "production",
};

export default config;
