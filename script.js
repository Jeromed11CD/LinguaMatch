/* ========== BANQUE DE MOTS (exemples multi-catégories ~240 paires) ==========
   Format: categoryName: [ [ "english","français" ], ... ]
   Pour ajouter des mots massifs, crée un fichier JSON au même format et utilise "Importer JSON".
=============================================================================*/
const wordBank = {
  "Basics": [
    ["hello","bonjour"],["goodbye","au revoir"],["please","s'il vous plaît"],["thank you","merci"],
    ["yes","oui"],["no","non"],["sorry","désolé"],["excuse me","excusez-moi"],
    ["help","aide"],["name","nom"],["friend","ami"],["family","famille"]
  ],
  "Food": [
    ["bread","pain"],["cheese","fromage"],["egg","œuf"],["milk","lait"],["rice","riz"],
    ["salt","sel"],["sugar","sucre"],["butter","beurre"],["meat","viande"],["fish","poisson"],
    ["apple","pomme"],["banana","banane"]
  ],
  "Animals": [
    ["dog","chien"],["cat","chat"],["bird","oiseau"],["horse","cheval"],["cow","vache"],
    ["pig","cochon"],["sheep","mouton"],["rabbit","lapin"],["mouse","souris"],["lion","lion"],
    ["tiger","tigre"],["elephant","éléphant"]
  ],
  "Travel": [
    ["airport","aéroport"],["ticket","billet"],["train","train"],["plane","avion"],["bus","bus"],
    ["station","gare"],["map","carte"],["luggage","bagages"],["passport","passeport"],["hotel","hôtel"],
    ["road","route"],["station","station"]
  ],
  "Home": [
    ["house","maison"],["door","porte"],["window","fenêtre"],["kitchen","cuisine"],["bathroom","salle de bain"],
    ["bed","lit"],["chair","chaise"],["table","table"],["roof","toit"],["garden","jardin"],
    ["room","chambre"],["floor","sol"]
  ],
  "School": [
    ["book","livre"],["pencil","crayon"],["pen","stylo"],["teacher","professeur"],["student","élève"],
    ["class","classe"],["lesson","leçon"],["homework","devoirs"],["desk","bureau"],["exam","examen"],
    ["library","bibliothèque"],["school","école"]
  ],
  "Body": [
    ["head","tête"],["eye","œil"],["ear","oreille"],["nose","nez"],["mouth","bouche"],
    ["hand","main"],["foot","pied"],["leg","jambe"],["arm","bras"],["heart","cœur"],
    ["hair","cheveux"],["skin","peau"]
  ],
  "Colors": [
    ["red","rouge"],["blue","bleu"],["green","vert"],["yellow","jaune"],["black","noir"],
    ["white","blanc"],["purple","violet"],["pink","rose"],["orange","orange"],["brown","marron"],
    ["gray","gris"],["gold","or"]
  ],
  "Numbers": [
    ["one","un"],["two","deux"],["three","trois"],["four","quatre"],["five","cinq"],
    ["six","six"],["seven","sept"],["eight","huit"],["nine","neuf"],["ten","dix"],
    ["hundred","cent"],["thousand","mille"]
  ],
  "Weather": [
    ["sun","soleil"],["rain","pluie"],["snow","neige"],["wind","vent"],["cloud","nuage"],
    ["storm","tempête"],["hot","chaud"],["cold","froid"],["warm","tiède"],["fog","brouillard"],
    ["temperature","température"],["season","saison"]
  ],
  "Sports": [
    ["football","football"],["tennis","tennis"],["swim","nager"],["run","courir"],["jump","sauter"],
    ["gym","salle de sport"],["team","équipe"],["coach","entraîneur"],["match","match"],["ball","balle"],
    ["goal","but"],["score","score"]
  ],
  "Tech": [
    ["computer","ordinateur"],["phone","téléphone"],["internet","internet"],["email","courriel"],["keyboard","clavier"],
    ["mouse","souris"],["screen","écran"],["app","application"],["download","télécharger"],["upload","téléverser"],
    ["website","site web"],["password","mot de passe"]
  ],
  "Work": [
    ["job","emploi"],["office","bureau"],["boss","patron"],["employee","employé"],["resume","CV"],
    ["meeting","réunion"],["project","projet"],["salary","salaire"],["task","tâche"],["contract","contrat"],
    ["career","carrière"],["deadline","date limite"]
  ],
  "Emotions": [
    ["happy","heureux"],["sad","triste"],["angry","en colère"],["scared","effrayé"],["surprised","surpris"],
    ["bored","ennuyé"],["excited","excité"],["nervous","nerveux"],["proud","fier"],["calm","calme"],
    ["lonely","seul"],["confused","confus"]
  ],
  "Clothes": [
    ["shirt","chemise"],["pants","pantalon"],["dress","robe"],["skirt","jupe"],["shoes","chaussures"],
    ["socks","chaussettes"],["hat","chapeau"],["coat","manteau"],["belt","ceinture"],["jacket","veste"],
    ["gloves","gants"],["scarf","écharpe"]
  ],
  "Nature": [
    ["tree","arbre"],["flower","fleur"],["mountain","montagne"],["river","rivière"],["lake","lac"],
    ["sea","mer"],["forest","forêt"],["rock","roche"],["island","île"],["valley","vallée"],
    ["beach","plage"],["desert","désert"]
  ],
  "Time": [
    ["day","jour"],["night","nuit"],["morning","matin"],["evening","soirée"],["hour","heure"],
    ["minute","minute"],["second","seconde"],["today","aujourd'hui"],["yesterday","hier"],["tomorrow","demain"],
    ["week","semaine"],["month","mois"]
  ],
  "Shapes": [
    ["circle","cercle"],["square","carré"],["triangle","triangle"],["rectangle","rectangle"],["oval","ovale"],
    ["line","ligne"],["point","point"],["curve","courbe"],["star","étoile"],["diamond","losange"],
    ["cube","cube"],["sphere","sphère"]
  ],
  "Health": [
    ["doctor","docteur"],["medicine","médicament"],["hospital","hôpital"],["nurse","infirmière"],["clinic","clinique"],
    ["ill","malade"],["healthy","en bonne santé"],["pain","douleur"],["fever","fièvre"],["cough","toux"],
    ["treatment","traitement"],["recovery","rétablissement"]
  ],
  "Transport": [
    ["car","voiture"],["bike","vélo"],["motorcycle","moto"],["train","train"],["plane","avion"],
    ["boat","bateau"],["truck","camion"],["tram","tram"],["subway","métro"],["taxi","taxi"],
    ["station","station"],["route","route"]
  ]
};

/* ========== LOGIQUE DU JEU ========== */
const categorySelect = document.getElementById('categorySelect');
const startBtn = document.getElementById('startBtn');
const importBtn = document.getElementById('importBtn');
const fileInput = document.getElementById('fileInput');
const gameArea = document.getElementById('gameArea');
const leftCol = document.getElementById('leftCol');
const rightCol = document.getElementById('rightCol');
const themeLabel = document.getElementById('themeLabel');
const phaseLabel = document.getElementById('phaseLabel');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const endArea = document.getElementById('endArea');
const finalScore = document.getElementById('finalScore');
const nextPhaseBtn = document.getElementById('nextPhaseBtn');
const replayBtn = document.getElementById('replayBtn');

let currentCategory = null;
let phase = 1;
let pairs = []; // array of [en,fr]
let leftCards = [];
let rightCards = [];
let selected = null;
let matched = new Set();
let score = 0;
let timer = 0;
let intervalId = null;

/* Populate category select */
function refreshCategories(){
  categorySelect.innerHTML = '';
  Object.keys(wordBank).forEach(k=>{
    const opt = document.createElement('option'); opt.value=k; opt.textContent=k;
    categorySelect.appendChild(opt);
  });
}
refreshCategories();

/* Import JSON file (format like wordBank) */
importBtn.addEventListener('click', ()=> fileInput.click());
fileInput.addEventListener('change', (e)=>{
  const f = e.target.files[0];
  if(!f) return;
  const reader = new FileReader();
  reader.onload = evt=>{
    try{
      const data = JSON.parse(evt.target.result);
      // merge carefully
      Object.keys(data).forEach(cat=>{
        if(!Array.isArray(data[cat])) return;
        if(!wordBank[cat]) wordBank[cat]=[];
        // append pairs (basic validation)
        data[cat].forEach(pair=>{
          if(Array.isArray(pair) && pair.length>=2) wordBank[cat].push([String(pair[0]), String(pair[1])]);
        });
      });
      refreshCategories();
      alert('Importation terminée — catégories mises à jour.');
    }catch(err){
      alert('Fichier JSON invalide : vérifie le format.');
    }
  };
  reader.readAsText(f, 'utf-8');
});

/* Start game */
startBtn.addEventListener('click', startRound);
nextPhaseBtn.addEventListener('click', ()=> { phase++; startRound(); });
replayBtn.addEventListener('click', ()=> { startRound(); });

function startRound(){
  currentCategory = categorySelect.value;
  themeLabel.textContent = currentCategory;
  phaseLabel.textContent = phase;
  // reset
  clearInterval(intervalId); timer = 0; timerEl.textContent = timer;
  score = 0; scoreEl.textContent = score; matched = new Set();
  selected = null;
  endArea.classList.add('hidden');
  gameArea.classList.remove('hidden');

  // Build pairs for this phase:
  const full = wordBank[currentCategory] || [];
  // shuffle and take up to 10 pairs per phase for pace; but player asked many words overall — to use more words in later phases, we randomize
  const shuffled = full.slice().sort(()=>Math.random()-0.5);
  const take = Math.min(10, shuffled.length); // 10 pairs per phase
  pairs = shuffled.slice(0, take);

  // create cards
  leftCol.innerHTML=''; rightCol.innerHTML='';
  leftCards = pairs.map(p=>({text:p[0], pair:p[1]}));
  rightCards = pairs.map(p=>({text:p[1], pair:p[0]}));
  // shuffle right and left separately for randomness
  leftCards.sort(()=>Math.random()-0.5);
  rightCards.sort(()=>Math.random()-0.5);

  leftCards.forEach((c, i)=>{
    const el = document.createElement('div'); el.className='card'; el.textContent=c.text;
    el.dataset.lang='en'; el.dataset.pair = c.pair; el.dataset.id = 'L'+i;
    el.addEventListener('click', ()=>onCardClick(el));
    leftCol.appendChild(el);
  });
  rightCards.forEach((c, i)=>{
    const el = document.createElement('div'); el.className='card'; el.textContent=c.text;
    el.dataset.lang='fr'; el.dataset.pair = c.pair; el.dataset.id = 'R'+i;
    el.addEventListener('click', ()=>onCardClick(el));
    rightCol.appendChild(el);
  });

  // start timer
  intervalId = setInterval(()=>{ timer++; timerEl.textContent = timer; }, 1000);
}

/* Card click logic */
function onCardClick(el){
  if(el.classList.contains('matched')) return;
  if(selected && selected === el) return;

  // select/unselect
  if(!selected){
    selected = el;
    el.classList.add('selected');
    return;
  }

  // if selected exists, check match
  // rule: one must be en, other fr (but we accept both ways)
  if(selected.dataset.pair === el.textContent && el.dataset.pair === selected.textContent){
    // match
    selected.classList.remove('selected');
    selected.classList.add('matched');
    el.classList.add('matched');
    // small success animation
    selected.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }], {duration:260});
    el.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }], {duration:260});
    // update
    matched.add(selected.dataset.id); matched.add(el.dataset.id);
    score += 10;
    scoreEl.textContent = score;
    selected = null;
    // check end
    const totalMatched = matched.size / 2;
    if(totalMatched === pairs.length){
      // round finished
      clearInterval(intervalId);
      endRound();
    }
  } else {
    // not match: flash red
    selected.classList.add('wrong');
    el.classList.add('wrong');
    setTimeout(()=>{
      selected.classList.remove('selected','wrong');
      el.classList.remove('wrong');
      selected = null;
    }, 500);
  }
}

/* End of round */
function endRound(){
  finalScore.textContent = `${score} points • ${timer} sec`;
  gameArea.classList.add('hidden');
  endArea.classList.remove('hidden');
}

/* Accessibility: allow keyboard navigation (optional simple) */
document.addEventListener('keydown', (e)=>{
  if(e.key === 'r'){ startRound(); }
});

/* On load: select first category */
if(Object.keys(wordBank).length){
  categorySelect.value = Object.keys(wordBank)[0];
  themeLabel.textContent = categorySelect.value;
}