const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
// const url = require("url");
function createWindow() {
  // const startUrl =
  //   process.env.ELECTRON_START_URL ||
  //   url.format({
  //     pathname: path.join(__dirname, "../index.html"),
  //     protocol: "file:",
  //     slashes: true,
  //   });
  const win = new BrowserWindow({
    // width: 800,
    // height: 800,
    kiosk: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });
  // win.loadURL(startUrl);
  win.loadURL("http://localhost:3000");

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("close-app", () => {
  app.quit();
});
