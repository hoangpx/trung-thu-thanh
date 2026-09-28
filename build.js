// Builds docs/index.html (GitHub Pages) from index.html (the claude.ai artifact source).
const fs=require('fs');
const src=fs.readFileSync(__dirname+'/index.html','utf8');
const cut=src.indexOf('<div id="app">');
const head=src.slice(0,cut),body=src.slice(cut);
const out=`<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#040506">
<meta name="description" content="Thủ Khoa Đầu Thai – game thủ thành châm biếm phong cách kính hiển vi: bảo vệ quả trứng khỏi 250 triệu tinh trùng. A satirical microscope-style defense game: protect the egg from 250 million sperm.">
${head}</head>
<body>
${body}
</body>
</html>
`;
fs.mkdirSync(__dirname+'/docs',{recursive:true});
fs.writeFileSync(__dirname+'/docs/index.html',out);
console.log('built docs/index.html',out.length,'bytes');
