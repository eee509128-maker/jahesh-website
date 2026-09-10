const fs = require('fs');
const content = fs.readFileSync('assets/entries/pages_hwsh-msnway.JRYlWwRQ.js', 'utf8');

const regex14 = /c\.jsxs\(e,\{className:"[^"]*",children:\[c\.jsx\(e,\{className:"[^"]*",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1\.4"\}\)\}\).*?\}\)\]\}\)/;
const regex12 = /c\.jsxs\(e,\{className:"[^"]*",children:\[c\.jsx\(e,\{className:"[^"]*",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1\.2"\}\)\}\).*?\}\)\]\}\)/;
const regex2 = /c\.jsxs\(e,\{className:"[^"]*",children:\[c\.jsx\(e,\{className:"[^"]*",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 2"\}\)\}\).*?\}\)\]\}\)/;
const regex1 = /c\.jsxs\(e,\{className:"[^"]*",children:\[c\.jsx\(e,\{className:"[^"]*",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1"\}\)\}\).*?\}\)\]\}\)/;
const regex13 = /c\.jsxs\(e,\{className:"[^"]*",children:\[c\.jsx\(e,\{className:"[^"]*",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1\.3"\}\)\}\).*?\}\)\]\}\)/;

console.log("1:", content.match(regex1)?.[0]);
console.log("1.2:", content.match(regex12)?.[0]);
console.log("1.3:", content.match(regex13)?.[0]);
console.log("1.4:", content.match(regex14)?.[0]);
console.log("2:", content.match(regex2)?.[0]);
