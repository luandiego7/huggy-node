const express   = require('express');
const Spawn     = require('child_process').spawn;
const puppeteer = require('puppeteer');

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Huggy!');
});


router.post('/alert', (req, res) => {

    Spawn('google-chrome', [ 'https://web.whatsapp.com/',
        //'--headless',
        '--disable-gpu',
        '--no-sandbox',
        '--remote-debugging-port=9222',
        '--remote-debugging-address=0.0.0.0',
        '--user-data-dir=data',
        '--no-first-run',
        '--disable-popup-blocking',
        '--disable-infobars',
        '--start-maximized',
        '--use-fake-device-for-media-stream',
        '--mute-audio',
        '--ignore-certificate-errors'
    ]);

    /*(async () => {
        const browser = await puppeteer.launch({
            headless:false,
            defaultViewport:null
        });
        const page = await browser.newPage();
        await page.goto('https://web.whatsapp.com/');
        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.dismiss();
            //await browser.close();
        });
        page.evaluate(() => alert('huggy'));

    })();*/


});

module.exports = router;
