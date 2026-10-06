const details={
policies:{category:'Identity ecosystem',number:'03 / ACCESS CONTROL',title:'RBAC & policies',subtitle:'Connect job responsibilities with appropriate access.',intro:'Role-based access control groups permissions around roles. Access workflows and business rules help apply those permissions consistently.',heading:'My experience',points:['Configure and maintain RBAC roles, access workflows, and business rules in Saviynt under senior team guidance.','Support access modifications and Active Directory group management.','Participate in testing and change validation to align IAM configurations with business requirements.'],tags:['RBAC','Access workflows','Business rules']},
reviews:{category:'Identity ecosystem',number:'04 / ACCESS REVIEWS',title:'Access certifications',subtitle:'Review whether access is still appropriate.',intro:'Access certifications let reviewers assess existing permissions and identify access that should be retained or removed. These are access reviews, distinct from professional credentials.',heading:'My focus',points:['Experience supporting access certifications in enterprise IAM environments.','Support identity governance, audit, and compliance requirements.','Maintain clear operational documentation and collaborate with application owners.'],tags:['Access reviews','Identity governance','Compliance']},
nextgen:{category:'Professional experience',number:'01 / NEXTGEN IDENTITY',title:'IAM Analyst',subtitle:'NextGen Identity · February 2025 – Present',intro:'Supporting secure, consistent access across enterprise environments through Saviynt EIC and Active Directory.',heading:'What I work on',points:['Process around 50 access requests each week, including provisioning, deprovisioning, access changes, password resets, and AD group management.','Support user imports, identity reconciliation, and access request processing in Saviynt EIC.','Validate user attribute mapping, synchronization, and provisioning for Active Directory (LDAP) integrations.','Configure access workflows, RBAC roles, and business rules under the guidance of senior team members.','Monitor scheduled import and provisioning jobs, investigate failures, and troubleshoot through log analysis.','Collaborate with application owners to resolve incidents within SLA commitments.','Maintain technical documentation and process guides, support testing and change validation, and help reduce recurring access issues.'],tags:['Saviynt EIC','Active Directory','Identity lifecycle','RBAC','SLA management']},
identity:{category:'Technical toolkit',number:'01 / FOUNDATION',title:'Identity & governance',subtitle:'Managing access throughout the identity lifecycle.',intro:'Hands-on experience with Saviynt EIC, supported by knowledge of core identity governance concepts.',heading:'Skills & focus',points:['Saviynt EIC and Identity Governance & Administration (IGA)','Identity lifecycle management and identity reconciliation','User provisioning and deprovisioning','Access request management and access certifications','Segregation of Duties (SoD)'],tags:['Saviynt','IGA','Identity lifecycle']},
directories:{category:'Technical toolkit',number:'02 / CONNECTION',title:'Directories & access',subtitle:'Connecting identity data with the access people need.',intro:'Supporting directory integrations and access configurations in enterprise IAM operations.',heading:'Skills & focus',points:['Active Directory and LDAP integration support','User attribute mapping and synchronization validation','AD group management and account provisioning','RBAC role configuration, access workflows, and business rules'],tags:['Active Directory','LDAP','RBAC']},
development:{category:'Technical toolkit',number:'03 / BUILDING BLOCKS',title:'Code & integrations',subtitle:'A computer science foundation for connected systems.',intro:'Programming, databases, and APIs complement my work in identity management.',heading:'Languages & tools',points:['Java, Python, and JavaScript','SQL and MySQL','REST APIs, JSON, and Postman','Git and AWS fundamentals','Additional internship experience with ReactJS, Figma, and Kotlin'],tags:['Python','Java','JavaScript','SQL','REST APIs']},
operations:{category:'Technical toolkit',number:'04 / EVERYDAY IMPACT',title:'Operations & people',subtitle:'Resolving issues and making work easier to repeat.',intro:'IAM operations depend on clear communication as much as careful technical execution.',heading:'How I contribute',points:['Incident resolution, log analysis, and troubleshooting','Technical documentation, process guides, and knowledge articles','Cross-functional collaboration with application owners and teams','Client discussions, testing, and change validation','Request handling improvements and recurring issue resolution'],tags:['Problem solving','Documentation','Collaboration']},
assistant:{category:'Personal project',number:'01 / VOICE ASSISTANT',title:'Speak. Simplify.',subtitle:'A desktop voice assistant built with Python.',intro:'A project exploring how natural language input can make everyday computer tasks more convenient.',heading:'What I built',points:['Combined speech recognition and text-to-speech libraries in a desktop assistant.','Integrated external APIs for web searches and weather updates.','Added application control through voice commands.','Focused on automating routine tasks and improving user interaction.'],tags:['Python','Speech recognition','Text-to-speech','External APIs']},
symbiosys:{category:'Internship',number:'02 / SYMBIOSYS TECHNOLOGIES',title:'From design to interface.',subtitle:'UI/UX & Web Development Intern',intro:'Working across interface design and front-end implementation.',heading:'Contributions',points:['Designed responsive web interfaces using Figma.','Collaborated on front-end implementation with ReactJS.','Worked with the development team to improve user experience and translate design concepts into functional web pages.'],tags:['Figma','ReactJS','Responsive design','UI/UX']},
android:{category:'Internship',number:'03 / 1STOP DEVCLUB (IIT DELHI)',title:'Built for the small screen.',subtitle:'Android Development Intern',intro:'Developing mobile applications and connecting them with useful information through APIs.',heading:'Contributions',points:['Developed Android applications using Kotlin and REST APIs.','Built news and weather applications as internship projects.','Improved application stability through testing and debugging.'],tags:['Kotlin','Android','REST APIs','Testing']},
iga:{category:'Certification',number:'01 / SAVIYNT',title:'Saviynt Advanced IGA',subtitle:'Advanced IGA Professional',certificate:{file:'Saviynt-Advanced-IGA',issued:'September 18, 2025'},intro:'A professional certification in the identity governance domain that complements my hands-on work with Saviynt EIC.',heading:'Related experience',points:['Identity Governance & Administration','Identity lifecycle and access request management','Access certifications and governance operations'],tags:['Saviynt','IGA']},
aag:{category:'Certification',number:'02 / SAVIYNT',title:'Saviynt AAG',subtitle:'AAG Professional',certificate:{file:'Saviynt-AAG',issued:'August 21, 2026'},intro:'A Saviynt professional certificate listed among my identity and access management credentials.',tags:['Saviynt','AAG']},
google:{category:'Course certificates',number:'03 / GOOGLE · COURSERA',title:'Google Data Analytics',subtitle:'6 course certificates · Coursera',intro:'Six completed courses authorized by Google and offered through Coursera. Explore each certificate below.',certificates:[{"title": "Foundations: Data, Data, Everywhere", "file": "Google-Data-Analytics-Course-1", "issued": "January 16, 2025"}, {"title": "Ask Questions to Make Data-Driven Decisions", "file": "Google-Data-Analytics-Course-2", "issued": "February 17, 2025"}, {"title": "Prepare Data for Exploration", "file": "Google-Data-Analytics-Course-3", "issued": "March 8, 2025"}, {"title": "Process Data from Dirty to Clean", "file": "Google-Data-Analytics-Course-4", "issued": "March 12, 2025"}, {"title": "Analyze Data to Answer Questions", "file": "Google-Data-Analytics-Course-5", "issued": "April 17, 2025"}, {"title": "Share Data Through the Art of Visualization", "file": "Google-Data-Analytics-Course-6", "issued": "April 24, 2025"}],tags:['Google','Data analytics','Coursera']},
accenture:{category:'Job simulation',number:'04 / ACCENTURE · FORAGE',title:'Data Analytics & Visualization',subtitle:'Accenture Job Simulation · Forage',certificate:{file:'Accenture-Certificate',issued:'May 22, 2024',width:1600,height:1131},heading:'Practical tasks completed',points:['Project understanding','Data cleaning & modeling','Data visualization & storytelling','Presenting to the client'],intro:'A learning experience in data analytics and visualization, completed through Forage.',tags:['Accenture','Data analytics','Visualization','Forage']}
};
const dialog=document.querySelector('#detail-dialog');let previousFocus;let previousOverflow='';
function element(tag,text,className){const e=document.createElement(tag);e.textContent=text;if(className)e.className=className;return e;}
function appendCertificate(content,d){
  const cert=d.certificate;
  content.append(element('p',`Issued ${cert.issued}`,'certificate-issued'));
  const preview=element('a','','certificate-preview');
  preview.href=`${cert.file}.pdf`;preview.target='_blank';preview.rel='noopener';
  preview.setAttribute('aria-label',`Open ${d.title} certificate PDF in a new tab`);
  const image=document.createElement('img');image.width=cert.width||1600;image.height=cert.height||1237;image.src=`${cert.file}.png`;
  image.alt=`Vedesh Emandi — ${d.subtitle} certificate, issued ${cert.issued}`;
  preview.append(image);content.append(preview);
  const actions=element('div','','certificate-actions');
  const open=element('a','Open PDF ↗','button');open.href=preview.href;open.target='_blank';open.rel='noopener';
  const download=element('a','Download certificate ↓','button');download.href=preview.href;download.download=`${cert.file}.pdf`;
  [open,download].forEach(control=>{applyGlass(control);actions.append(control);});
  content.append(actions);
}
function appendCourseGallery(content,d){
  const gallery=element('section','','course-gallery');
  const label=element('label','Choose a course','course-label');label.htmlFor='course-select';
  const select=document.createElement('select');select.id='course-select';
  d.certificates.forEach((cert,i)=>{const option=element('option',`${String(i+1).padStart(2,'0')} / ${cert.title}`);option.value=i;select.append(option);});
  const navigation=element('div','','course-navigation');
  const prev=element('button','← Previous','button');prev.type='button';prev.setAttribute('aria-label','Previous course certificate');
  const next=element('button','Next →','button');next.type='button';next.setAttribute('aria-label','Next course certificate');
  const count=element('span','','course-count');count.setAttribute('aria-live','polite');count.setAttribute('aria-atomic','true');
  [prev,next].forEach(applyGlass);navigation.append(prev,count,next);
  const title=element('h3','','course-title');title.id='course-title';
  const viewer=element('div','','course-viewer');viewer.setAttribute('aria-labelledby','course-title');
  const picker=element('div','','course-picker');applyGlass(picker);picker.append(select);
  const dismissPickerGlow=()=>picker.classList.add('glow-dismissed');
  select.addEventListener('pointerdown',dismissPickerGlow);
  select.addEventListener('click',dismissPickerGlow);
  select.addEventListener('change',dismissPickerGlow);
  select.addEventListener('keydown',dismissPickerGlow);
  picker.addEventListener('pointerenter',()=>picker.classList.remove('glow-dismissed'));
  picker.addEventListener('pointermove',()=>{if(document.activeElement!==select)picker.classList.remove('glow-dismissed');});gallery.append(label,picker,navigation,title,viewer);content.append(gallery);
  let current=0;let transition;
  function showCourse(index,animate=true){
    current=Math.max(0,Math.min(d.certificates.length-1,index));const cert=d.certificates[current];
    select.value=String(current);count.textContent=`${current+1} of ${d.certificates.length}`;
    prev.disabled=current===0;next.disabled=current===d.certificates.length-1;title.textContent=cert.title;
    transition?.cancel();viewer.replaceChildren();appendCertificate(viewer,{title:cert.title,subtitle:cert.title,certificate:cert});
    if(animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches){transition=viewer.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,easing:'ease-out'});}
    const adjacent=d.certificates[current+1];if(adjacent){const preload=new Image();preload.src=`${adjacent.file}.png`;}
  }
  select.addEventListener('change',()=>showCourse(Number(select.value)));
  prev.addEventListener('click',()=>showCourse(current-1));next.addEventListener('click',()=>showCourse(current+1));
  showCourse(0,false);
}
document.querySelectorAll('[data-detail]').forEach(button=>button.addEventListener('click',()=>{const d=details[button.dataset.detail];if(!d)return;previousFocus=button;document.querySelector('#detail-category').textContent=d.category;document.querySelector('#detail-number').textContent=d.number;document.querySelector('#detail-title').textContent=d.title;document.querySelector('#detail-subtitle').textContent=d.subtitle;const content=document.querySelector('#detail-content');content.replaceChildren(element('p',d.intro));dialog.classList.toggle('certificate-dialog',!!(d.certificate||d.certificates));if(d.certificate)appendCertificate(content,d);if(d.certificates)appendCourseGallery(content,d);if(d.heading)content.append(element('h3',d.heading));if(d.points){const list=document.createElement('ul');d.points.forEach(p=>list.append(element('li',p)));content.append(list);}if(d.tags){const tags=element('div','','tags');tags.style.marginTop='28px';d.tags.forEach(t=>tags.append(element('span',t)));content.append(tags);}previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();dialog.scrollTop=0;dialog.querySelector('.dialog-content').scrollTop=0;animateCardOpen(button);document.querySelector('.close-dialog').focus({preventScroll:true});}));
let cardMotion;let cardClosing=false;
function cardOrigin(source){
 const from=source.getBoundingClientRect(),to=dialog.getBoundingClientRect();
 return `translate(${from.left+from.width/2-to.left-to.width/2}px,${from.top+from.height/2-to.top-to.height/2}px) scale(${Math.max(.12,Math.min(1,from.width/to.width))},${Math.max(.12,Math.min(1,from.height/to.height))}) perspective(1200px) rotateY(-18deg)`;
}
function animateCardOpen(source){
 cardClosing=false;dialog.classList.remove('card-closing');
 const phone=matchMedia('(max-width:600px)').matches;
 dialog.classList.toggle('mobile-card-open',phone);
 source.classList.toggle('mobile-selected',phone);
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const light=phone?{boxShadow:['0 0 0 #8fffd500','inset 0 0 70px #8fffd518,0 0 38px #8fffd549,0 30px 100px #0008'],backgroundColor:['#101a28','#172e35'],borderColor:['#40586a','#b0ffdf']}:{};
 cardMotion=dialog.animate({transform:[cardOrigin(source),'translate(0,0) scale(1) rotateY(0deg)'],opacity:[.25,1],...light},{duration:560,easing:'cubic-bezier(.2,.8,.2,1)'});
}
function closeCard(){
 if(cardClosing||!dialog.open)return;
 cardClosing=true;
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){dialog.close();cardClosing=false;return;}
 const current=getComputedStyle(dialog).transform;const currentOpacity=getComputedStyle(dialog).opacity;
 const style=getComputedStyle(dialog);
 const light=matchMedia('(max-width:600px)').matches?{boxShadow:[style.boxShadow,'0 0 0 #8fffd500'],backgroundColor:[style.backgroundColor,'#101a28'],borderColor:[style.borderColor,'#40586a']}:{};
 cardMotion?.cancel();dialog.classList.add('card-closing');
 cardMotion=dialog.animate({transform:[current,cardOrigin(previousFocus)],opacity:[currentOpacity,0],...light},{duration:380,easing:'cubic-bezier(.4,0,.2,1)',fill:'forwards'});
 cardMotion.finished.then(()=>{dialog.close();cardMotion.cancel();dialog.classList.remove('card-closing');cardClosing=false;}).catch(()=>{});
}
dialog.addEventListener('cancel',event=>{event.preventDefault();closeCard();});
dialog.querySelectorAll('.close-dialog,.close-text').forEach(b=>b.addEventListener('click',()=>closeCard()));
dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)closeCard();}});
dialog.addEventListener('close',()=>{dialog.classList.remove('mobile-card-open');previousFocus?.classList.remove('mobile-selected');document.body.style.overflow=previousOverflow;previousFocus?.focus({preventScroll:true});});
let toastTimer;function toast(text){const t=document.querySelector('#toast');t.textContent=text;t.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('visible'),3200);}
document.querySelector('#copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('vedeshemandi@gmail.com');toast('Email address copied.');}catch{toast('Email: vedeshemandi@gmail.com');}});
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelectorAll('.wave i').forEach((bar,i)=>{bar.style.setProperty('--height',String(8+72*Math.pow(Math.sin(i*.72),2)*Math.sin(Math.PI*(i+1)/26)));bar.style.setProperty('--i',String(i));});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>=.08){e.target.classList.add('visible');}else if(!e.isIntersecting){e.target.classList.remove('visible');}}),{threshold:[0,.08]});document.querySelectorAll('.about-grid,.section-heading,.experience-card,.stats-grid,.skill-card,.project-card,.internship-card,.credential-grid,.contact-grid').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}

const contactDialog=document.querySelector('#contact-dialog');
const sayHello=document.querySelector('#say-hello');
let contactOverflow='';let contactTrigger=sayHello;
[sayHello,document.querySelector('#header-connect')].forEach(trigger=>trigger.addEventListener('click',()=>{contactTrigger=trigger;contactOverflow=document.body.style.overflow;document.body.style.overflow='hidden';contactDialog.showModal();document.querySelector('#close-contact').focus({preventScroll:true});}));
document.querySelector('#close-contact').addEventListener('click',()=>contactDialog.close());
contactDialog.addEventListener('click',e=>{if(e.target===contactDialog){const r=contactDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)contactDialog.close();}});
contactDialog.addEventListener('close',()=>{document.body.style.overflow=contactOverflow;contactTrigger.focus({preventScroll:true});});

// Preserve native downloads and make their otherwise silent response visible.
document.querySelectorAll('a[download]').forEach(link=>link.addEventListener('click',()=>{
  document.querySelector('#resume-feedback').hidden=false;
  toast('Download requested — check your browser’s downloads.');
}));
// Local light follows the pointer without moving the button or its text.
const glassControls=document.querySelectorAll('button,.button,.header-contact,.contact-option,a[download]');
function applyGlass(control){
  control.classList.add('glass-control');
  const positionGlow=event=>{
    if(event.pointerType==='touch')return;
    const bounds=control.getBoundingClientRect();
    control.style.setProperty('--glow-x',`${event.clientX-bounds.left}px`);
    control.style.setProperty('--glow-y',`${event.clientY-bounds.top}px`);
  };
  control.addEventListener('pointerenter',positionGlow);
  control.addEventListener('pointermove',positionGlow);
  // Keep the last position during fade-out: resetting it would flash the center.

}
glassControls.forEach(applyGlass);

// Preview a connection on hover/focus; native buttons open its detail flyout.
const ecosystem=document.querySelector('.identity-map');
const mapNodes=[...ecosystem.querySelectorAll('.map-node')];
const mapCaption=document.querySelector('#map-caption');
const mapIndex=ecosystem.querySelector('.map-index');
const coreCaption=ecosystem.querySelector('.map-core small');
const mapCopy={governance:['01 / 04','GOVERNANCE','Saviynt EIC governs the identity lifecycle.'],directory:['02 / 04','INTEGRATION','Active Directory connects identities with accounts.'],policy:['03 / 04','ACCESS CONTROL','RBAC connects roles with appropriate permissions.'],review:['04 / 04','ACCESS REVIEWS','Certifications help review existing access.']};
let hoveredNode=null;
function updateMap(){
  const focused=mapNodes.find(node=>node===document.activeElement);
  const active=hoveredNode||focused;
  const key=active?.dataset.map;
  ecosystem.dataset.active=key||'';
  mapNodes.forEach(node=>node.classList.toggle('map-active',node===active));
  mapIndex.textContent=key?mapCopy[key][0]:'EXPLORE';
  coreCaption.textContent=key?mapCopy[key][1]:'AT THE CENTER.';
  mapCaption.textContent=key?mapCopy[key][2]:'Choose a node to explore how it connects.';
}
mapNodes.forEach(node=>{
  node.addEventListener('pointerenter',()=>{hoveredNode=node;updateMap();});
  node.addEventListener('pointerleave',()=>{hoveredNode=null;updateMap();});
  node.addEventListener('focus',updateMap);
  node.addEventListener('blur',()=>{queueMicrotask(updateMap);});
});

// Scroll-linked phone refraction and depth; no pointer tracking or idle animation.
(()=>{
  const phone=matchMedia('(max-width:600px)');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const surfaces=[...document.querySelectorAll('.experience-card,.skill-card,.project-card,.internship-card,.certifications button')];
  const visible=new Set();
  let observer,frame=0;
  const properties=['--glass-shift','--glass-lift','--glass-scale','--glass-light','--glass-shadow'];
  function paint(){
    frame=0;
    if(!phone.matches||reduced.matches||document.hidden||dialog.open)return;
    const height=window.innerHeight;
    // Separate geometry reads from writes to keep swipes responsive.
    const updates=[...visible].filter(card=>!card.classList.contains('stack-card')).map(card=>{
      const rect=card.getBoundingClientRect();
      const lift=parseFloat(card.style.getPropertyValue('--glass-lift'))||0;
      const scale=parseFloat(card.style.getPropertyValue('--glass-scale'))||1;
      const top=rect.top-lift-card.offsetHeight*(1-scale)/2;
      const entry=Math.max(0,Math.min(1,(height-top)/Math.min(height*.6,card.offsetHeight+100)));
      const travel=Math.max(0,Math.min(1,(height-top)/(height+card.offsetHeight)));
      return {card,entry,travel};
    });
    updates.forEach(({card,entry,travel})=>{
      const depth=Math.sin(entry*Math.PI);
      card.style.setProperty('--glass-lift',`${(-8*depth).toFixed(2)}px`);
      card.style.setProperty('--glass-scale',(0.985+entry*.015).toFixed(4));
      card.style.setProperty('--glass-shift',`${(-16+travel*32).toFixed(2)}px`);
      card.style.setProperty('--glass-light',(.55+entry*.3).toFixed(3));
      card.style.setProperty('--glass-shadow',`${(18+depth*10).toFixed(2)}px`);
    });
  }
  function schedule(){if(phone.matches&&!reduced.matches&&!frame)frame=requestAnimationFrame(paint);}
  function configure(){
    observer?.disconnect();visible.clear();cancelAnimationFrame(frame);frame=0;
    surfaces.forEach(card=>{
      card.classList.remove('mobile-lit','mobile-surface');
      properties.forEach(property=>card.style.removeProperty(property));
    });
    if(!phone.matches){
      document.querySelectorAll('.mobile-selected').forEach(card=>card.classList.remove('mobile-selected'));
      dialog.classList.remove('mobile-card-open');
      return;
    }
    surfaces.forEach(card=>card.classList.add('mobile-surface'));
    if(reduced.matches||!('IntersectionObserver' in window))return;
    observer=new IntersectionObserver(entries=>{
      entries.forEach(({target,isIntersecting})=>{
        target.classList.toggle('mobile-lit',isIntersecting);
        if(isIntersecting)visible.add(target);else visible.delete(target);
      });schedule();
    },{rootMargin:'-78px 0px 60px',threshold:0});
    surfaces.forEach(card=>observer.observe(card));
  }
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});
  document.addEventListener('visibilitychange',schedule);
  dialog.addEventListener('close',schedule);
  phone.addEventListener('change',configure);
  reduced.addEventListener('change',configure);
  configure();
})();

// Phone decks use deliberate horizontal swipes or buttons, never page scroll.
(()=>{
  const phone=matchMedia('(max-width:600px)');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const groups=[['.skills-grid','.skill-card','Toolkit'],['.work-grid','.project-card,.internship-card','Selected work'],['.certifications','button[data-detail]','Certifications']];
  let decks=[],lastWidth=0;
  const wrap=(index,count)=>((index%count)+count)%count;
  function pose(rank){
    if(rank<=0)return {x:0,y:0,scale:1,angle:0};
    const depth=Math.min(rank,2),side=rank%2? -1:1;
    return {x:side*7,y:depth*10,scale:1-depth*.035,angle:side*(3+depth)};
  }
  function draw(deck,position){
    deck.position=position;
    const reverse=deck.motionDirection===-1;
    const base=reverse?Math.ceil(position):Math.floor(position),t=reverse?base-position:position-base;
    const front=wrap(base+(t>=.5?(reverse?-1:1):0),deck.cards.length);
    deck.cards.forEach((card,i)=>{
      const rank=wrap(i-base,deck.cards.length);
      const targetRank=reverse?(rank+1)%deck.cards.length:(rank===0?deck.cards.length-1:rank-1);
      const from=pose(rank),to=pose(targetRank);
      const mix=(a,b)=>a+(b-a)*t;
      let x=mix(from.x,to.x),y=mix(from.y,to.y),scale=mix(from.scale,to.scale),angle=mix(from.angle,to.angle),order=deck.cards.length-(t<.5?rank:targetRank);
      if(rank===0&&t>0){
        // Slide in the finger's direction, then tuck behind the new front.
        const arc=Math.sin(Math.PI*t);
        x+=(reverse?1:-1)*deck.cardWidth*1.04*arc;
        angle+=(reverse?1:-1)*9*arc;y-=8*arc;
        order=t<.5?deck.cards.length+1:deck.cards.length-targetRank;
      }
      card.style.setProperty('--stack-transform',`translate(${x}px,${y}px) scale(${scale}) rotate(${angle}deg)`);
      card.style.setProperty('--stack-order',String(order));
      const lightDepth=mix(Math.min(rank,2),Math.min(targetRank,2));
      card.style.setProperty('--glass-shift',`${lightDepth*7}px`);
      card.style.setProperty('--glass-light',String(.85-lightDepth*.12));
      card.classList.toggle('stack-front',i===front);
      // Preserve the gesture target while a finger is held on the deck.
      card.inert=i!==(deck.dragging?deck.index:front);
    });
  }
  function settle(deck){
    deck.index=wrap(deck.index,deck.cards.length);
    deck.animating=false;deck.dragging=false;deck.frame=0;draw(deck,deck.index);
    deck.count.textContent=`${deck.index+1} of ${deck.cards.length} · Swipe to explore`;
    deck.prev.disabled=deck.next.disabled=false;
  }
  function animateTo(deck,target){
    cancelAnimationFrame(deck.frame);deck.dragging=false;
    if(reduced.matches){deck.index=target;settle(deck);return;}
    const start=deck.position,started=performance.now();
    const duration=Math.max(180,Math.abs(target-start)*520);deck.animating=true;
    deck.prev.disabled=deck.next.disabled=true;
    function tick(now){
      const progress=Math.min(1,(now-started)/duration);
      const eased=1-Math.pow(1-progress,3);
      draw(deck,start+(target-start)*eased);
      if(progress<1)deck.frame=requestAnimationFrame(tick);
      else{deck.index=target;settle(deck);}
    }
    deck.frame=requestAnimationFrame(tick);
  }
  function navigate(deck,direction){
    if(deck.animating||deck.dragging||dialog.open)return;
    // Animate one adjacent step through either end, then normalize at rest.
    const target=deck.index+direction;
    if(target!==deck.index){deck.motionDirection=direction;animateTo(deck,target);}
  }
  function bindSwipe(deck){
    let gesture=null,suppressUntil=0;
    function updateDrag(dx){
      const direction=dx<0?1:-1;
      deck.motionDirection=direction;
      // The first half follows the finger approximately one-to-one. Release
      // completes the trip behind the deck, or smoothly returns a short drag.
      const amount=Math.min(.48,Math.abs(dx)/(deck.cardWidth*Math.PI));
      deck.pendingPosition=deck.index+direction*amount;
      if(!reduced.matches&&!deck.frame)deck.frame=requestAnimationFrame(()=>{deck.frame=0;draw(deck,deck.pendingPosition);});
    }
    deck.stage.addEventListener('pointerdown',event=>{
      if(!event.isPrimary||event.button!==0||deck.animating||!event.target.closest('.stack-front'))return;
      gesture={id:event.pointerId,x:event.clientX,y:event.clientY,horizontal:false};
    },{passive:true});
    deck.stage.addEventListener('pointermove',event=>{
      if(!gesture||gesture.id!==event.pointerId)return;
      const dx=event.clientX-gesture.x,dy=event.clientY-gesture.y;
      if(!gesture.horizontal&&Math.abs(dy)>12&&Math.abs(dy)>Math.abs(dx)){gesture=null;return;}
      if(gesture.horizontal||(Math.abs(dx)>12&&Math.abs(dx)>Math.abs(dy)*1.25)){
        gesture.horizontal=true;deck.dragging=true;
        deck.stage.setPointerCapture(event.pointerId);updateDrag(dx);
      }
    },{passive:true});
    function cancelGesture(){
      const wasDragging=deck.dragging;gesture=null;
      if(wasDragging){suppressUntil=performance.now()+650;animateTo(deck,deck.index);}
    }
    deck.stage.addEventListener('pointerup',event=>{
      if(!gesture||gesture.id!==event.pointerId)return;
      const dx=event.clientX-gesture.x,dy=event.clientY-gesture.y,horizontal=gesture.horizontal;
      gesture=null;
      if(horizontal){
        suppressUntil=performance.now()+650;
        const commit=Math.abs(dx)>=45&&Math.abs(dx)>Math.abs(dy)*1.25;
        animateTo(deck,deck.index+(commit?(dx<0?1:-1):0));
      }
      if(deck.stage.hasPointerCapture(event.pointerId))deck.stage.releasePointerCapture(event.pointerId);
    });
    deck.stage.addEventListener('pointercancel',cancelGesture);
    deck.stage.addEventListener('lostpointercapture',event=>{if(event.target===deck.stage&&gesture)cancelGesture();});
    deck.stage.addEventListener('click',event=>{
      if((performance.now()<suppressUntil||deck.animating||deck.dragging)&&!event.target.closest('.deck-navigation')){
        event.preventDefault();event.stopPropagation();
      }
    },true);
  }
  function restore(){
    decks.forEach(deck=>{
      cancelAnimationFrame(deck.frame);
      deck.cards.forEach((card,i)=>{
        deck.homes[i].replaceWith(card);card.inert=false;card.classList.remove('stack-card','stack-front');
        ['--stack-transform','--stack-order','--glass-shift','--glass-light'].forEach(p=>card.style.removeProperty(p));
      });
      deck.stage.remove();deck.host.classList.remove('mobile-deck');
      ['--stage-height','--card-height'].forEach(p=>deck.host.style.removeProperty(p));
      deck.internships?.removeAttribute('hidden');
    });decks=[];
  }
  function configure(force=false){
    if(!force&&innerWidth===lastWidth&&phone.matches===!!decks.length)return;
    const selection=new Map(decks.map(deck=>[deck.host,deck.index]));
    lastWidth=innerWidth;restore();if(!phone.matches)return;
    groups.forEach(([selector,cardSelector,label])=>{
      const host=document.querySelector(selector),cards=[...host.querySelectorAll(cardSelector)];
      const homes=cards.map(card=>{const marker=document.createComment('card home');card.before(marker);return marker;});
      const stage=element('div','','deck-stage'),nav=element('div','','deck-navigation');
      nav.setAttribute('aria-label',label+' card navigation');
      const prev=element('button','←'),next=element('button','→'),count=element('span','');
      [[prev,'M16 10H4M9 5l-5 5 5 5'],[next,'M4 10h12M11 5l5 5-5 5']].forEach(([button,d])=>{
        const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');
        icon.setAttribute('viewBox','0 0 20 20');icon.setAttribute('aria-hidden','true');
        const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',d);
        icon.append(path);button.replaceChildren(icon);
      });
      prev.type=next.type='button';prev.setAttribute('aria-label','Previous '+label+' card');next.setAttribute('aria-label','Next '+label+' card');
      count.setAttribute('aria-live','polite');count.setAttribute('aria-atomic','true');
      nav.append(prev,count,next);stage.append(nav);host.append(stage);
      cards.forEach(card=>{stage.append(card);card.classList.add('stack-card');});
      const internships=host.querySelector('.internships');if(internships)internships.hidden=true;
      host.classList.add('mobile-deck');
      cards.forEach(card=>card.style.height='auto');
      const cardHeight=Math.ceil(Math.max(...cards.map(card=>card.scrollHeight),selector==='.certifications'?host.clientWidth:300));
      cards.forEach(card=>card.style.removeProperty('height'));
      const deck={host,cards,homes,stage,prev,next,count,index:selection.get(host)||0,internships,frame:0,animating:false,dragging:false,position:selection.get(host)||0,cardWidth:cards[0].offsetWidth};decks.push(deck);
      host.style.setProperty('--card-height',cardHeight+'px');host.style.setProperty('--stage-height',(cardHeight+88)+'px');
      prev.addEventListener('click',()=>navigate(deck,-1));next.addEventListener('click',()=>navigate(deck,1));
      bindSwipe(deck);settle(deck);
    });
  }
  window.addEventListener('resize',()=>configure(),{passive:true});
  phone.addEventListener('change',()=>configure(true));
  reduced.addEventListener('change',()=>configure(true));
  document.fonts.ready.then(()=>configure(true));
  configure(true);
})();
