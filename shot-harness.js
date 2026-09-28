// Builds _shot.html: the game plus a scene set up from the URL hash (#shot1..#shot4) for store screenshots.
const fs=require('fs');let s=fs.readFileSync(__dirname+'/index.html','utf8');
const scene=`
(function(){const m=location.hash.match(/shot([0-9])/);if(!m)return;const n=+m[1];
 fertilize=function(){};narrate=function(){};
 setTimeout(()=>{
  LANG=n===3?'vi':'en';applyLang();refreshHome();
  S.perm={};S.load=['jet','laser','zap','emp'];
  startGame();while(state==='levelup')pickCard(0);
  const mk=(lv)=>({lv,ult:true,t:0,drones:[],segs:[]});
  R.sk.jet=mk({n:3,d:3,c:0});R.sk.laser=mk({n:2,r:2,w:3});R.sk.zap=mk({j:3,b:2,d:3});R.sk.emp=mk({r:3,c:3,d:3});
  R.skOrder=['jet','laser','zap','emp'];R.g={g_multi:4,g_dmg:5,g_storm:2,g_pierce:2};
  if(n!==1){R.fz.storm=true;R.sk.zap.fz='storm';R.sk.laser.fz='storm'}
  renderSlots();R.t=n===4?512:420;R.nextBoss=1e9;R.kills=n===4?1874:1432;R.lvl=23;
  R.bossN=n===1?4:n===2?1:2;spawnBoss();const b=R.boss;b.x=VW*.18;b.y=-VH*.36;b.hp=b.max=1e9;b.st=99;
  for(let i=0;i<130;i++){const [x,y]=edgePoint(Math.random()*TAU,-rnd(10,Math.min(VW,VH)*.6));mkEnemy(pickType(420),x,y)}
  for(const e of R.en)if(!e.boss){e.hp=e.max=e.hp*8}
  for(let i=0;i<50;i++){update(1/30);updFx(1/30);while(state==='levelup')pickCard(0)}
  R.aimT=R.aim=-1.2;R.pending=0;R.shake=0;bannerT=0;$('banner').innerHTML='';$('sub').classList.remove('on');R.tx=R.tx.filter(t=>t.big);$('levelup').hidden=true;state='play';
  if(n===3)setTimeout(()=>{openQuiz(R.sorted[0]||R.en[0])},900);
  if(n===4)setTimeout(()=>{state='play';R.bossKills=3;finishRun();$('nameIn').value='Born Anyway 482';drawUltrasound()},900);
 },400);
})();
`;
const i=s.lastIndexOf('})();');s=s.slice(0,i)+scene+s.slice(i);fs.writeFileSync(__dirname+'/_shot.html',s);console.log('ok');
