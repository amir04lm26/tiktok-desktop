import path from "path";
console.log('node_env: ', process.env.TikTok_ENV)

export const config = {
  TIKTOK_UTL: "https://tiktok.com/",
  ICON_PATH: path.join(__dirname, "src/assets/images/", "icon.png"),
  IS_DEV: process.env.TikTok_ENV !== "production",
};

export default config;
