const fs = require('fs');
const content = fs.readFileSync('jaheshkala/index.html', 'utf8');
if (content.includes('جهش آی تی') || content.includes('جهش ای تی')) {
  console.log('SEO is fixed in jaheshkala/index.html');
} else {
  console.log('SEO NOT found in jaheshkala/index.html');
}
