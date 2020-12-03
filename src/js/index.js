let btnJouer = document.getElementById('btnJouer');
let selectionScenario = document.getElementById('selectionScenario');

btnJouer.onclick = function() {
    let choixScenario = selectionScenario.selectedIndex + 1;
    sessionStorage.setItem("choixScenario", choixScenario);
}