//Numero du scenario
var choixScenario = 0;
//Numero du tour
var tour =1;
//Array des personnages
var personnages = new Array();

/**
 * Objet de type Personnage
 */
function Personnage(role,vie,fichierImg) {
    this.role = role; // imposteur ou innocent
    this.vie = vie; //en vie ?
    this.fichierImg = fichierImg; //lien vers son fichier image
}
/**
 * Change le numero du scenario
 */
function setScenario(newScenario) {
	this.scenario = newScenario;
}

function setTour(newTour) {
	this.tour = 1;
}

function gestionJeu() {
	switch(scenario) {
		case 0:
			break;
	}
}

function nouvellePartie() {
	//TODO recuperer numero sur interface ou directement envoye ?
	setTour(1);
	
}

function defaite() {

}

function victoire() {

}

function scenario1() {

}
