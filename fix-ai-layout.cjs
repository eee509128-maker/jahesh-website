const fs = require('fs');

const path = 'assets/entries/pages_hwsh-msnway.JRYlWwRQ.js';
let content = fs.readFileSync(path, 'utf8');

const regex14 = /c\.jsxs\(e,\{className:"w-box cry9bxc c1lfjoq7 c1t3frhm[^\{]+children:\[c\.jsx\(e,\{className:"w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1\.4"\}\)\}\).*?\}\)\]\}\)/;
const regex12 = /c\.jsxs\(e,\{className:"w-box cry9bxc c1lfjoq7 c1wt8a7g c16r2hhi[^\{]+children:\[c\.jsx\(e,\{className:"w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1\.2"\}\)\}\).*?\}\)\]\}\)/;
const regex2 = /c\.jsxs\(e,\{className:"w-box cry9bxc c1lfjoq7 c1t3frhm c16r2hhi[^\{]+children:\[c\.jsx\(e,\{className:"w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 2"\}\)\}\).*?\}\)\]\}\)/;
const regex1 = /c\.jsxs\(e,\{className:"w-box cry9bxc c1lfjoq7 c1wt8a7g c16r2hhi[^\{]+children:\[c\.jsx\(e,\{className:"w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1"\}\)\}\).*?\}\)\]\}\)/;
const regex13 = /c\.jsxs\(e,\{className:"w-box cry9bxc c1lfjoq7 c1t3frhm c16r2hhi[^\{]+children:\[c\.jsx\(e,\{className:"w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th",children:c\.jsx\(r,\{tag:"h3"[^\}]*children:"جهش 1\.3"\}\)\}\).*?\}\)\]\}\)/;

const m14 = content.match(regex14)[0];
const m12 = content.match(regex12)[0];
const m2 = content.match(regex2)[0];
const m1 = content.match(regex1)[0];
const m13 = content.match(regex13)[0];

const fullSectionRegex = /c\.jsx\(e,\{className:"w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80 cjljt53 c1pzicie c1i6wwly c1e6fm68 cddbznk cl99im c2275fn".*?جهش 1\.3.*?\}\)\]\}\)\}\)/s;

const match = content.match(fullSectionRegex);
if (!match) {
    console.log("Full section not found");
    process.exit(1);
}

// We will replace the entire full section with a new wrapper containing all 5 cards in order.
const newSection = `c.jsx(e,{className:"w-box w-full max-w-6xl mx-auto px-4 py-8 mb-20",children:c.jsxs(e,{className:"flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6",children:[${m1},${m12},${m13},${m14},${m2}]})})`;

content = content.replace(fullSectionRegex, newSection);
fs.writeFileSync(path, content, 'utf8');
console.log("Updated JS file successfully");
