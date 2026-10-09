/* ===== عدّل هذا الجزء فقط لكل عميل جديد ===== */
var CONFIG={
  name:'ابتسامة',nameEn:'Demo Dental Clinic',
  headline:'ابتسامتك تستحق عناية بجد',
  tagline:'أطباء ذوو خبرة، شرح واضح لكل خطوة، ونظافة وتعقيم عالي الجودة بأسعار مناسبة. احجز موعدك في أقل من دقيقة.',
  phone:'01000000000',whatsapp:'201000000000',
  address:'[العنوان بالتفصيل]، [المنطقة]، [المدينة]',
  extra:'مكان مهيأ لذوي الاحتياجات الخاصة، والدفع بالبطاقات والمحافظ الإلكترونية.',
  scriptUrl:'https://script.google.com/macros/s/AKfycbxbX_cltG210yBdvImr7WfzG3Op0a-mt3SMUf-iKTQaOmTySc16I7U-L3DTeY-E6E2X/exec', /* الصق هنا رابط Web App من Google Apps Script */
  mapQuery:'dental clinic',timezone:'Africa/Cairo',slotMinutes:30,
  colors:{brand:'#0b4f5c',aqua:'#4cc9bd',sun:'#f2b84b'},
  hours:[[11,22],[11,22],[11,22],[11,22],[11,22],[16,20],[11,22]], /* الأحد→السبت */
  stats:[['4.9/5','تقييم تجريبي'],['[عدد]','فروع'],['[عدد]','مريض سعيد'],['7 أيام','في الأسبوع']],
  bigNum:'+[سنوات]',bigTxt:'سنوات من الخبرة',
  about:'نعتمد على التشخيص الدقيق وخطة علاج واضحة تناسب حالتك وميزانيتك، مع متابعة بعد كل جلسة.',
  checks:['كشف وتشخيص شامل','أدوات معقمة لكل مريض','أسعار معلنة قبل البدء','متابعة بعد العلاج'],
  services:[['✨','تبييض الأسنان','ابتسامة أفتح بطريقة آمنة تحت إشراف الطبيب.'],['🦷','الحشوات التجميلية','حشوات بلون السن الطبيعي.'],['🔍','الكشف والتنظيف','فحص شامل وتنظيف دوري للثة والأسنان.'],['🛡️','جلسات الفلورايد','تقوية المينا والوقاية من التسوس.'],['🪥','علاج العصب','علاج بدون ألم باستخدام تخدير موضعي حديث.'],['👶','أسنان الأطفال','بيئة هادئة وتعامل لطيف مع الصغار.'],['😁','تقويم الأسنان','تقويم معدني وشفاف لضبط الابتسامة.'],['🔧','التركيبات والزرعات','تيجان وجسور وزرع أسنان بخامات معتمدة.']],
  steps:[['اختر الطبيب','حسب التخصص أو أقرب موعد.'],['حدد اليوم والوقت','المواعيد المتاحة فقط هي اللي بتظهر.'],['أدخل بياناتك','الاسم ورقم الموبايل.'],['أكّد على واتساب','بنرد عليك لتثبيت الحجز.']],
  doctors:[
    {id:'d1',icon:'👩‍⚕️',name:'د. [اسم الطبيب]',spec:'تجميل الأسنان',bio:'[نبذة قصيرة]',days:[0,1,2,3,4,6],from:11,to:17},
    {id:'d2',icon:'👨‍⚕️',name:'د. [اسم الطبيب]',spec:'علاج الجذور والحشوات',bio:'[نبذة قصيرة]',days:[0,1,2,3,4,6],from:15,to:22},
    {id:'d3',icon:'👩‍⚕️',name:'د. [اسم الطبيب]',spec:'أسنان الأطفال والتقويم',bio:'[نبذة قصيرة]',days:[0,2,4,5],from:16,to:20}],
  why:[['🧼','تعقيم صارم','أدوات معقمة وبيئة نظيفة في كل زيارة.'],['💬','شرح واضح','الطبيب بيشرح الحالة والخطوات قبل أي إجراء.'],['💳','دفع سهل','كاش أو بطاقات أو محافظ إلكترونية.'],['⏱️','مواعيد منضبطة','الحجز أونلاين يقلل الانتظار.']],
  offerT:'جلسة فلورايد مجانية',offerP:'عرض تجريبي لفترة محدودة مع أول زيارة. [عدّل نص العرض]',
  rating:'4.9',ratingNote:'تقييمات تجريبية للعرض فقط',
  reviews:[['مريض تجريبي 1','تجربة مريحة وشرح واضح لكل خطوة في العلاج.'],['مريض تجريبي 2','نظافة ممتازة وأطباء محترفون وأسعار معقولة.'],['مريض تجريبي 3','الحجز كان سهل جدًا والموعد اتحترم.']],
  faq:[['هل لازم أحجز قبلها؟','الحجز أونلاين بيضمن لك وقتك وبيقلل الانتظار، لكن نستقبل الحالات الطارئة حسب التوفر.'],['إزاي ألغي أو أغيّر الموعد؟','كلمنا على واتساب أو بالتليفون قبل الموعد بوقت كافي.'],['هل الكشف بيكلف كام؟','[اكتب سعر الكشف]'],['هل في دفع بالبطاقات؟','أيوه، كاش أو بطاقات أو محافظ إلكترونية.']]
};
/* ============================================ */
(function(){
var C=CONFIG,$=function(i){return document.getElementById(i)};
var days=['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
var fmt=function(n){var s=n>=12?'م':'ص';return (n%12||12)+':00 '+s};
var fmtM=function(m){var h=Math.floor(m/60),mm=m%60,s=h>=12?'م':'ص';return (h%12||12)+':'+(mm<10?'0':'')+mm+' '+s};
var wall=function(){try{return new Date(new Date().toLocaleString('en-US',{timeZone:C.timezone}))}catch(e){return new Date()}};
var p2=function(n){return (n<10?'0':'')+n};
var dkey=function(d){return d.getFullYear()+p2(d.getMonth()+1)+p2(d.getDate())};
var dlabel=function(d){return days[d.getDay()]+' '+d.getDate()+'/'+(d.getMonth()+1)};
var idEnd=function(id){var a=id.split('_'),k=a[1],m=+a[2];return new Date(+k.slice(0,4),+k.slice(4,6)-1,+k.slice(6,8),0,m+C.slotMinutes).getTime()};
var idStart=function(id){return idEnd(id)-C.slotMinutes*60000};
var esc=function(s){var e=document.createElement('div');e.textContent=s;return e.innerHTML};

/* static content */
var r=document.documentElement.style;r.setProperty('--sun',C.colors.sun);r.setProperty('--aqua',C.colors.aqua);
var st=document.createElement('style');st.textContent=':root{--brand:'+C.colors.brand+'}.hero,.contact,.book{background:'+C.colors.brand+'}';document.head.appendChild(st);
document.title=C.name+' | '+C.nameEn;
var wa='https://wa.me/'+C.whatsapp;
$('logo').innerHTML=C.name+'<small>'+C.nameEn+'</small>';
$('tPhone').textContent='📞 '+C.phone;$('tAddr').textContent='📍 '+C.address;
$('h1').textContent=C.headline;$('tag').textContent=C.tagline;
$('telBtn').href='tel:+'+C.whatsapp;$('telBtn').textContent='اتصل: '+C.phone;
$('waBtn').href=wa;$('fab').href=wa;$('phone').textContent=C.phone;
$('addr').textContent=C.address;$('extra').textContent=C.extra;
$('mapBtn').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(C.mapQuery);
$('foot').textContent='© '+C.name+' — '+C.nameEn+' · نموذج تجريبي';
$('stats').innerHTML=C.stats.map(function(s){return '<div><b>'+s[0]+'</b><span>'+s[1]+'</span></div>'}).join('');
$('bigNum').textContent=C.bigNum;$('bigTxt').textContent=C.bigTxt;$('aboutTxt').textContent=C.about;
$('checks').innerHTML=C.checks.map(function(c){return '<li>'+c+'</li>'}).join('');
$('svc').innerHTML=C.services.map(function(s){return '<div class="card"><div class="ic">'+s[0]+'</div><h3>'+s[1]+'</h3><p>'+s[2]+'</p></div>'}).join('');
$('steps').innerHTML=C.steps.map(function(s){return '<div class="card"><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join('');
$('why').innerHTML=C.why.map(function(s){return '<div class="card"><div class="ic">'+s[0]+'</div><h3>'+s[1]+'</h3><p>'+s[2]+'</p></div>'}).join('');
$('offT').textContent=C.offerT;$('offP').textContent=C.offerP;
$('score').innerHTML='<strong>'+C.rating+'</strong><span>⭐⭐⭐⭐⭐ — '+C.ratingNote+'</span>';
$('revs').innerHTML=C.reviews.map(function(v){return '<div class="card rev"><p>'+v[1]+'</p><b>'+v[0]+'</b></div>'}).join('');
$('faqs').innerHTML=C.faq.map(function(f){return '<details><summary>'+f[0]+'</summary><p>'+f[1]+'</p></details>'}).join('');

/* hours + status */
function paintHours(){
  var n=wall(),d=n.getDay(),t=n.getHours()+n.getMinutes()/60,h=C.hours;
  $('hrs').innerHTML=days.map(function(x,i){return '<tr'+(i===d?' class="today"':'')+'><td>'+x+'</td><td>'+(h[i]?fmt(h[i][0])+' – '+fmt(h[i][1]):'مغلق')+'</td></tr>'}).join('');
  var open=h[d]&&t>=h[d][0]&&t<h[d][1];
  $('dot').className='dot'+(open?' open':'');
  $('st').textContent=open?'مفتوح الآن حتى '+fmt(h[d][1]):'مغلق الآن';
}

/* ---------- booking ---------- */
var booked=new Set(),sel={doc:null,date:null,slot:null},db=null,holder='h'+Math.random().toString(36).slice(2,10),LS='clinic_demo_slots_v1';
var isDemo=true;
function docById(id){return C.doctors.filter(function(d){return d.id===id})[0]}
function slotsFor(doc,date){
  var out=[];if(doc.days.indexOf(date.getDay())<0)return out;
  for(var m=doc.from*60;m+C.slotMinutes<=doc.to*60;m+=C.slotMinutes){out.push({id:doc.id+'_'+dkey(date)+'_'+m,m:m})}
  return out;
}
function avail(id){return idStart(id)>wall().getTime()&&!booked.has(id)}
function nextFor(doc){
  var n=wall();
  for(var i=0;i<14;i++){var d=new Date(n.getFullYear(),n.getMonth(),n.getDate()+i);
    var s=slotsFor(doc,d).filter(function(x){return avail(x.id)})[0];if(s)return {date:d,s:s}}
  return null;
}
function dayList(){var n=wall(),a=[];for(var i=0;i<14;i++)a.push(new Date(n.getFullYear(),n.getMonth(),n.getDate()+i));return a}
function dayHasFree(doc,d){return slotsFor(doc,d).some(function(x){return avail(x.id)})}

function render(){
  /* next-available card */
  $('nextList').innerHTML=C.doctors.map(function(d){var x=nextFor(d);
    return '<div class="nx"><div><b>'+esc(d.name)+'</b><small>'+esc(d.spec)+' · '+(x?dlabel(x.date)+' '+fmtM(x.s.m):'لا يوجد موعد قريب')+'</small></div>'+(x?'<button data-d="'+d.id+'" data-k="'+dkey(x.date)+'" data-s="'+x.s.id+'">احجز</button>':'')+'</div>'}).join('');
  /* doctors select */
  $('dsel').innerHTML=C.doctors.map(function(d){return '<button type="button" class="dopt" data-d="'+d.id+'" aria-pressed="'+(sel.doc===d.id)+'"><b>'+esc(d.name)+'</b><small>'+esc(d.spec)+'</small></button>'}).join('');
  var doc=sel.doc&&docById(sel.doc);
  $('days').innerHTML=doc?dayList().map(function(d){var k=dkey(d),ok=dayHasFree(doc,d);
    return '<button type="button" class="day" data-k="'+k+'" aria-pressed="'+(sel.date===k)+'"'+(ok?'':' disabled')+'>'+days[d.getDay()]+'<b>'+d.getDate()+'</b>'+(ok?'':'<small>مكتمل</small>')+'</button>'}).join(''):'<span class="hint">اختر الطبيب أولًا.</span>';
  var sl='';
  if(doc&&sel.date){var d0=dayList().filter(function(d){return dkey(d)===sel.date})[0];
    sl=d0?slotsFor(doc,d0).map(function(x){var ok=avail(x.id);return '<button type="button" class="slot" data-s="'+x.id+'" aria-pressed="'+(sel.slot===x.id)+'"'+(ok?'':' disabled')+'>'+fmtM(x.m)+(ok?'':'<small style="display:block;font-size:.7rem">محجوز</small>')+'</button>'}).join(''):''}
  $('slots').innerHTML=sl||'<span class="hint">اختر اليوم لعرض المواعيد.</span>';
  $('slotHint').textContent=doc&&sel.date?'(المواعيد المحجوزة مقفولة)':'';
  $('mode').textContent=C.scriptUrl?'الحجز متصل بـ Google Sheet: المواعيد المحجوزة بتتحدث من الشيت كل 30 ثانية.':isDemo?'وضع تجريبي: الحجوزات هنا محفوظة على جهازك فقط ولا تصل لأحد.':'الحجز المباشر مفعّل: أي موعد يتحجز بيتقفل لكل الزوار فورًا.';
}
function say(t,cls){var m=$('msg');m.hidden=!t;m.className='msg '+(cls||'');m.innerHTML=t||''}
document.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  if(b.closest('#nextList')){sel={doc:b.dataset.d,date:b.dataset.k,slot:b.dataset.s};render();say('');$('book').scrollIntoView();return}
  if(b.classList.contains('dopt')){sel={doc:b.dataset.d,date:null,slot:null};say('');render()}
  else if(b.classList.contains('day')){sel.date=b.dataset.k;sel.slot=null;say('');render()}
  else if(b.classList.contains('slot')){sel.slot=b.dataset.s;say('');render()}
});

function loadLocal(){
  try{var a=JSON.parse(localStorage.getItem(LS)||'[]');a.forEach(function(i){booked.add(i)})}catch(e){}
  /* مواعيد محجوزة وهمية للعرض فقط في الوضع التجريبي */
  var n=wall();C.doctors.forEach(function(d,j){for(var i=0;i<3;i++){var dt=new Date(n.getFullYear(),n.getMonth(),n.getDate()+i);var s=slotsFor(d,dt);if(s.length)[1,3,5].forEach(function(k,q){if((i+j+q)%2===0&&s[k])booked.add(s[k].id)})}});
}
function saveLocal(id){try{var a=JSON.parse(localStorage.getItem(LS)||'[]');a.push(id);localStorage.setItem(LS,JSON.stringify(a))}catch(e){}}

$('bookBtn').addEventListener('click',async function(){
  var name=$('pname').value.trim(),ph=$('pphone').value.replace(/[\s-]/g,'');
  if(!sel.doc||!sel.date||!sel.slot){say('اختر الطبيب واليوم والوقت أولًا.','err');return}
  if(name.length<3){say('اكتب اسمك بالكامل.','err');return}
  if(!/^01\d{9}$/.test(ph)){say('اكتب رقم موبايل مصري صحيح (11 رقم يبدأ بـ 01).','err');return}
  var id=sel.slot;
  if(!avail(id)){say('الموعد ده اتحجز، اختر وقتًا تانيًا.','err');render();return}
  var btn=this;btn.disabled=true;
  try{
    if(C.scriptUrl){
      var dc=docById(sel.doc),d1=new Date(idStart(id));
      var resp=await fetch(C.scriptUrl,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({slotId:id,doctorId:dc.id,doctorName:dc.name,date:d1.getFullYear()+'-'+p2(d1.getMonth()+1)+'-'+p2(d1.getDate()),time:p2(d1.getHours())+':'+p2(d1.getMinutes()),name:name,phone:ph})});
      var out=await resp.json();
      if(!out.ok){
        if(out.error==='taken'){booked.add(id);sel.slot=null;say('حد حجز الموعد ده قبلك بثواني، اختر وقتًا تانيًا.','err');render();return}
        throw new Error(out.error||'failed');
      }
    }else if(db){
      var res=await db.doc('slots/'+id).acquire({holder:holder,ttlMs:Math.max(60000,idEnd(id)-wall().getTime())});
      if(!res.acquired){booked.add(id);say('حد حجز الموعد ده قبلك بثواني، اختر وقتًا تانيًا.','err');sel.slot=null;render();return}
    }else{saveLocal(id)}
    booked.add(id);
    var doc=docById(sel.doc),d0=new Date(idStart(id));
    var txt='مرحباً، حجزت موعد في '+C.name+'\nالطبيب: '+doc.name+'\nاليوم: '+dlabel(d0)+'\nالوقت: '+fmtM(d0.getHours()*60+d0.getMinutes())+'\nالاسم: '+name+'\nالموبايل: '+ph;
    say('<b>تم حجز الموعد ✅</b>'+(out&&out.ref?' رقم الحجز: '+esc(out.ref):'')+'<br>'+esc(doc.name)+' — '+dlabel(d0)+' الساعة '+fmtM(d0.getHours()*60+d0.getMinutes())+'<br>اضغط لتأكيد الحجز مع العيادة على واتساب:<br><a class="btn wa" style="margin-top:10px" target="_blank" rel="noopener" href="'+wa+'?text='+encodeURIComponent(txt)+'">أكّد على واتساب</a>','ok');
    sel={doc:sel.doc,date:sel.date,slot:null};render();
  }catch(err){say('تعذر إتمام الحجز الآن (تأكد من الاتصال). حاول تاني أو كلمنا على واتساب.','err')}
  finally{btn.disabled=false}
});

/* docs section */
$('docs').innerHTML=C.doctors.map(function(d){return '<div class="card doc"><div class="av">'+d.icon+'</div><h3>'+esc(d.name)+'</h3><span class="tag">'+esc(d.spec)+'</span><p>'+esc(d.bio)+'</p><p><a class="btn" style="padding:6px 18px" href="#book" data-pick="'+d.id+'">احجز معه</a></p></div>'}).join('');
document.addEventListener('click',function(e){var a=e.target.closest('[data-pick]');if(a){sel={doc:a.dataset.pick,date:null,slot:null};render()}});

async function pullSheet(){try{var rs=await fetch(C.scriptUrl+'?action=booked');var o=await rs.json();if(o.ok){var now=wall().getTime();booked=new Set(o.booked.filter(function(id){return idEnd(id)>now}));render()}}catch(e){}}
paintHours();if(!C.scriptUrl)loadLocal();render();
if(C.scriptUrl){isDemo=false;booked=new Set();pullSheet();setInterval(pullSheet,30000)}
setInterval(function(){paintHours();render()},60000);

/* upgrade to shared live bookings when available */
try{
  if(!C.scriptUrl&&window.claude&&claude.use){claude.use('db').then(function(d){
    if(!d)return;db=d;isDemo=false;booked=new Set();
    d.collection('slots').onSnapshot(function(snap){
      var now=wall().getTime();booked=new Set(snap.docs.map(function(x){return x.id}).filter(function(id){return idEnd(id)>now}));render();
    },function(){db=null;isDemo=true;booked=new Set();loadLocal();render()});
    render();
  }).catch(function(){})}
}catch(e){}
})();
