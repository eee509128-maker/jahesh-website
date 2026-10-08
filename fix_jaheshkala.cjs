const fs = require('fs');
const path = require('path');

const fileHeader = './jaheshkala-app/src/components/DigikalaHeader.tsx';
let contentHeader = fs.readFileSync(fileHeader, 'utf8');

// Fix the dropdown getting clipped:
// We change absolute right-0 top-full to fixed left-4 right-4 sm:absolute sm:left-auto sm:right-0 sm:top-full mt-2 w-full sm:w-72
contentHeader = contentHeader.replace(
  `className="absolute right-0 top-full mt-2 w-72 max-w-[85vw] bg-white dark:bg-[#160f38] border border-purple-200 dark:border-purple-700/80 rounded-2xl shadow-2xl p-2 space-y-1 z-50 animate-in fade-in max-h-80 overflow-y-auto"`,
  `className="fixed top-28 left-4 right-4 sm:absolute sm:top-full sm:right-0 sm:left-auto mt-2 sm:w-72 sm:max-w-[85vw] bg-white dark:bg-[#160f38] border border-purple-200 dark:border-purple-700/80 rounded-2xl shadow-2xl p-2 space-y-1 z-50 animate-in fade-in max-h-80 overflow-y-auto"`
);

// We also need to make sure the dropdownRef doesn't clip on mobile.
// Wait, if it's fixed, it will escape the overflow-x-auto clipping! 
// So changing it to fixed on mobile is enough.
// Actually, `fixed` will escape `overflow: auto` unless a parent has transform or filter.
fs.writeFileSync(fileHeader, contentHeader, 'utf8');

// Now, fix DigikalaSlider overlapping arrows.
const fileSlider = './jaheshkala-app/src/components/DigikalaSlider.tsx';
let contentSlider = fs.readFileSync(fileSlider, 'utf8');

// Replace CTA flex container to prevent overlap
// Replace: <div className="flex items-center justify-between gap-2">
// With: <div className="flex items-center justify-between gap-2 mt-auto"> (or just ensure flex-wrap)
contentSlider = contentSlider.replace(
  `<div className="flex items-center justify-between gap-2">
            <button`,
  `<div className="flex items-center justify-between gap-1 sm:gap-2 flex-wrap">
            <button`
);

// Also make the slide counter not wrap:
contentSlider = contentSlider.replace(
  `<span className="text-[10px] text-amber-300 font-bold px-1">`,
  `<span className="text-[10px] text-amber-300 font-bold px-1 whitespace-nowrap">`
);

// Also shrink-0 on the mobile slider controls to prevent squishing
contentSlider = contentSlider.replace(
  `<div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md p-1 rounded-2xl border border-white/20 sm:hidden">`,
  `<div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md p-1 rounded-2xl border border-white/20 sm:hidden shrink-0">`
);

fs.writeFileSync(fileSlider, contentSlider, 'utf8');

// Also, the user wants "اون بخش پردیف پرفروشها میخوام یکاری کنی با موبایل هم بشه اسکرول کرد"
// DigikalaCategories.tsx already has overflow-x-auto, but maybe on some phones scrollbar-none makes it hard to see it's scrollable?
// Let's add snap-x snap-mandatory to make it feel more scrollable.
const fileCat = './jaheshkala-app/src/components/DigikalaCategories.tsx';
let contentCat = fs.readFileSync(fileCat, 'utf8');
contentCat = contentCat.replace(
  `<div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">`,
  `<div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none snap-x w-full">`
);
// And add snap-start to the items
contentCat = contentCat.replace(
  `className="flex flex-col items-center gap-1.5 group shrink-0 cursor-pointer"`,
  `className="flex flex-col items-center gap-1.5 group shrink-0 cursor-pointer snap-start"`
);
fs.writeFileSync(fileCat, contentCat, 'utf8');

console.log('Done');
