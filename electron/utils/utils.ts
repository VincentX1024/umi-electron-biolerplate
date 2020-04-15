import electron from 'electron'
import * as os from 'os'


const switchExternalDisplay = (screenid: any) => {
	let displays = electron.screen.getAllDisplays()
	return displays.find((display) => display.id === screenid)
}

/**
 * get OS Platform
 */
const getSystemPlatform = (): string => {
	const platforms = {
		WINDOWS: 'WINDOWS',
		MAC: 'MAC',
		LINUX: 'LINUX',
		SUN: 'SUN',
		OPENBSD: 'OPENBSD',
		ANDROID: 'ANDROID',
		AIX: 'AIX',
	}

	const platformsNames: any = {
		win32: platforms.WINDOWS,
		darwin: platforms.MAC,
		linux: platforms.LINUX,
		sunos: platforms.SUN,
		openbsd: platforms.OPENBSD,
		android: platforms.ANDROID,
		aix: platforms.AIX,
	}

	return platformsNames[os.platform()]
}

export {
	switchExternalDisplay,
	getSystemPlatform
}
