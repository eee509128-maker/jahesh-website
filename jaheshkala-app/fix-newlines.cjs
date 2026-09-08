const fs = require('fs');
let content = fs.readFileSync('src/components/AdminPanel.tsx', 'utf-8');

// The issue was we replaced `\\n` with actual new lines instead of `\n`.
// Let's find those broken strings and fix them.

content = content.replace("useState('کیفیت ساخت و متریال درجه یک\nدارای گارانتی سلامت و ضمانت تعویض\nبسته‌بندی ایمن و ارسال پستی سراسری');", "useState('کیفیت ساخت و متریال درجه یک\\nدارای گارانتی سلامت و ضمانت تعویض\\nبسته‌بندی ایمن و ارسال پستی سراسری');");

content = content.replace("useState('کیفیت ساخت درجه یک و استاندارد\nدارای گارانتی سلامت فیزیکی\nارسال با بسته‌بندی ایمن سراسر کشور');", "useState('کیفیت ساخت درجه یک و استاندارد\\nدارای گارانتی سلامت فیزیکی\\nارسال با بسته‌بندی ایمن سراسر کشور');");

content = content.replace("('کیفیت ساخت و متریال درجه یک\nدارای گارانتی سلامت و ضمانت تعویض\nبسته‌بندی ایمن و ارسال پستی سراسری')", "('کیفیت ساخت و متریال درجه یک\\nدارای گارانتی سلامت و ضمانت تعویض\\nبسته‌بندی ایمن و ارسال پستی سراسری')");

content = content.replace("('کیفیت ساخت درجه یک و استاندارد\nدارای گارانتی سلامت فیزیکی\nارسال با بسته‌بندی ایمن سراسر کشور')", "('کیفیت ساخت درجه یک و استاندارد\\nدارای گارانتی سلامت فیزیکی\\nارسال با بسته‌بندی ایمن سراسر کشور')");

// Also check features replacement
content = content.replace("prod.features.join('\n')", "prod.features.join('\\n')");
content = content.replace("features: newFeatures.split('\n').filter(Boolean)", "features: newFeatures.split('\\n').filter(Boolean)");


fs.writeFileSync('src/components/AdminPanel.tsx', content);
