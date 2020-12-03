const card_deck_container = document.getElementById('card_deck_container');

let choixScenario;

/*
Crée un personnage.
@param char_src : chemin vers le fichier image du personnage
*/
function createCharacter(char_src) {
    let div_card = document.createElement("div");
    div_card.className = "card bg_color";

    let img = document.createElement("img");
    img.className = "card-img-top";
    img.src = char_src;

    let div_footer = document.createElement("div");
    div_footer.className = "card-footer align_center bg_color";

    let btn_voter = document.createElement("button");
    btn_voter.className = "btn btn-info btn_choix";
    btn_voter.innerHTML = "Voter";

    let br = document.createElement("br");

    let btn_alibi = document.createElement("button");
    btn_alibi.className = "btn btn-info btn_choix";
    btn_alibi.innerHTML = "Alibi";

    div_footer.append(btn_voter);
    div_footer.append(br);
    div_footer.append(btn_alibi);

    div_card.append(img);
    div_card.append(div_footer);

    card_deck_container.append(div_card);
}

/* Fonction à appeler */
createCharacter("./../img/character_yellow.png");
createCharacter("./../img/character_green.png");
createCharacter("./../img/character_red.png");
createCharacter("./../img/character_pink.png");
createCharacter("./../img/character_orange.png");
createCharacter("./../img/character_brown.png");

let btnJouer = document.getElementById('btnJouer');
let selectionScenario = document.getElementById('selectionScenario');
btnJouer.onclick = function() {
    choixScenario = selectionScenario.selectedIndex + 1;
    console.log(choixScenario);
}