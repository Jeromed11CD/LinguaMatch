// ===================== CONFIGURATION =====================
const wordBank = {
  "Animaux": [["dog","chien"],["cat","chat"],["bird","oiseau"],["horse","cheval"],["cow","vache"],["pig","cochon"]],
  "Cuisine": [["knife","couteau"],["fork","fourchette"],["spoon","cuillère"],["plate","assiette"],["cup","tasse"],["pan","poêle"]],
  "Sport": [["football","football"],["tennis","tennis"],["swim","nager"],["run","courir"],["jump","sauter"],["gym","salle de sport"]],
  "Vêtements": [["shirt","chemise"],["pants","pantalon"],["dress","robe"],["skirt","jupe"],["shoes","chaussures"],["socks","chaussettes"]],
  "Couleurs": [["red","rouge"],["blue","bleu"],["green","vert"],["yellow","jaune"],["black","noir"],["white","blanc"]],
  "Fruits": [["apple","pomme"],["banana","banane"],["orange","orange"],["grape","raisin"],["pear","poire"],["strawberry","fraise"]],
  "École": [["school","école"],["book","livre"],["pen","stylo"],["pencil","crayon"],["teacher","professeur"],["student","étudiant"]],
  "Maison": [["house","maison"],["door","porte"],["window","fenêtre"],["table","table"],["chair","chaise"],["bed","lit"]],
  "Métiers": [["doctor","médecin"],["nurse","infirmière"],["teacher","enseignant"],["engineer","ingénieur"],["driver","chauffeur"],["chef","chef"]],
  "Transports": [["car","voiture"],["bus","bus"],["train","train"],["plane","avion"],["bicycle","vélo"],["boat","bateau"]],
  "Technologie": [["computer","ordinateur"],["phone","téléphone"],["tablet","tablette"],["keyboard","clavier"],["mouse","souris"],["screen","écran"]],
  "Corps": [["head","tête"],["arm","bras"],["leg","jambe"],["hand","main"],["foot","pied"],["eye","œil"]],
  "Famille": [["mother","mère"],["father","père"],["brother","frère"],["sister","sœur"],["grandmother","grand-mère"],["grandfather","grand-père"]],
  "Nature": [["tree","arbre"],["flower","fleur"],["river","rivière"],["mountain","montagne"],["sea","mer"],["sky","ciel"]],
  "Météo": [["sunny","ensoleillé"],["rainy","pluvieux"],["cloudy","nuageux"],["snowy","enneigé"],["windy","venteux"],["stormy","orageux"]],
  "Animaux marins": [["fish","poisson"],["shark","requin"],["whale","baleine"],["dolphin","dauphin"],["crab","crabe"],["octopus","pieuvre"]],
  "Véhicules": [["car","voiture"],["motorbike","moto"],["truck","camion"],["bicycle","vélo"],["train","train"],["plane","avion"]],
  "Musique": [["song","chanson"],["guitar","guitare"],["piano","piano"],["drum","batterie"],["violin","violon"],["voice","voix"]],
  "Lieux": [["park","parc"],["school","école"],["cinema","cinéma"],["museum","musée"],["beach","plage"],["restaurant","restaurant"]],
  "Vêtements d’hiver": [["coat","manteau"],["scarf","écharpe"],["gloves","gants"],["hat","chapeau"],["boots","bottes"],["sweater","pull"]],
  "Vêtements d’été": [["t-shirt","t-shirt"],["shorts","short"],["sandals","sandales"],["cap","casquette"],["dress","robe"],["sunglasses","lunettes"]],
  "Loisirs": [["reading","lecture"],["painting","peinture"],["swimming","natation"],["hiking","randonnée"],["gaming","jeu vidéo"],["cycling","cyclisme"]],
  "Émotions": [["happy","heureux"],["sad","triste"],["angry","en colère"],["scared","effrayé"],["surprised","surpris"],["tired","fatigué"]],
  "Aliments": [["bread","pain"],["milk","lait"],["cheese","fromage"],["rice","riz"],["egg","œuf"],["fish","poisson"]],
  "Boissons": [["water","eau"],["juice","jus"],["milk","lait"],["coffee","café"],["tea","thé"],["soda","soda"]],
  "Objets": [["book","livre"],["pen","stylo"],["phone","téléphone"],["key","clé"],["bag","sac"],["watch","montre"]],
  "Villes": [["Paris","Paris"],["London","Londres"],["New York","New York"],["Tokyo","Tokyo"],["Berlin","Berlin"],["Madrid","Madrid"]],
  "Adjectifs": [["big","grand"],["small","petit"],["fast","rapide"],["slow","lent"],["hot","chaud"],["cold","froid"]],
  "Verbes": [["eat","manger"],["drink","boire"],["sleep","dormir"],["run","courir"],["jump","sauter"],["write","écrire"]],
  "Parties du corps": [["head","tête"],["hand","main"],["foot","pied"],["arm","bras"],["leg","jambe"],["eye","œil"]],
  "Meubles": [["chair","chaise"],["table","table"],["bed","lit"],["sofa","canapé"],["shelf","étagère"],["desk","bureau"]],
  "Vêtements accessoires": [["hat","chapeau"],["scarf","écharpe"],["gloves","gants"],["belt","ceinture"],["socks","chaussettes"],["shoes","chaussures"]],
  "Professions": [["doctor","médecin"],["teacher","enseignant"],["engineer","ingénieur"],["nurse","infirmière"],["chef","chef"],["driver","chauffeur"]],
  "Transports publics": [["bus","bus"],["train","train"],["tram","tram"],["metro","métro"],["plane","avion"],["boat","bateau"]],
  "Technologie quotidienne": [["computer","ordinateur"],["phone","téléphone"],["tablet","tablette"],["keyboard","clavier"],["mouse","souris"],["screen","écran"]],
  "Animaux sauvages": [["lion","lion"],["tiger","tigre"],["bear","ours"],["elephant","éléphant"],["wolf","loup"],["fox","renard"]],
  "Animaux domestiques": [["dog","chien"],["cat","chat"],["rabbit","lapin"],["hamster","hamster"],["parrot","perroquet"],["goldfish","poisson rouge"]],
  "Instruments de musique": [["guitar","guitare"],["piano","piano"],["drum","batterie"],["violin","violon"],["flute","flûte"],["trumpet","trompette"]],
  "Parties de la maison": [["kitchen","cuisine"],["bedroom","chambre"],["bathroom","salle de bain"],["living room","salon"],["garage","garage"],["garden","jardin"]],
  "Équipements sportifs": [["ball","ballon"],["racket","raquette"],["skateboard","skateboard"],["bike","vélo"],["helmet","casque"],["gloves","gants"]],
  "Objets scolaires": [["book","livre"],["pen","stylo"],["pencil","crayon"],["notebook","cahier"],["eraser","gomme"],["ruler","règle"]],
  "Plantes": [["flower","fleur"],["tree","arbre"],["bush","buisson"],["grass","herbe"],["leaf","feuille"],["root","racine"]],
  "Émotions et sentiments": [["happy","heureux"],["sad","triste"],["angry","en colère"],["scared","effrayé"],["excited","excité"],["bored","ennuyé"]],
  "Aliments sucrés": [["cake","gâteau"],["chocolate","chocolat"],["candy","bonbon"],["ice cream","glace"],["cookie","biscuit"],["pie","tarte"]],
  "Boissons chaudes": [["coffee","café"],["tea","thé"],["hot chocolate","chocolat chaud"],["milk","lait"],["soup","soupe"],["juice","jus"]],
  "Équipements de maison": [["chair","chaise"],["table","table"],["bed","lit"],["sofa","canapé"],["lamp","lampe"],["shelf","étagère"]],
  "Vêtements de sport": [["shorts","short"],["t-shirt","t-shirt"],["sneakers","baskets"],["cap","casquette"],["jacket","veste"],["socks","chaussettes"]],
  "Langues": [["english","anglais"],["french","français"],["spanish","espagnol"],["german","allemand"],["italian","italien"],["chinese","chinois"]],
  "Objets du quotidien": [["key","clé"],["bag","sac"],["wallet","portefeuille"],["phone","téléphone"],["watch","montre"],["glasses","lunettes"]]
};

// ===================== VARIABLES =====================
let learningLang = "en";
let currentTheme = "";
let phaseWords = [];
let phaseIndex = 0;
let score = 0;
let timer = 30;
let timerInterval;
let usedPhases = [];

const languageSelect = document.getElementById("learningLang");
const themesGrid = document.getElementById("themesGrid");
const gamePanel = document.getElementById("gamePanel");
const themesSection = document.getElementById("themesSection");
const themeLabel = document.getElementById("themeLabel");
const leftCol = document.getElementById("leftCol");
const rightCol = document.getElementById("rightCol");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const phaseLabel = document.getElementById("phaseLabel");
const endPanel = document.getElementById("
