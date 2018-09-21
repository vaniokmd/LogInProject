Alloy.Globals.numeroUtenti = 10;
Alloy.Globals.numeUtenteGenerico = "ion";
Alloy.Globals.passwordGenerico = "ciao";
Alloy.Globals.cognomeGenerico = "Varanita".repeat(50);
Alloy.Globals.pathENomeImagineGenerica = "/avatars/immagine";
Alloy.Globals.nomeString="Nome";
Alloy.Globals.cognomeString="Cognome";
Alloy.Globals.emailString="Email";

var UtenteDao = require("UtenteDao").utenteDao;
Ti.API.info("DaoUtenteClass", UtenteDao);
Alloy.Globals.utenteDao = new UtenteDao();

Ti.API.info("DaoUtenteInfo "+Alloy.Globals.utenteDao.getUtenteByUserNameAndPassword);
