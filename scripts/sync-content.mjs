// Refresh searchable static HTML after changing site-data.js or site-content.js.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = { window: {}, URL };
for (const file of ['site-data.js','site-content.js']) vm.runInNewContext(await readFile(path.join(root,file),'utf8'),context);
const content = context.window.SITE_CONTENT;
function region(html,name,markup){
  const start=`<!-- STATIC:${name}:START -->`,end=`<!-- STATIC:${name}:END -->`;
  const from=html.indexOf(start),to=html.indexOf(end,from);
  if(from<0||to<0)throw new Error(`Missing region: ${name}`);
  return html.slice(0,from+start.length)+markup+html.slice(to);
}
for(const filename of ['index.html','cv.html']){
  let html=await readFile(path.join(root,filename),'utf8');
  for(const name of ['PUBLICATIONS','TIMELINE','ABOUT'])html=region(html,name,content[name.toLowerCase()]);
  html=region(html,'PROFILES',content.profiles(filename==='cv.html'));
  if(filename==='index.html')for(const name of ['RESEARCH','INTERESTS'])html=region(html,name,content[name.toLowerCase()]);
  await writeFile(path.join(root,filename),html);
}
console.log('Updated static content in index.html and cv.html.');
