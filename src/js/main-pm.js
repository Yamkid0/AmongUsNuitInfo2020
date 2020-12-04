/** Numero du tour */
let tour =0;

/** Array des personnages */
let personnages = new Array();

/** Nombre de personnage */
let nbPersonnages = 5;

let nbPersonnesEnVie = 0;

/** Numero de l'imposteur scenario 1 */
const IMPOSTEUR_SCENARIO1 = 2;

const ORDRE_KILL_SCENARIO1 = [4,1,3];

/** Numero de l'imposteur scenario 2 */
const IMPOSTEUR_SCENARIO2 = 1;

let listAllAlibi = [
//scenar0
[
    // charac1 - jaune
    ["J’allais à Medbay, j’ai croisé Rose sur ma route, il y a quelques temps.", 
    ""],

    // charac2 - marron
    ["J’ai croisé récemment Rose à Lower Engine. C’était pas loin du meurtre. J’étais à Upper Engine.",
    "Rose était en admin au moment du meurtre. Il y a une vent qui permet de vite s’y déplacer. Le tour était court. Ce n’est pas impossible qu’il se soit vite réfugié là-bas après le meurtre.",
    "Je n’étais pas aux Comms. J’étais à Upper Engine et je ne suis pas allé dans cette zone. Le tueur ne peut être que toi. Vert te soupçonnais depuis un moment."],

    // charac3 - vert
    ["Je suis allé à Admin et ensuite à Reactor j’ai trouvé ici le corps.",
    "Rose était proche du lieu de crime. Ce n’est pas impossible que ce soit elle mais je reste encore hésitant."],

    // charac4 - orange
    [""],

    // charac5 - rose
    ["Moi, à Lower engine. Je n’ai rien vu de particulier. J’ai bien croisé Jaune , il peut vous confirmer que me dirigeais dans la direction opposée.",
     "Marron  n’était pas loin de bleu en début de game. Je ne sais pas ce qu’il s’est passé ensuite, il me semble qu’ils se suivaient.",
     "L’imposteur est forcément Marron . Il a suivi ses victimes tout a long du jeu."]
],
//scenar1
[
    // charac0
    [""],
    // charac1 - jaune
    // charac2 - marron
    // charac3 - vert
    // charac4 - orange
    // charac5 - rose

]
];

let listContext = [
// scenar0
[   
    // tour1
    "Orange meurt à Reactor. Reporté par Vert.",
    // tour2
    "Jaune est mort à Cafeteria. Report par Vert",
    // tour3
    "Vert est mort à Communications. Rose a report."
]
];

/**
 * Objet de type Personnage
 */
function Personnage(imposteur,vie,fichierImg) {
    this.imposteur = imposteur; // imposteur ou innocent
    this.vie = vie; //en vie ?
    this.fichierImg = fichierImg; //lien vers son fichier image
}
/**
 * Change le numero du scenario
 */
function setScenario(newScenario) {
    console.log("set scenario");
    choixScenario = newScenario;
}

/**
 * Cree la partie en fonction du scenario selectionne
 */
function gestionJeu() {
    tour =0;
    console.log("Gestion jeu : \n Choix scenario :" + choixScenario + tour);
    switch(choixScenario) {
        case 1:
            scenario(IMPOSTEUR_SCENARIO1);
            break;
        case 2:
            scenario(IMPOSTEUR_SCENARIO2);
            break;
    }
}

/**
 * Effectue les elements necessaires pour le scenario 1
 */
function scenario(numImposteur) {
    initPersonnages(numImposteur);
    changementContexte();
    document.getElementById('text_alibi_container').innerHTML = " ";
    afficherStatusPersonnagesDebug();
}

/**
 * Initialise tous les personnages et l'imposteur
 */
function initPersonnages(numImposteur) {
    console.log("initPersonnages");
    personnages = new Array();
    /* Fonction à appeler */
    nbPersonnesEnVie = nbPersonnages;
    for(let i = 0; i < nbPersonnages; i++) {
        if(i+1 == numImposteur) { //le personnage a definir comme imposteur
            personnages[i] = new Personnage(true,true,"character_"+(i+1)+".png");
        } else {
            personnages[i] = new Personnage(false,true,"character_"+(i+1)+".png");
        }
        createCharacter('./src/img/' + personnages[i].fichierImg, i+1);
    }
    let indexPersoMort = ORDRE_KILL_SCENARIO1[tour]-1;
    console.log("initPersonnages"+ indexPersoMort);
    personnages[indexPersoMort].vie = false;
    removeCharacter(indexPersoMort+1);
    nbPersonnesEnVie+=-1;
}

function changementTexte(numPersonnage) {
    //setText one de texte a celle correspondant 
    document.getElementById('text_alibi_container').innerHTML = getCorrespondingAlibi(numPersonnage);
}

function changementContexte() {
    document.getElementById('text_context_container').innerHTML = getCorrespondingContext();
}

function getCorrespondingAlibi(numPersonnage) {
    console.log("getCorrespondingAlibi -> Tableau :" + (choixScenario-1) +  (numPersonnage-1) + (tour));
    console.log(listAllAlibi [choixScenario-1][numPersonnage-1][tour]);
    return listAllAlibi[choixScenario-1][numPersonnage-1][tour];
}

function getCorrespondingContext() {
    console.log("getCorrespondingContext -> Tableau :" + (choixScenario-1) + tour);
    console.log(listContext[choixScenario-1][tour]);
    return listContext[choixScenario-1][tour];
}


/**
 * Affiche l'etat actuel des personnages
 */
function afficherStatusPersonnagesDebug() {
    for(let i = 0; i < personnages.length; i++) {
        console.log("Personnage : " + (i+1) + " est : \n  Imposteur : " + personnages[i].imposteur + " \n  En vie : " + personnages[i].vie + " \n  Image : " + personnages[i].fichierImg);
    }
}

/**
 * Lorsque l'utilisateur vote un personnage
 * S'il etait l'imposteur la partie est gagne sinon perdu
 */
function vote(numPersonnage) {
    //get personnage voted
    console.log();
    if(personnages[numPersonnage-1].imposteur) {
        afficherVictoire();
    } else {
        afficherDefaite();
        
    }
}

function neVotePas() {
    nbPersonnesEnVie+=-1;
    if (nbPersonnesEnVie == 2) {
        btn_non_vote.style.display = 'none';
    }
    console.log(nbPersonnesEnVie);
    tour++;
    let indexPersoMort = ORDRE_KILL_SCENARIO1[tour]-1;
    personnages[indexPersoMort].vie = false;
    removeCharacter(indexPersoMort+1);
    changementContexte();
    afficherStatusPersonnagesDebug();
}

/**
 * Affiche la video ? gif de defaite
 */
function afficherDefaite() {
    console.log("defaite");
    part1.style.display = 'none';
    part2.style.display = 'none';
    document.getElementById('defaite').style.display = 'block';
}

/**
 * Affiche la video ? gif de victoire
 */
function afficherVictoire() {
    console.log("Le personnage est l'imposteur. Victoire");
    part1.style.display = 'none';
    part2.style.display = 'none';
    document.getElementById('victoire').style.display = 'block';
}
