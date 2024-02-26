const purgecss = require('purgecss');
const glob = require('glob');
const fs = require('fs');

// Define paths to your CSS files and HTML files
const cssFiles = glob.sync('assets/css/**/*.css');
const htmlFiles = glob.sync('**/*.html');

// Configure PurgeCSS
const purgecssConfig = {
  content: htmlFiles,
  css: cssFiles,
};

// Run PurgeCSS
purgecss(purgecssConfig).then((result) => {
  // Write optimized CSS to a new file
  fs.writeFileSync('assets/css/optimized.css', result[0].css);
  console.log('CSS optimized successfully!');
}).catch((error) => {
  console.error('Error optimizing CSS:', error);
});