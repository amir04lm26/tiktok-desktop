import path from "path";
import { CWD_PATH } from "@utils";
import { IInjectStyles } from "schema";
import { SassWatcher } from "@utils";

export const STYLES_PATH: IInjectStyles["styles"] = [
  path.join(CWD_PATH, "src/styles/index.scss"),
];

export const injectStyles = (
  contents: IInjectStyles["contents"],
  styles: IInjectStyles["styles"] = STYLES_PATH
) => {
  contents.on("did-finish-load", async () => {
    styles.map(async (stylePath) => {
      const newWatcher = new SassWatcher(stylePath, contents);
      newWatcher.watch();
    });
  });
};
