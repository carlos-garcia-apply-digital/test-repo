const {config} = require('./wdio.conf');
const path = require('path');

config.port= 4723;

config.specs= [
    // ToDo: define location for spec files here
    '../test/specs/android/webview.spec.js'
];

config.capabilities = [
    {
        // capabilities for local Appium web tests on an Android Emulator
        // platformName: 'Android',
        // browserName: 'Chrome',
        'appium:platformName': 'Android',
        //browserName: 'Chrome',
        //'appium:deviceName': 'Pixel 6 Pro API 34',
        'appium:deviceName': 'Pixel 6 API 30',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        //'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk')
        'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true
    }
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
//config.services = ['appium']
config.services = [['appium', {
    args: {
        relaxedSecurity: true
    }
}]]
// config.services = [['appium', {
//     args: {
//         address: 'localhost',
//         port: 4723,
//         relaxedSecurity: true
//     },
//     logPath: './'
// }]]
exports.config = config;