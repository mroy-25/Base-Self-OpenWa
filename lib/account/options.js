module.exports = options = (headless, start) => {
	const options = {
		authTimeout: 60,
		autoRefresh: true,
		blockAssets: true,
		blockCrashLogs: true,
		bypassCSP: true, // Kalo media error set ke true
		restartOnCrash: start,
		headless: headless, // Setting false klo mau ngebuka ama chromenya
        cacheEnabled: false,
		licenseKey: 'Beli-Dong-asu', // Kalo punya license taro sini:v
		logConsoleErrors: false,
        useChrome: true,
        killProcessOnBrowserClose: true,
        throwErrorOnTosBlock: false,
        chromiumArgs: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--aggressive-cache-discard',
            '--disable-cache',
            '--disable-application-cache',
            '--disable-offline-load-stale-cache',
            '--disk-cache-size=0'
        ],
		qrQuality: 1.0,
		qrRefreshS: 15,
		qrTimeout: 60,
		sessionDataPath: './lib/account/sesion.data.json'
	}
	return options
}