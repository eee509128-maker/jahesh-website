const fs = require('fs');

const path = 'assets/entries/pages_hwsh-msnway.JRYlWwRQ.js';
let content = fs.readFileSync(path, 'utf8');

const cleanCardClass = "w-box cry9bxc c1lfjoq7 c1wt8a7g c16r2hhi c1ozwq0i cv2gy63 cxn73lu c5dy17i c1hsfuam c1e7helk cd8sgzj c15hexcm";
const cleanHeaderBoxClass = "w-box cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1md20bl c1e892th";
const cleanHeadingClass = "w-heading c1eyv08h c11dowh9 c32myit cwrra4i c12y6bqh c1qom380";
const cleanSeparatorClass = "w-separator cf3rdjf czr2pxy c32myit cwrra4i";
const cleanButtonBoxClass = "w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g c1lyhjp7";
const cleanLinkClass = "w-link c15dw1qs c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1ovihg3 cbm6zv4 ce8zlua c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy ckz5c6u cl60rel czukzo6 csvh39u";

function makeCard(title, href) {
  return `c.jsxs(e,{className:"${cleanCardClass}",children:[c.jsx(e,{className:"${cleanHeaderBoxClass}",children:c.jsx(r,{tag:"h3",className:"${cleanHeadingClass}",children:"${title}"})}),c.jsx(t,{className:"${cleanSeparatorClass}"}),c.jsx(e,{className:"${cleanButtonBoxClass}",children:c.jsx(l,{href:"${href}",className:"${cleanLinkClass}",children:"ورود"})})]})`;
}

const card1 = makeCard("جهش 1", "/chat");
const card12 = makeCard("جهش 1.2", "/ai");
const card13 = makeCard("جهش 1.3", "/ai-v13");
const card14 = makeCard("جهش 1.4", "/copy-1/untitled4");
const card2 = makeCard("جهش 2", "https://jahesh-2.vercel.app/");

// Find the outer section that wraps the cards
// Notice in the previous step we replaced fullSectionRegex with:
// c.jsx(e,{className:"w-box w-full max-w-6xl mx-auto px-4 py-8 mb-20",children:c.jsxs(e,{className:"flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6",children:[...]})})

const targetRegex = /c\.jsx\(e,\{className:"w-box w-full max-w-6xl mx-auto px-4 py-8 mb-20",children:c\.jsxs\(e,\{className:"flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6",children:\[.*?\]\}\)\}\)/s;

const replacement = `c.jsx(e,{className:"w-box w-full max-w-5xl mx-auto px-4 py-8 mb-20",children:c.jsxs(e,{className:"flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6",children:[${card1},${card12},${card13},${card14},${card2}]})})`;

if (!targetRegex.test(content)) {
    console.log("Target section not found! Trying fallback search...");
    // Let's see what is currently between "سرعتی نو برای جهش" and "footer"
    const fallbackRegex = /c\.jsx\(e,\{className:"w-box w-full.*?(?=c\.jsxs\(e,\{tag:"footer")/s;
    if (fallbackRegex.test(content)) {
        content = content.replace(fallbackRegex, replacement + ',');
        console.log("Replaced via fallback!");
    } else {
        console.log("Fallback failed as well");
        process.exit(1);
    }
} else {
    content = content.replace(targetRegex, replacement);
    console.log("Replaced target section!");
}

fs.writeFileSync(path, content, 'utf8');
console.log("Saved updated file successfully");
