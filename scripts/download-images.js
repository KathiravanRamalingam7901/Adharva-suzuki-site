// Enhanced script to find and download images from adharvaasuzuki.com
// This will fetch the HTML and extract actual image URLs

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (response) => {
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

function extractImageUrls(html) {
  const urls = new Set();
  
  // Find all img tags
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    let url = match[1];
    // Convert relative URLs to absolute
    if (url.startsWith('/')) {
      url = 'https://www.adharvaasuzuki.com' + url;
    } else if (!url.startsWith('http')) {
      url = 'https://www.adharvaasuzuki.com/' + url;
    }
    urls.add(url);
  }
  
  // Find background images in style attributes
  const bgRegex = /background-image:\s*url\(["']?([^"')]+)["']?\)/gi;
  while ((match = bgRegex.exec(html)) !== null) {
    let url = match[1];
    if (url.startsWith('/')) {
      url = 'https://www.adharvaasuzuki.com' + url;
    } else if (!url.startsWith('http')) {
      url = 'https://www.adharvaasuzuki.com/' + url;
    }
    urls.add(url);
  }
  
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

function getFilenameFromUrl(url) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const filename = path.basename(pathname);
    return filename || 'image.jpg';
  } catch {
    return 'image.jpg';
  }
}

async function findAndDownloadImages() {
  console.log('Fetching website HTML to find image URLs...\n');
  
  try {
    const html = await fetchHTML('https://www.adharvaasuzuki.com/');
    console.log('HTML fetched successfully!\n');
    
    const imageUrls = extractImageUrls(html);
    console.log(`Found ${imageUrls.length} image URLs:\n`);
    imageUrls.forEach((url, i) => {
      console.log(`${i + 1}. ${url}`);
    });
    console.log('\n');
    
    // Download important images
    const importantImages = imageUrls.filter(url => {
      const lowerUrl = url.toLowerCase();
      return lowerUrl.includes('banner') || 
             lowerUrl.includes('bike') || 
             lowerUrl.includes('motorcycle') || 
             lowerUrl.includes('scooter') ||
             lowerUrl.includes('access') ||
             lowerUrl.includes('gixxer') ||
             lowerUrl.includes('avenis') ||
             lowerUrl.includes('logo') ||
             (lowerUrl.includes('.jpg') || lowerUrl.includes('.png') || lowerUrl.includes('.webp'));
    });
    
    console.log(`Downloading ${importantImages.length} important images...\n`);
    
    for (let i = 0; i < importantImages.length; i++) {
      const url = importantImages[i];
      const filename = getFilenameFromUrl(url);
      const filepath = `public/images/${filename}`;
      
      try {
        await downloadImage(url, filepath);
        await new Promise(resolve => setTimeout(resolve, 500)); // Rate limiting
      } catch (error) {
        console.log(`✗ Failed: ${filename} - ${error.message}`);
      }
    }
    
    console.log('\nDownload process completed!');
    console.log('\nPlease check the public/images folder for downloaded images.');
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

findAndDownloadImages();
