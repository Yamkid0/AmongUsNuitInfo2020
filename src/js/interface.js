const card_deck_container = document.getElementById('card_deck_container');

/*
Crée un personnage.
@param char_src : chemin vers le fichier image du personnage
@param num : numéro du personnage
*/
function createCharacter(char_src, num) {
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
    btn_voter.id = num;
    btn_voter.setAttribute('onclick','vote(' + num + ')');

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
/*createCharacter("./../img/character_yellow.png", 1);
createCharacter("./../img/character_green.png", 2);
createCharacter("./../img/character_red.png", 3);
createCharacter("./../img/character_pink.png", 4);
createCharacter("./../img/character_orange.png", 5);
createCharacter("./../img/character_brown.png", 6);*/