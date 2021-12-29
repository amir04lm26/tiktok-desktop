import { WebContents } from "electron";
import chokidar from "chokidar";
import { writeFile, readFile } from "fs/promises";
import { config } from "@constants";
import { compileAsync } from "./sassCompiler";
import { removeFileExtension } from "./main";

export class Watcher {
  private _watcher: chokidar.FSWatcher;

  constructor(
    private _filePath: string,
    private _onChange: (filePath: string) => unknown,
    private _onDestroy: Function
  ) {}

  watch() {
    this._watcher = chokidar.watch(this._filePath, {
      persistent: true,
      interval: 100,
    });

    this._watcher.on("change", (_path, _stats) => {
      this._onChange(this._filePath);
    });
  }

  destroy() {
    this._onDestroy();
    this._watcher.close();
  }
}

export class SassWatcher {
  private _watcher: Watcher;
  private _key: string;
  private _cssPath: string;

  constructor(private _stylePath: string, private _contents: WebContents) {
    if (config.IS_DEV)
      this._watcher = new Watcher(
        _stylePath,
        this._onChange.bind(this),
        this._onDestroy.bind(this)
      );
    this._cssPath = `${removeFileExtension(_stylePath)}.css`;
    this._onInit();
  }

  private async _onInit() {
    try {
      let compiledStyle: string;
      if (config.IS_DEV) {
        compiledStyle = await compileAsync(this._stylePath);
        await writeFile(this._cssPath, compiledStyle, {
          flag: "wx",
          encoding: "utf8",
        });
      } else {
        compiledStyle = await readFile(this._cssPath, {
          encoding: "utf8",
        });
      }
      this._key = await this._contents.insertCSS(compiledStyle);
    } catch (err) {
      console.warn(err);
    }
  }

  private async _onChange(filePath: string) {
    try {
      const compiledStyle = await compileAsync(filePath);
      await writeFile(this._cssPath, compiledStyle, {
        flag: "wx",
        encoding: "utf8",
      });
      await this._contents.removeInsertedCSS(this._key);
      this._key = await this._contents.insertCSS(compiledStyle);
    } catch (err) {
      console.warn(err);
    }
  }

  private _onDestroy() {}

  watch() {
    this._watcher.watch();
  }
}
