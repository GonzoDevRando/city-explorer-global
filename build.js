const fs = require('fs');

// Read the HTML file
let html = fs.readFileSync('index.html', 'utf8');

// Replace MAPBOX_TOKEN with the actual token from GitHub Secrets
html = html.replace('MAPBOX_TOKEN', process.env.MAPBOX_TOKEN);

// Write the updated HTML
fs.writeFileSync('index.html', html);

console.log('Build complete - token replaced');
