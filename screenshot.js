// Datei: screenshot.js

const puppeteer = require('puppeteer');

async function macheScreenshot() {
    // 1. Startet eine Browser-Instanz (Chromium)
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // 2. Definieren Sie die Ziel-URL
    const urlTarget = 'https://de.wikipedia.org/wiki/Node.js';
    
    // 3. Navigieren Sie zur URL
    console.log(`Besuche: ${urlTarget}`);
    await page.goto(urlTarget, {
        // Warten Sie, bis das Netzwerk nicht mehr ausgelastet ist (zeigt an, dass die Seite geladen ist)
        waitUntil: 'networkidle0', 
    });
    
    // 4. Erstellen Sie den vollständigen Seiten-Screenshot
    const dateiName = 'vollbild-screenshot-node-js.png';
    console.log(`Erstelle vollständigen Screenshot als: ${dateiName}`);
    await page.screenshot({
        path: dateiName,
        fullPage: true, // 👈 Die wichtige Option für einen vollständigen Seiten-Screenshot
    });
    
    // 5. Schließen Sie den Browser
    await browser.close();
    
    console.log('✅ Fertig! Der Screenshot wurde gespeichert.');
}

// Führen Sie die Funktion aus
macheScreenshot().catch(err => {
    console.error('Es ist ein Fehler aufgetreten:', err);
    process.exit(1);
});
