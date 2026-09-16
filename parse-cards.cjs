const fs = require('fs');

const content = fs.readFileSync('assets/entries/pages_hwsh-msnway.JRYlWwRQ.js', 'utf8');

const regex14 = /c\.jsxs\(e,\{className:"w-box cry9bxc c1lfjoq7 c1t3frhm[^\{]+children:\[c\.jsx\(e,\{className:"w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1\.4"\}\)\}\).*?\}\)\]\}\)/;
const regex12 = /c\.jsxs\(e,\{className:"w-box cry9bxc c1lfjoq7 c1wt8a7g c16r2hhi[^\{]+children:\[c\.jsx\(e,\{className:"w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1\.2"\}\)\}\).*?\}\)\]\}\)/;
const regex2 = /c\.jsxs\(e,\{className:"w-box cry9bxc c1lfjoq7 c1t3frhm c16r2hhi[^\{]+children:\[c\.jsx\(e,\{className:"w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 2"\}\)\}\).*?\}\)\]\}\)/;
const regex1 = /c\.jsxs\(e,\{className:"w-box cry9bxc c1lfjoq7 c1wt8a7g c16r2hhi[^\{]+children:\[c\.jsx\(e,\{className:"w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1"\}\)\}\).*?\}\)\]\}\)/;
const regex13 = /c\.jsxs\(e,\{className:"w-box cry9bxc c1lfjoq7 c1t3frhm c16r2hhi[^\{]+children:\[c\.jsx\(e,\{className:"w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1\.3"\}\)\}\).*?\}\)\]\}\)/;


const m14 = content.match(regex14);
const m12 = content.match(regex12);
const m2 = content.match(regex2);
const m1 = content.match(regex1);
const m13 = content.match(regex13);

console.log("1.4:", !!m14);
console.log("1.2:", !!m12);
console.log("2:", !!m2);
console.log("1:", !!m1);
console.log("1.3:", !!m13);

