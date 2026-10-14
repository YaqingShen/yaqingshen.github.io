// Refresh static HTML after changing shared data or rendering.
import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const context={window:{},URL};
for(const file of ['site-data.js','site-content.js']) vm.runInNewContext(await readFile(path.join(root,file),'utf8'),context);
const content=context.window.SITE_CONTENT;
for(const [file,page] of [['index.html','home'],['cv.html','cv'],['publications.html','publications'],['contacts.html','contacts']]) {
  const html=await readFile(path.join(root,file),'utf8');
  const updated=html.replace(/<!-- STATIC:([A-Z]+):START -->[\s\S]*?<!-- STATIC:\1:END -->/g,(_,name)=>{
    const value=content[name.toLowerCase()];
    if(value===undefined) throw new Error(`Unknown region ${name} in ${file}`);
    return `<!-- STATIC:${name}:START -->${typeof value==='function'?value(page):value}<!-- STATIC:${name}:END -->`;
  });
  await writeFile(path.join(root,file),updated);
}
console.log('Updated all four pages.');
