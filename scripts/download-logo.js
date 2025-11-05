// Enhanced script to find and download logo and create carousel images
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(data);
      });
    }).on('error', reject);
  });
}

function extractLogoUrl(html) {
  // Look for logo in various formats
  const patterns = [
    /<img[^>]*logo[^>]*src=["']([^"']+)["']/gi,
    /<img[^>]*src=["']([^"']*logo[^"']+)["']/gi,
    /logo["']?\s*:\s*["']([^"']+)["']/gi,
    /href=["']([^"']*logo[^"']+\.(png|jpg|svg|webp))["']/gi,
  ];
  
  const urls = new Set();
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(html)) !== null) {
      let url = match[1];
      if (url.startsWith('/')) {
        url = 'https://www.adharvaasuzuki.com' + url;
      } else if (!url.startsWith('http')) {
        url = 'https://www.adharvaasuzuki.com/' + url;
      }
      if (url.includes('logo') || url.match(/\.(png|jpg|svg|webp)$/i)) {
        urls.add(url);
      }
    }
  });
  
  return Array.from(urls);
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const fileDir = path.dirname(filepath);
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true });
    }

    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);

    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve(filepath);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    });

    request.on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });

    request.setTimeout(10000, () => {
      request.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function downloadLogo() {
  console.log('Searching for logo...\n');
  
  try {
    const html = await fetchHTML('https://www.adharvaasuzuki.com/');
    const logoUrls = extractLogoUrl(html);
    
    if (logoUrls.length > 0) {
      console.log(`Found ${logoUrls.length} potential logo URLs:\n`);
      logoUrls.forEach((url, i) => {
        console.log(`${i + 1}. ${url}`);
      });
      
      // Try to download the first few logo URLs
      for (let i = 0; i < Math.min(3, logoUrls.length); i++) {
        const url = logoUrls[i];
        const ext = url.match(/\.([^.]+)$/)?.[1] || 'png';
        const filepath = `public/images/logo${i === 0 ? '' : '-' + i}.${ext}`;
        
        try {
          await downloadImage(url, filepath);
        } catch (error) {
          console.log(`✗ Failed: ${path.basename(filepath)} - ${error.message}`);
        }
      }
    } else {
      console.log('No logo found. Creating placeholder...');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

downloadLogo();

