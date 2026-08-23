const fs = require('fs');
const path = require('path');

function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    var filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile() && (filepath.endsWith('.jsx') || filepath.endsWith('.js'))) {
      callback(filepath);
    }
  });
}

walkSync(path.join(__dirname, 'src'), (filepath) => {
  let content = fs.readFileSync(filepath, 'utf8');
  let originalContent = content;

  // Replace src="/assets/..." with src={`${import.meta.env.BASE_URL}assets/...`}
  content = content.replace(/src="\/assets\/(.*?)"/g, 'src={`${import.meta.env.BASE_URL}assets/$1`}');
  
  // Replace background image inline styles or other raw strings: "/assets/..." to `${import.meta.env.BASE_URL}assets/...`
  // For data files:
  if (filepath.includes('Data.js')) {
    content = content.replace(/"\/assets\/(.*?)"/g, '`${import.meta.env.BASE_URL}assets/$1`');
  }

  // Specific fix for Hero.jsx conditional image
  if (filepath.endsWith('Hero.jsx')) {
    content = content.replace(/src=\{isRTL \? "\/assets\/(.*?)" : "\/assets\/(.*?)"\}/g, 
      'src={isRTL ? `${import.meta.env.BASE_URL}assets/$1` : `${import.meta.env.BASE_URL}assets/$2`}');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated ${filepath}`);
  }
});
