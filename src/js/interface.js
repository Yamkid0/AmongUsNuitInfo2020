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
for (let i = 0; i < 6; i++) {
    createCharacter("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/de5dkfo-361fa49d-4f48-432b-a55d-c9dad5fc5055.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNGIxY2VlZTUtOTQ1OC00NDM0LTgwYmMtZmM1ZDgzYTJlYTg4XC9kZTVka2ZvLTM2MWZhNDlkLTRmNDgtNDMyYi1hNTVkLWM5ZGFkNWZjNTA1NS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.KPxCEBilI2yzC4kbrECS07aXWy4SGKXTrJ9DjMBgu8E");
}

let btnJouer = document.getElementById('btnJouer');
let selectionScenario = document.getElementById('selectionScenario');
btnJouer.onclick = function() {
    choixScenario = selectionScenario.selectedIndex + 1;
    console.log(choixScenario);
}