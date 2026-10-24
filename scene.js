(()=>{
 const scene=document.querySelector('.portal-scene'),stage=scene.querySelector('.scene-sticky'),map=scene.querySelector('.identity-map'),copy=scene.querySelector('.hero-copy'),intro=scene.querySelector('.portal-intro'),hint=scene.querySelector('.scroll-invitation');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0,opening=[];
 const clamp=x=>Math.max(0,Math.min(1,x)),lerp=(a,b,p)=>a+(b-a)*p;
 // Reserve the docked scene until its short reveal finishes. Intercept input
 // before it overshoots; the scroll listener also covers scrollbar/keyboard jumps.
 let gate='armed',dockAnchor=0,gateTimer=0,lastScrollY=scrollY,touchY=null;
 function dockPosition(){
  const header=document.querySelector('.header').offsetHeight;
  return Math.max(0,scrollY+scene.getBoundingClientRect().top-header+(innerWidth<=900?500:700));
 }
 if(location.hash||scrollY>=dockPosition())gate='released';
 function releaseDockHold(){
  clearTimeout(gateTimer);gateTimer=0;gate='released';delete scene.dataset.revealHold;
 }
 function beginDockHold(){
  if(gate!=='armed'||reduced.matches||document.hidden)return;
  gate='holding';dockAnchor=dockPosition();scene.dataset.revealHold='true';
  scrollTo({top:dockAnchor,behavior:'instant'});lastScrollY=dockAnchor;
  // Always release, including if a browser interrupts an animation callback.
  gateTimer=setTimeout(()=>{completeRevealImmediately();releaseDockHold();},4000);
 }
 function bypassDockHold(){
  if(gate==='holding')completeRevealImmediately();
  releaseDockHold();
 }
 function inDialog(){return !!document.querySelector('dialog[open]')}
 function interceptScroll(event,delta){
  if(!delta||reduced.matches||inDialog())return;
  if(gate==='holding'){event.preventDefault();return;}
  if(gate==='armed'&&delta>0&&scrollY+delta>=dockPosition()){
   event.preventDefault();beginDockHold();schedule();
  }
 }
 addEventListener('wheel',event=>{
  if(event.ctrlKey)return;
  const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?innerHeight:1);
  interceptScroll(event,delta);
 },{passive:false});
 addEventListener('touchstart',event=>{touchY=event.touches.length===1?event.touches[0].clientY:null},{passive:true});
 addEventListener('touchmove',event=>{
  if(touchY===null||event.touches.length!==1)return;
  const next=event.touches[0].clientY,delta=touchY-next;touchY=next;interceptScroll(event,delta);
 },{passive:false});
 addEventListener('touchend',()=>{touchY=null},{passive:true});
 addEventListener('keydown',event=>{
  if(inDialog())return;
  if(event.key==='Escape'&&gate==='holding'){bypassDockHold();return;}
  if(event.target.closest('input,textarea,select,[contenteditable="true"]'))return;
  if(event.key===' '&&event.target.closest('button,a'))return;
  const delta={ArrowDown:40,ArrowUp:-40,PageDown:innerHeight,PageUp:-innerHeight,End:document.documentElement.scrollHeight,Home:-document.documentElement.scrollHeight,' ':event.shiftKey?-innerHeight:innerHeight}[event.key];
  if(delta)interceptScroll(event,delta);
 });
 addEventListener('scroll',()=>{
  const y=scrollY,dock=dockPosition(),travel=innerWidth<=900?500:700;
  if(gate==='holding'){
   if(Math.abs(y-dockAnchor)>.5)scrollTo({top:dockAnchor,behavior:'instant'});
   lastScrollY=dockAnchor;return;
  }
  if(gate==='armed'&&!reduced.matches&&!inDialog()&&y>lastScrollY&&lastScrollY<dock&&y>=dock){beginDockHold();schedule();return;}
  // Only a deliberate return to the opening re-arms the presentation.
  if(gate==='released'&&y<lastScrollY&&y<=dock-travel*.92)gate='armed';
  lastScrollY=y;
 },{passive:true});
 document.addEventListener('click',event=>{
  const link=event.target.closest('a[href]');
  if(link&&link.getAttribute('href').startsWith('#'))bypassDockHold();
 },true);
 addEventListener('pagehide',releaseDockHold);

 const headingLines=[...copy.querySelectorAll('.heading-ink')];
 const description=copy.querySelector('.hero-description');
 const shuffle={played:false,raf:0,layer:null};
 let copyRevealed=false,descriptionTimer=0,copyAnimations=[];
 const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 function settleDescription(completed=false){
  cancelAnimationFrame(shuffle.raf);shuffle.raf=0;shuffle.layer?.remove();shuffle.layer=null;
  description.classList.remove('is-shuffling');
  if(completed)releaseDockHold();
 }
 function playDescription(){
  shuffle.played=true;
  if(reduced.matches||document.hidden){releaseDockHold();return;}
  const original=description.querySelector('.shuffle-original');
  const bounds=description.getBoundingClientRect(),range=document.createRange();
  const measure=document.createElement('canvas').getContext('2d');
  const layer=document.createElement('span');layer.className='shuffle-layer';layer.setAttribute('aria-hidden','true');
  const walker=document.createTreeWalker(original,NodeFilter.SHOW_TEXT),letters=[];
  let text;
  while(text=walker.nextNode()){
   const font=getComputedStyle(text.parentElement),isName=!!text.parentElement.closest('.hero-name');
   measure.font=`${font.fontStyle} ${font.fontWeight} ${font.fontSize} ${font.fontFamily}`;
   const canvasFont=measure.font;
   [...text.textContent].forEach((char,i)=>{
    range.setStart(text,i);range.setEnd(text,i+1);const rect=range.getBoundingClientRect();
    const glyph=document.createElement('span');glyph.className='shuffle-glyph'+(isName?' is-name':'');
    const ink=document.createElement('span');ink.className='shuffle-ink';ink.textContent=char;glyph.append(ink);
    Object.assign(glyph.style,{left:`${rect.left-bounds.left}px`,top:`${rect.top-bounds.top}px`,width:`${rect.width}px`,lineHeight:`${rect.height}px`,fontFamily:font.fontFamily,fontSize:font.fontSize,fontStyle:font.fontStyle,fontWeight:font.fontWeight});
    layer.append(glyph);letters.push({char,glyph,ink,width:rect.width,canvasFont});
   });
  }
  shuffle.layer=layer;description.append(layer);description.classList.add('is-shuffling');
  const start=performance.now();let previousTick=-1;
  function animate(now){
   const elapsed=now-start,tick=Math.floor(elapsed/65);
   if(elapsed>=980||reduced.matches||document.hidden){settleDescription(true);return;}
   if(tick!==previousTick){
    letters.forEach(({char,glyph,ink,width,canvasFont},i)=>{
     const settled=elapsed>160+i/letters.length*760||/\s|[.,’—-]/.test(char);
     const random=alphabet[(i*11+tick*7)%alphabet.length];
     ink.textContent=settled?char:(char===char.toLowerCase()?random.toLowerCase():random);
     measure.font=canvasFont;
     const fit=Math.min(1,width/Math.max(1,measure.measureText(ink.textContent).width));
     ink.style.transform=`translateX(-50%) scaleX(${fit})`;
     glyph.classList.toggle('is-settled',settled);
    });previousTick=tick;
   }
   shuffle.raf=requestAnimationFrame(animate);
  }
  shuffle.raf=requestAnimationFrame(animate);
 }
 function updateHeading(progress){
  // The scroll controls the diagram only. Text runs on its own timeline once it docks.
  if(progress<.92){
   clearTimeout(descriptionTimer);copyAnimations.forEach(a=>a.cancel());copyAnimations=[];
   settleDescription();shuffle.played=false;copyRevealed=false;
   copy.style.opacity=0;copy.inert=true;copy.setAttribute('aria-hidden','true');
   description.style.opacity=0;headingLines.forEach(line=>line.style.transform='translateY(115%)');return;
  }
  if(copyRevealed){
   if(reduced.matches)completeRevealImmediately();
   return;
  }
  if(progress<.995)return;
  beginDockHold();
  copyRevealed=true;copy.style.opacity=1;copy.inert=false;copy.setAttribute('aria-hidden','false');
  headingLines.forEach(line=>line.style.transform='none');
  if(reduced.matches){description.style.opacity=1;return;}
  headingLines.forEach((line,index)=>copyAnimations.push(line.animate(
   [{transform:'translateY(115%)'},{transform:'translateY(0)'}],
   {duration:650,delay:index*120,easing:'cubic-bezier(.22,.8,.25,1)',fill:'backwards'}
  )));
  copy.querySelectorAll('.eyebrow,.hero-actions,.hero-meta').forEach((item,index)=>copyAnimations.push(item.animate(
   [{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],
   {duration:450,delay:index===0?0:900,easing:'ease-out',fill:'backwards'}
  )));
  descriptionTimer=setTimeout(()=>{description.style.opacity=1;playDescription();},900);
 }
 function completeRevealImmediately(){
  clearTimeout(descriptionTimer);copyAnimations.forEach(a=>a.cancel());copyAnimations=[];
  settleDescription(gate==='holding');
  if(copyRevealed){description.style.opacity=1;headingLines.forEach(line=>line.style.transform='none');}
 }
 addEventListener('resize',completeRevealImmediately);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)completeRevealImmediately()});

 // Custom absolute nodes use centre anchors. Measure their untransformed boxes
 // for the existing energy paths, including the half-width translation.
 positionConnection=function(node,line){
  const nx=node.offsetLeft,ny=node.offsetTop,cx=identityCore.offsetLeft,cy=identityCore.offsetTop;
  const dx=nx-cx,dy=ny-cy,d=Math.hypot(dx,dy)||1,ux=dx/d,uy=dy/d;
  const edge=Math.min(node.offsetWidth/2/(Math.abs(ux)||1e-9),node.offsetHeight/2/(Math.abs(uy)||1e-9)),radius=identityCore.offsetWidth/2,length=Math.max(1,d-radius-edge);
  Object.assign(line.style,{left:`${cx+ux*radius}px`,top:`${cy+uy*radius}px`,width:`${length}px`,transform:`rotate(${Math.atan2(dy,dx)}rad)`});
  node.style.setProperty('--arrival-x',`${node.offsetWidth/2-ux*edge}px`);node.style.setProperty('--arrival-y',`${node.offsetHeight/2-uy*edge}px`);return length;
 };
 function draw(){frame=0;const mobile=innerWidth<=900,header=document.querySelector('.header').offsetHeight,mobileDockY=Math.max(460,24+copy.offsetHeight+36),h=mobile?Math.max(900,innerHeight-header,mobileDockY+454):Math.max(640,innerHeight-header),travel=mobile?500:700;
  scene.style.setProperty('--stage-height',h+'px');scene.style.setProperty('--travel',travel+'px');stage.style.top=header+'px';
  const raw=clamp((header-scene.getBoundingClientRect().top)/travel),p=reduced.matches?(raw>.15?1:0):raw;
  const initialW=Math.min(mobile?innerWidth-28:980,innerWidth-64),finalW=mobile?innerWidth-32:Math.min(650,innerWidth*.48-40);
  const initialH=mobile?450:Math.min(540,h-150),finalH=mobile?430:Math.min(520,h-120);
  const initialX=(innerWidth-initialW)/2,finalX=mobile?16:innerWidth-finalW-56;
  const initialY=mobile?155:125,finalY=mobile?mobileDockY:(h-finalH)/2;
  Object.assign(map.style,{left:lerp(initialX,finalX,p)+'px',top:lerp(initialY,finalY,p)+'px',width:lerp(initialW,finalW,p)+'px',height:lerp(initialH,finalH,p)+'px',borderColor:`rgba(65,94,102,${p})`,backgroundColor:`rgba(14,25,36,${p*.96})`});
  map.querySelectorAll('.map-top,.map-footer').forEach(e=>e.style.opacity=clamp((p-.35)/.65));
  intro.style.opacity=1-clamp(p*3);hint.style.opacity=1-clamp(p*3);hint.inert=p>.2;
  updateHeading(p);
  mapNodes.forEach((node,i)=>positionConnection(node,connectionLines[i]));
  if(raw>.03)opening.forEach(a=>a.finish());
 }
 function schedule(){if(!frame)frame=requestAnimationFrame(draw)}
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduced.addEventListener('change',()=>{opening.forEach(a=>a.finish());draw()});draw();
 if(!reduced.matches&&scrollY<50){
  opening.push(identityCore.animate([{opacity:0,scale:'.8'},{opacity:1,scale:'1'}],{duration:450,easing:'ease-out'}));
  mapNodes.forEach((node,i)=>{
   const dx=identityCore.offsetLeft-node.offsetLeft,dy=identityCore.offsetTop-node.offsetTop;
   const a=node.animate([{opacity:0,translate:`${dx}px ${dy}px`,scale:'.35'},{opacity:1,translate:'0 0',scale:'1'}],{delay:1450+i*120,duration:620,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'});opening.push(a);
   opening.push(connectionLines[i].animate([{opacity:0,scale:'0 1'},{opacity:1,scale:'1 1'}],{delay:1450+i*120,duration:620,easing:'ease-out',fill:'backwards'}));
  });
 }
 const destinations={experiencePreview:['#experience','Explore my experience'],skillsPreview:['#skills','Explore my toolkit'],workPreview:['#work','Explore selected work'],credentialsPreview:['#credentials','Explore credentials'],contactPreview:['#contact','See contact options'],introPreview:['#about','More about me']};
 scene.querySelectorAll('[data-detail]').forEach(button=>button.addEventListener('click',()=>{
  const target=destinations[button.dataset.detail];if(!target)return;
  const link=element('a',target[1]+' ↗','button primary preview-section-link');link.href=target[0];
  link.addEventListener('click',event=>{event.preventDefault();dialog.close();requestAnimationFrame(()=>{const section=document.querySelector(target[0]);section.scrollIntoView({behavior:reduced.matches?'instant':'smooth'});section.tabIndex=-1;section.focus({preventScroll:true});})});document.querySelector('#detail-content').append(link);
  if(button.dataset.detail==='introPreview'){const resume=element('a','Download résumé ↓','text-link');resume.href='Vedesh-Emandi-Resume.pdf';resume.download='Vedesh-Emandi-Resume.pdf';resume.style.marginLeft='20px';document.querySelector('#detail-content').append(resume);}
 }));
})();
