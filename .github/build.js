const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'mvp', 'index.html');
const mapboxToken = process.env.MAPBOX_TOKEN;

fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    return console.error(err);
  }

  const result = data.replace(/__MAPBOX_TOKEN__/g, mapboxToken);

  fs.writeFile(indexPath, result, 'utf8', (err) => {
    if (err) return console.error(err);
    console.log('Mapbox token injected successfully');
  });
});
