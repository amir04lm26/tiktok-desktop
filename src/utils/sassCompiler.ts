const sass = require("sass");

export const compileAsync = async (filePath: string) => {
  const result = await sass.compileAsync(filePath, {style: "compressed"});
  return result.css as string;
};
