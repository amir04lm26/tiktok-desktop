"use strict";
exports.__esModule = true;
exports.menuTemplate = void 0;
var electron_1 = require("electron");
exports.menuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Quit",
                accelerator: "CmdOrCtrl+Q",
                click: function () {
                    electron_1.app.quit();
                }
            },
        ]
    },
    {
        label: "Edit",
        submenu: [
            { role: "cut" },
            { role: "copy" },
            { role: "paste" },
            { role: "pasteAndMatchStyle" },
            { role: "delete" },
            { role: "selectAll" },
        ]
    },
    {
        label: "View",
        submenu: [
            { role: "reload" },
            { role: "forceReload" },
            // { role: "toggleDevTools" },
            { type: "separator" },
            { role: "resetZoom" },
            { role: "zoomIn" },
            { role: "zoomOut" },
            { type: "separator" },
            { role: "togglefullscreen" },
        ]
    },
    {
        role: "window",
        submenu: [
            { role: "minimize" },
            { role: "togglefullscreen" },
            { role: "hide" },
            { role: "close" },
        ]
    },
];
//# sourceMappingURL=menu.js.map