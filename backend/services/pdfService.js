const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function generatePdfFromResume(resumePayload) {
  const outputDir = path.join(__dirname, '..', 'public');
  fs.mkdirSync(outputDir, { recursive: true });
  const fileName = `resume-${Date.now()}.pdf`;
  const outPath = path.join(outputDir, fileName);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const html = `
    <html><body style="font-family:${resumePayload.font || 'Arial'}; padding:40px;">
    <h1>${resumePayload.resume.personal.fullName || ''}</h1>
    <h2 style="color:${resumePayload.accent || '#ff7a00'};">${resumePayload.resume.personal.role || ''}</h2>
    <p>${resumePayload.resume.personal.summary || ''}</p>
    </body></html>
  `;
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({ path: outPath, format: 'A4', printBackground: true, margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' } });
  await browser.close();

  return `/public/${fileName}`;
}

module.exports = { generatePdfFromResume };
