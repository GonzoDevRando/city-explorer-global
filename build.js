const fs = require('fs');

// Read the HTML file
let html = fs.readFileSync('index.html', 'utf8');

// Replace the token placeholder with the actual token from environment variable
const token = process.env.MAPBOX_TOKEN || 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
html = html.replace('MAPBOX_TOKEN', token);

// Write the updated HTML
fs.writeFileSync('index.html', html);

console.log('Build complete - token replaced');
