import { WebContents } from "electron";
import chokidar from "chokidar";
import { compileAsync } from "./sassCompiler";

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

  constructor(private _stylePath: string, private _contents: WebContents) {
    this._watcher = new Watcher(
      _stylePath,
      this._onChange.bind(this),
      this._onDestroy.bind(this)
    );
    this._onInit();
  }

  private async _onInit() {
    try {
      const compiledStyle = await compileAsync(this._stylePath);
      this._key = await this._contents.insertCSS(compiledStyle);
    } catch (err) {
      console.warn(err);
    }
  }

  private async _onChange(filePath: string) {
    try {
      const compiledStyle = await compileAsync(filePath);
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
