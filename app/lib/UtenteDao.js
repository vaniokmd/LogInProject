/**
 * @author XSOF389
 */
function UtenteDao(){
	var mappaDatabase = new Map();
	var nrUtenti = Alloy.Globals.numeroUtenti;

	var pathENomeImagineGenerica = Alloy.Globals.pathENomeImagineGenerica;
	var nomeUtenteGenerico = Alloy.Globals.numeUtenteGenerico;
	var passwordGenerico = Alloy.Globals.passwordGenerico;

	var UtenteBean = require("UtenteBean");


	for (var i=1; i <= nrUtenti; i++) {
  		var utenteEntityBean = new UtenteBean(nomeUtenteGenerico+i,passwordGenerico+i,"Varanita"+i,"varanita@gmail.com"+i,pathENomeImagineGenerica+i+".png");
  		Ti.API.info('utenteEntityBean: '+JSON.stringify(utenteEntityBean));
  		mappaDatabase.set(utenteEntityBean.nomeUtente,utenteEntityBean);
	};

	this.getUtenteByUserNameAndPassword = function(userName,password){
		var entita=mappaDatabase.get(userName);

		if(entita!=undefined&&entita.password==password){
			return entita;
		}
		return null;
	};

	this.getUtenteByUserName=function(userName){
		var entita=mappaDatabase.get(userName);

		if(entita!=undefined){
			return entita;
		}
		return null;
	};
	this.listaInfoUtente = function(){
		var iteratorUtenti = mappaDatabase.values();

		var listaInfoUtente = [];


		var utente = iteratorUtenti.next().value;
		while(utente!==undefined){
				var infoUtente = {};
				infoUtente.nomeUtente = utente.nomeUtente;
				infoUtente.cognome = utente.cognome;
				infoUtente.pathImagine = utente.pathImagine;

				listaInfoUtente.push(infoUtente);
				utente = iteratorUtenti.next().value;
		}
		return listaInfoUtente;

	}
};
exports.utenteDao = UtenteDao;
