"""Build the downloadable public CV from the same content as the website."""
from pathlib import Path
from xml.sax.saxutils import escape
import json, re
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

root=Path(__file__).resolve().parent.parent
raw=(root/'site-data.js').read_text()
d=json.loads(raw.split('window.SITE_DATA = ',1)[1].rstrip().removesuffix(';'))
fontdir=Path('/System/Library/Fonts/Supplemental')
for name,file in [('CV','Arial.ttf'),('CVBold','Arial Bold.ttf'),('CVItalic','Arial Italic.ttf')]:
    pdfmetrics.registerFont(TTFont(name,str(fontdir/file)))
pdfmetrics.registerFontFamily('CV',normal='CV',bold='CVBold',italic='CVItalic',boldItalic='CVBold')
ink=HexColor('#243347');muted=HexColor('#586879');accent=HexColor('#345b7e');line=HexColor('#d7e0e8')
styles={
 'name':ParagraphStyle('name',fontName='CV',fontSize=27,leading=32,textColor=ink,spaceAfter=7),
 'role':ParagraphStyle('role',fontName='CV',fontSize=10.2,leading=14,textColor=accent),
 'body':ParagraphStyle('body',fontName='CV',fontSize=9.5,leading=13.4,textColor=ink,spaceAfter=5),
 'muted':ParagraphStyle('muted',fontName='CV',fontSize=9,leading=12,textColor=muted),
 'small':ParagraphStyle('small',fontName='CV',fontSize=8.6,leading=12,textColor=muted),
 'section':ParagraphStyle('section',fontName='CVBold',fontSize=11.2,leading=15,textColor=accent,spaceBefore=10,spaceAfter=7,keepWithNext=True),
 'pub':ParagraphStyle('pub',fontName='CV',fontSize=9.5,leading=13.1,textColor=ink,spaceAfter=3),
}
def e(s): return escape(str(s)).replace('MoS₂','MoS<sub>2</sub>')
def p(s,style='body'): return Paragraph(s,styles[style])
def section(title): story.append(p(title,'section'))
def row(date,title,detail):
 t=Table([[p(e(date),'small'),p('<b>'+e(title)+'</b><br/>'+e(detail),'body')]],colWidths=[58,441])
 t.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),7),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),1)]))
 return t
story=[p(e(d['name']),'name'),p(e(d['footnote']),'role'),Spacer(1,5),p('<link href="mailto:yaqing@cmu.edu" color="#345b7e">'+e(d['emailDisplay'])+'</link>  |  <link href="https://yaqingshen.github.io/" color="#345b7e">yaqingshen.github.io</link>','small')]
section('Research profile')
for para in d['about']:
 text=e(para)
 for group in d['groupLinks']:
  text=text.replace(e(group['name']),'<link href="'+group['url']+'" color="#345b7e">'+e(group['name'])+'</link>')
 story.append(p(text))
section('Academic background')
for item in d['education']: story.append(row(item['years'],item['institution'],item['degree']))
section('Honours &amp; awards')
for item in d['awards']: story.append(row(item['year'],item['title'],item['organization']))
section('Technical experience')
skills=[('Materials synthesis','Chemical vapor deposition, atomic layer deposition, sputtering, electron-beam evaporation.'),('Device fabrication','Electron-beam lithography, photolithography, mechanical exfoliation, wet transfer, laser-patterned shadow masks.'),('Characterization','SEM, TEM, FIB, conductive AFM, Raman spectroscopy, XPS, semiconductor parameter analysis.'),('Analysis & design','Origin, NanoScope Analysis, XPS Peak, layout design, Beamer simulation.')]
for title,detail in skills: story.append(p('<b>'+e(title)+':</b> '+e(detail)))
story.append(PageBreak())
section('Peer-review service')
story.append(p(' · '.join(e(j) for j in d['reviewerJournals'])))
section('Editorial experience')
for item in d['editorial']:
 story.append(p('<b>'+e(item['role'])+'</b> · '+e(item['journal'])+'<br/>Special issue: <link href="'+item['url']+'" color="#345b7e">'+e(item['title'])+'</link>'))
section('Selected publications')
for i,pub in enumerate(d['publications'],1):
 block=[p('<b>'+e(pub['journal'])+' · '+e(pub['year'])+'</b>'+(' · First author' if pub['firstAuthor'] else ''),'small'),
 p('<b>'+str(i)+'. '+e(pub['title'])+'</b>','pub'),
 p(e(pub['authors']).replace('Y. Shen','<b>Y. Shen</b>'),'small'),
 p('<link href="'+pub['url']+'" color="#345b7e">'+pub['url'].replace('https://doi.org/','doi: ')+'</link>','small'),Spacer(1,12)]
 story.append(KeepTogether(block))
story.append(p('Full publication list: <link href="'+e(d['scholar'])+'" color="#345b7e">Google Scholar</link>','small'))

def footer(c,doc):
 c.saveState();w,h=doc.pagesize
 if doc.page>1:
  c.setFont('CV',9);c.setFillColor(muted);c.drawString(48,h-30,'Yaqing Shen  |  Curriculum Vitae')
 c.setStrokeColor(line);c.setLineWidth(.5);c.line(48,37,w-48,37)
 c.setFillColor(muted);c.setFont('CV',8);c.drawString(48,24,'Selected research CV | October 2026');c.drawRightString(w-48,24,str(doc.page));c.restoreState()
output=root/'assets/Yaqing-Shen-CV.pdf'
doc=SimpleDocTemplate(str(output),pagesize=(595.276,841.89),leftMargin=48,rightMargin=48,topMargin=48,bottomMargin=49,title='Yaqing Shen - Curriculum Vitae',author='Yaqing Shen')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
print(output)
