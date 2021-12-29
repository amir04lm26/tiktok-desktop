export const isMac = process.platform === "darwin";
export const CWD_PATH = process.cwd();

export const removeFileExtension = (path: string) =>
  path.replace(/\.[^/.]+$/, "");
