import { app, BrowserWindow, ipcMain } from 'electron'
import { getSystemPlatform } from './utils/utils'
import setApplicationMenu from './system/menu';

function createWindow() {
	let mainWindow = new BrowserWindow({
		width: 1600,
		height: 1200,
		webPreferences: {
			nodeIntegration: true,
		},
		backgroundColor: '#f0f2f5',
	})

	setApplicationMenu()

	mainWindow.on('ready-to-show', () => {
		mainWindow.show()
	})

	mainWindow.loadURL('http://localhost:8888')
	// mainWindow.loadFile('./index.html')

	// this is for windows system notification
	app.setAppUserModelId('com.your.app')

	if (process.env.NODE_ENV === 'development') {
		require('devtron').install()
		mainWindow.webContents.openDevTools()
	}
}
app.allowRendererProcessReuse = true

app.on('ready', createWindow)
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (getSystemPlatform() === 'MAC') {
		// to provent error when reopen window in mac
		ipcMain.removeAllListeners()
	} else {
		app.quit()
	}
})

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
