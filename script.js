// ===================== VARIABLES =====================
let learningLang = "en";
let currentTheme = "";
let phaseWords = [];
let phaseIndex = 0;
let score = 0;
let timer = 30;
let timerInterval;

const languageSelect = document.getElementById("learningLang");
const themesGrid = document.getElementById("themesGrid");
const gamePanel = document.getElementById("gamePanel");
const themesSection = document.getElementById("themesSection");
const themeLabel = document.getElementById("themeLabel");

// ===================== WORD BANK EXEMPLE =====================
const wordBank = {
  "Animaux": [["dog","chien"],["cat","chat"],["bird","oiseau"],["horse","cheval"],["cow","vache"],["pig","cochon"]],
  "Cuisine": [["knife","couteau"],["fork","fourchette"],["spoon","cuillère"],["plate","assiette"],["cup","tasse"],["pan","poêle"]],
  "Sport": [["football","football"],["tennis","tennis"],["swim","nager"],["run","courir"],["jump","sauter"],["gym","salle de sport"]],
  // ... ajouter ici les 50 thèmes complets
};

// ===================== AFFICHAGE DES THÈMES =====================
function displayThemes() {
  themesGrid.innerHTML = "";
  for (let theme in wordBank) {
    const tile = document.createElement("div");
    tile.className = "theme-tile";
    tile.innerText = (learningLang === "en") ? theme : theme; // on pourra traduire si nécessaire
    tile.addEventListener("click", () => startGame(theme));
    themesGrid.appendChild(tile);
  }
}

// ===================== DÉBUT DE LA PHASE =====================
function startGame(theme) {
  currentTheme = theme;
  phaseWords = [...wordBank[theme]]; // copier les mots
  phaseIndex = 0;
  score = 0;
  timer = 30;

  themesSection.classList.add("hidden");
  gamePanel.classList.remove("hidden");
  themeLabel.innerText = theme;

  // ici tu peux ajouter la logique pour afficher les mots, timer, clic correct/incorrect...
}

// ===================== CHANGEMENT DE LANGUE =====================
languageSelect.addEventListener("change", (e) => {
  learningLang = e.target.value;
  displayThemes();
});

// ===================== INITIALISATION =====================
displayThemes();
