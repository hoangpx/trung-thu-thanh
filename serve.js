const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname;
http.createServer((q,s)=>{let p=decodeURIComponent(q.url.split('?')[0]);if(p==='/')p='/index.html';
fs.readFile(path.join(root,p),(e,d)=>{if(e){s.writeHead(404);return s.end()}
let body=d;if(p.endsWith('.html')){body='<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>'+d+'</body></html>'}
s.writeHead(200,{'content-type':p.endsWith('.html')?'text/html; charset=utf-8':'text/plain'});s.end(body)})}).listen(8091);
