"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var _constants_1 = require("@constants");
// This allows TypeScript to pick up the magic constant that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
// declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    // eslint-disable-line global-require
    electron_1.app.quit();
}
var createWindow = function () {
    // Create the browser window.
    var mainWindow = new electron_1.BrowserWindow({
        width: _constants_1.config.IS_DEV ? 860 : 420,
        height: 650,
        icon: _constants_1.config.ICON_PATH,
        webPreferences: {
            nodeIntegration: true,
            devTools: _constants_1.config.IS_DEV
        }
    });
    // and load the index.html of the app.
    // mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    mainWindow.loadURL(_constants_1.config.TIKTOK_UTL);
    console.log({ config: _constants_1.config });
    // setup application menu
    var menu = electron_1.Menu.buildFromTemplate(_constants_1.menuTemplate);
    electron_1.Menu.setApplicationMenu(menu);
    // Open the DevTools in dev mode.
    if (_constants_1.config.IS_DEV)
        mainWindow.webContents.openDevTools();
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
//# sourceMappingURL=index.js.map