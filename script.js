// ===================== VARIABLES =====================
let learningLang = "en";

const languageSelect = document.getElementById("learningLang");
const themesGrid = document.getElementById("themesGrid");
const gamePanel = document.getElementById("gamePanel");
const themesSection = document.getElementById("themesSection");

// ===================== WORD BANK (exemple) =====================
const wordBank = {
  "Animaux": [["dog","chien"],["cat","chat"],["bird","oiseau"],["horse","cheval"],["cow","vache"],["pig","cochon"]],
  "Cuisine": [["knife","couteau"],["fork","fourchette"],["spoon","cuillère"],["plate","assiette"],["cup","tasse"],["pan","poêle"]],
  "Sport": [["football","football"],["tennis","tennis"],["swim","nager"],["run","courir"],["jump","sauter"],["gym","salle de sport"]]
};

// ===================== FONCTION D’AFFICHAGE DES THÈMES =====================
function displayThemes() {
  themesGrid.innerHTML = "";
  for (let theme in wordBank) {
    const tile = document.createElement("div");
    tile.className = "theme-tile";
    tile.innerText = (learningLang === "en") ? theme : theme; // ici on pourra traduire si nécessaire
    tile.addEventListener("click", () => startGame(theme));
    themesGrid.appendChild(tile);
  }
}

// ===================== FONCTION DE DÉBUT DE JEU =====================
function startGame(theme) {
  currentTheme = theme;
  console.log("Phase démarrée pour le thème :", theme);
  themesSection.classList.add("hidden");
  gamePanel.classList.remove("hidden");
}

// ===================== ÉVÉNEMENTS =====================
languageSelect.addEventListener("change", (e) => {
  learningLang = e.target.value;
  displayThemes();
});

// ===================== INITIALISATION =====================
displayThemes();
