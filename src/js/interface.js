let choixScenario;

function createCharacter(text) {
	// TODO
}

let btnJouer = document.getElementById('btnJouer');
let selectionScenario = document.getElementById('selectionScenario');
btnJouer.onclick = function() {
	choixScenario = selectionScenario.selectedIndex + 1;
	console.log(choixScenario);
}