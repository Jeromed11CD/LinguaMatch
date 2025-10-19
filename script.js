/* ===================== BANK ===================== */
const wordBank = {
  "Animaux":[["dog","chien"],["cat","chat"],["bird","oiseau"],["horse","cheval"],["cow","vache"],["pig","cochon"]],
  "Cuisine":[["knife","couteau"],["fork","fourchette"],["spoon","cuillère"],["plate","assiette"],["cup","tasse"],["pan","poêle"]],
  "Sport":[["football","football"],["tennis","tennis"],["swim","nager"],["run","courir"],["jump","sauter"],["gym","salle de sport"]],
  "Vêtements":[["shirt","chemise"],["pants","pantalon"],["dress","robe"],["skirt","jupe"],["shoes","chaussures"],["socks","chaussettes"]],
  // … ajoute ici les autres thèmes
};

/* ===================== ELEMENTS ===================== */
const themesGrid = document.getElementById('themesGrid');
const themesSection = document.getElementById('themesSection');
const gamePanel = document.getElementById('gamePanel');
const leftCol = document.getElementById('leftCol');
const rightCol = document.getElementById('rightCol');
const themeLabel = document.getElementById('themeLabel');
const phaseLabel = document.getElementById('phaseLabel');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const endPanel = document.getElementById('endPanel');
const finalScore = document.getElementById('finalScore');
const finalTime = document.getElementById('finalTime');
const learningLangSelect = document.getElementById('learningLang');

const backBtn = document.getElementById('backBtn');
const nextPhaseBtn = document.getElementById('nextPhaseBtn');
const replayBtn = document.getElementById('replayBtn');

let learningLang = 'en'; // langue à apprendre
let currentCategory = null;
let phase = 1;
let pairs = [];
let selected = null;
let matched = 0;
let score = 0;
let timer = 30;
let intervalId = null;

/* ===================== LANGUE ===================== */
learningLangSelect.addEventListener('change', (e)=>{
  learningLang = e.target.value;
});

/* ===================== THEMES ===================== */
function renderThemes(){
  themesGrid.innerHTML = '';
  Object.keys(wordBank).forEach(cat=>{
    const tile = document.createElement('div');
    tile.className = 'theme-tile';
    tile.innerHTML = `<div class="theme-title">${cat}</div><div class="theme-sub">${wordBank[cat].length} mots</div>`;
    tile.addEventListener('click', ()=> startCategory(cat));
    themesGrid.appendChild(tile);
  });
}
renderThemes();

/* ===================== START CATEGORY ===================== */
function startCategory(cat){
  currentCategory = cat;
  phase = 1;
  openPanelForCategory();
  startRound();
}

function openPanelForCategory(){
  themesSection.classList.add('hidden');
  gamePanel.classList.remove('hidden');
  themeLabel.textContent = currentCategory;
  phaseLabel.textContent = phase;
}

/* ===================== BACK BUTTON ===================== */
backBtn.addEventListener('click', ()=>{
  clearInterval(intervalId);
  gamePanel.classList.add('hidden');
  themesSection.classList.remove('hidden');
});

/* ===================== START ROUND ===================== */
function startRound(){
  clearInterval(intervalId);
  leftCol.innerHTML = ''; rightCol.innerHTML = '';
  selected = null; matched = 0; score = 0; timer = 30;
  scoreEl.textContent = score; timerEl.textContent = timer; phaseLabel.textContent = phase;
  endPanel.classList.add('hidden');
  nextPhaseBtn.classList.add('hidden');
  replayBtn.classList.add('hidden');

  const pool = wordBank[currentCategory].slice().sort(()=>Math.random()-0.5);
  pairs = pool.slice(0,6); // 6 mots par phase

  // selon la langue à apprendre, inverser les colonnes
  let leftSide, rightSide;
  if(learningLang === 'en'){
    leftSide = pairs.map(p=>({text:p[0], pair:p[1]})); // anglais à gauche
    rightSide = pairs.map(p=>({text:p[1], pair:p[0]}));
  } else {
    leftSide = pairs.map(p=>({text:p[1], pair:p[0]})); // français à gauche
    rightSide = pairs.map(p=>({text:p[0], pair:p[1]}));
  }

  leftSide.sort(()=>Math.random()-0.5);
  rightSide.sort(()=>Math.random()-0.5);

  leftSide.forEach((c,i)=>{
    const el = document.createElement('div'); el.className='card'; el.textContent=c.text;
    el.dataset.pair = c.pair; el.addEventListener('click', ()=> onCardClick(el));
    leftCol.appendChild(el);
  });

  rightSide.forEach((c,i)=>{
    const el = document.createElement('div'); el.className='card'; el.textContent=c.text;
    el.dataset.pair = c.pair; el.addEventListener('click', ()=> onCardClick(el));
    rightCol.appendChild(el);
  });

  intervalId = setInterval(()=>{
    timer--;
    timerEl.textContent = timer;
    if(timer<=0) endPhase();
  },1000);
}

/* ===================== CARD CLICK ===================== */
function onCardClick(card){
  if(card.classList.contains('disabled')) return;
  card.classList.add('disabled');

  if(!selected){ selected = card; return; }

  if(selected.dataset.pair === card.text){
    selected.classList.add('correct');
    card.classList.add('correct');
    score++;
    scoreEl.textContent = score;
  } else {
    selected.classList.add('wrong');
    card.classList.add('wrong');
  }

  selected = null;
  matched++;
  if(matched >= 6) endPhase();
}

/* ===================== END PHASE ===================== */
function endPhase(){
  clearInterval(intervalId);
  finalScore.textContent = score;
  finalTime.textContent = 30 - timer;
  endPanel.classList.remove('hidden');
  nextPhaseBtn.classList.remove('hidden');
  replayBtn.classList.remove('hidden');
}

/* ===================== BUTTONS ===================== */
nextPhaseBtn.addEventListener('click', ()=>{
  phase++;
  startRound();
});
replayBtn.addEventListener('click', ()=> startRound());
