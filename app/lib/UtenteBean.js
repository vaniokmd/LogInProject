function UtenteEntity(nomeUtente,password,cognome,indirzzo,pathImagine){
	this.nomeUtente = nomeUtente;
	this.password = password;
	this.cognome = cognome;
	this.indirzzo = indirzzo;
	this.pathImagine = pathImagine;
	
	this.greet = function(){
		Ti.API.info("Ciao sono "+this.nomeUtente);
	};
};

module.exports = UtenteEntity;