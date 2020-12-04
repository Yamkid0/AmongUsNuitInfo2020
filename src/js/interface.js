const part1 = document.getElementById('part1');
const part2 = document.getElementById('part2');

const btnJouer = document.getElementById('btnJouer');
const btn_non_vote = document.getElementById('btn_non_vote');
const selectionScenario = document.getElementById('selectionScenario');

const btn_retour2 = document.getElementById('btn_retour2');
const btn_retour3 = document.getElementById('btn_retour3');

const card_deck_container = document.getElementById('card_deck_container');
const btn_retour = document.getElementById('btn_retour');

let choixScenario;

btnJouer.onclick = function() {
    choixScenario = selectionScenario.selectedIndex + 1;
    part1.style.display = 'none';
    part2.style.display = 'block';
    btn_non_vote.style.display = 'inline';
    gestionJeu();
}

btn_retour.onclick = function() {
    part1.style.display = 'block';
    part2.style.display = 'none';
    card_deck_container.innerHTML = "";
}

btn_retour2.onclick = retourAccueil;
btn_retour3.onclick = retourAccueil;

function retourAccueil() {
    part1.style.display = 'block';
    card_deck_container.innerHTML = "";
    document.getElementById('victoire').style.display = 'none';
    document.getElementById('defaite').style.display = 'none';
}

btn_non_vote.onclick = function() {
    neVotePas();
}

/*
Crée un personnage.
@param char_src : chemin vers le fichier image du personnage
@param num : numéro du personnage
*/
function createCharacter(char_src, num) {
    let div_card = document.createElement("div");
    div_card.className = "card bg_color";
    div_card.id = "char" + num;

    let img = document.createElement("img");
    img.className = "card-img-top";
    img.src = char_src;
    img.id = char_src.substring(18, 21);

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
    btn_alibi.setAttribute('onclick','changementTexte(' + num + ')');

    div_footer.append(btn_voter);
    div_footer.append(br);
    div_footer.append(btn_alibi);

    div_card.append(img);
    div_card.append(div_footer);

    card_deck_container.append(div_card);
}

function removeCharacter(index) {
    let char_img = document.getElementById("r_" + index)
    char_img.src = "./src/img/tombe.png";
    char_img.parentElement.children[1].remove();

}