const fs = require('fs');

const updateHtmlFile = (filename) => {
  if (!fs.existsSync(filename)) return;
  let html = fs.readFileSync(filename, 'utf8');

  html = html.replace(
    /<meta name="description" content="انجمن علمی جهش؛[^"]+" \/>/g,
    '<meta name="description" content="جهش آی تی (Jahesh IT)؛ مرکز تخصصی طراحی سایت اختصاصی، شرکتی و فروشگاهی، و همچنین فروشگاه اینترنتی جهش کالا (خرید آنلاین انواع کالا). خدمات نوآورانه فناوری اطلاعات." />'
  );

  html = html.replace(
    /<meta property="og:description" content="انجمن علمی جهش؛[^"]+" \/>/g,
    '<meta property="og:description" content="جهش آی تی (Jahesh IT)؛ مرکز تخصصی طراحی سایت اختصاصی، شرکتی و فروشگاهی، و همچنین فروشگاه اینترنتی جهش کالا (خرید آنلاین انواع کالا). خدمات نوآورانه فناوری اطلاعات." />'
  );

  html = html.replace(
    /<meta name="keywords" content="انجمن علمی جهش, جهش کالا, طراحی سایت, طراحی وبسایت, طراحی سایت اختصاصی, پکیج طراحی سایت, فروشگاه جهش کالا, فروشگاه اینترنتی جهش کالا, خرید آنلاین, سئو سایت, jahesh, jahesh kala, jaheshit" \/>/g,
    '<meta name="keywords" content="جهش آی تی, جهش ای تی, Jahesh IT, انجمن علمی جهش, جهش کالا, طراحی سایت, طراحی وبسایت, طراحی سایت اختصاصی, پکیج طراحی سایت, فروشگاه اینترنتی جهش کالا, jaheshit, jahesh" />'
  );

  html = html.replace(
    /<meta property="twitter:title" content="انجمن علمی جهش \| طراحی سایت اختصاصی و فروشگاه جهش کالا" \/>/g,
    '<meta property="twitter:title" content="جهش آی تی (Jahesh IT) | طراحی سایت اختصاصی و فروشگاه جهش کالا" />'
  );

  html = html.replace(
    /<meta property="twitter:description" content="مرکز تخصصی طراحی سایت اختصاصی، فروشگاه اینترنتی جهش کالا و ابزارهای هوش مصنوعی." \/>/g,
    '<meta property="twitter:description" content="جهش آی تی (Jahesh IT)؛ مرکز تخصصی طراحی سایت اختصاصی، خدمات وب و فروشگاه اینترنتی جهش کالا." />'
  );

  html = html.replace(
    /<title>انجمن علمی جهش \| طراحی سایت اختصاصی و فروشگاه جهش کالا<\/title>/g,
    '<title>جهش آی تی (Jahesh IT) | طراحی سایت اختصاصی و فروشگاه جهش کالا</title>'
  );
  
  // Update schema JSON-LD if present
  html = html.replace(
    /"name": "انجمن علمی جهش"/g,
    '"name": "جهش آی تی (Jahesh IT)"'
  );

  fs.writeFileSync(filename, html);
};

['index.html', 'amlak.html'].forEach(updateHtmlFile);
