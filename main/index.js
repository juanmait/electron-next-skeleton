// Native
const { format } = require('url')

// Packages
const { BrowserWindow, app, globalShortcut } = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')
const { resolve } = require('app-root-path')

const DEV_PATH = 'http://localhost:8000'

const PROD_PATH = format({
  pathname: resolve('out/index.html'),
  protocol: 'file:',
  slashes: true
})

const PATH = isDev ? DEV_PATH : PROD_PATH

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

const createWindow = async () => {
  await prepareNext('./')

  const reload = () => {
    if (mainWindow) {
      mainWindow.reload()
    }
  }

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 576,

    // node integration will be disabled in the render process by default in
    // electron v5, so here we explicitly set it to true to avoid surprises
    // in the future
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (isDev) {
    // Open the DevTools.
    mainWindow.webContents.openDevTools()
    globalShortcut.register('F5', reload)
    globalShortcut.register('CommandOrControl+R', reload)
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    if (isDev) {
      globalShortcut.unregister('F5')
      globalShortcut.unregister('CommandOrControl+R')
    }

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.loadURL(PATH)
}

// Prepare the renderer once the app is ready
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
