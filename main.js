// Modules to control application life and create native browser window

const { app, BrowserWindow, Tray } = require("electron");
const path = require("path");

let tray = null;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
    frame: false,
  });

  mainWindow.hide();
  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  tray.on("click", () => {
    const bounds = tray.getBounds();

    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
    mainWindow.setPosition(bounds.x - 200, bounds.y - 400);
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  tray = new Tray("./yoga-pose.png");
  tray.setToolTip("peaceclip");
  createWindow();
  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
