const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function recordDemo() {
    console.log('Starting demo recording...');
    
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport to iPhone dimensions
    await page.setViewport({
        width: 390,
        height: 844,
        deviceScaleFactor: 2
    });
    
    // Load the neural demo HTML
    const htmlPath = path.join(__dirname, 'public', 'neural-demo.html');
    await page.goto(`file://${htmlPath}`);
    
    // Wait for the page to load
    await page.waitForTimeout(1000);
    
    // Start recording
    console.log('Starting video recording...');
    
    // For now, we'll create a simple MP4 using ffmpeg
    // In a real scenario, you'd use a proper screen recording tool
    console.log('Demo animation is ready for recording!');
    console.log('Please use a screen recording tool to capture the browser window for 15 seconds');
    console.log('Save the recording as "neural-demo.mp4" in the public folder');
    
    // Keep the browser open for manual recording
    await page.waitForTimeout(15000); // 15 seconds
    
    await browser.close();
    console.log('Recording session completed');
}

// Check if puppeteer is installed
try {
    require('puppeteer');
    recordDemo().catch(console.error);
} catch (error) {
    console.log('Puppeteer not installed. Installing...');
    const { execSync } = require('child_process');
    try {
        execSync('npm install puppeteer', { stdio: 'inherit' });
        recordDemo().catch(console.error);
    } catch (installError) {
        console.error('Failed to install puppeteer:', installError);
        console.log('Please manually install puppeteer: npm install puppeteer');
    }
} 