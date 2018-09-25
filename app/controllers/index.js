var campoNomeUtente = $.nome_utente;
var campoPassword = $.password;
var database = Alloy.Globals.database;
utenteDao = Alloy.Globals.utenteDao;
var entityUtente = null;

var logInButton = $.login_button;

logInButton.addEventListener('click',function(e){
		if(verificaCredenziali()){
			vaiAllaPaginaUser();
		}
	});

function vaiAllaPaginaUser(){
	Alloy.createController("userPage",entityUtente);
}

logInButton.addEventListener('longclick',function(e){
		if(verificaCredenziali()){
			Alloy.createController("userPageComposite",entityUtente);
		}
	});

function verificaCredenziali(){
	var nomeUtente = campoNomeUtente.value;
	var password = campoPassword.value;
	if(nomeUtente.length==0){
		Ti.API.info(JSON.stringify(campoNomeUtente));
		campoNomeUtente.hintText = "Inserisci nome utente";
		campoNomeUtente.hintTextColor = "red";
		return false;
	}
	if(password.length==0){
		Ti.API.info(JSON.stringify(campoPassword));
		campoPassword.hintText = "Inserisci la passowrd";
		campoPassword.hintTextColor = "red";
		return false;
	}


	entityUtente = utenteDao.getUtenteByUserNameAndPassword(nomeUtente,password);

	if(entityUtente==null){
		alert("Nome utente o password sbagliata!");
		return false;
	}
	return true;
}


var listaUtentiSelection = $.listaUtentiSelection;

$.tuttiUtentiTab.addEventListener('click', function(e){

var wrapItem = $.wrap_item;
		var listaInfoUtente = utenteDao.listaInfoUtente();



		var items = [];

		for (var i = 0; i < listaInfoUtente.length; i++) {
			var infoUtenteObject = listaInfoUtente[i];

			items.push(creaItemList(infoUtenteObject,i));

		}
		listaUtentiSelection.setItems(items);

	  Ti.API.info("Tutti utenti: "+infoUtenteObject);
});
function creaItemList(infoUtenteObject,index){
	var dynamicBackgroundColor;
	if(index%2===0){
			dynamicBackgroundColor = "white"
	}
	else{
			dynamicBackgroundColor = "gray"
	}
	var item = {
		template: 'template1',
		item_view: {
			backgroundColor:dynamicBackgroundColor
		},

		user_container:{

			width: Ti.UI.SIZE
		},
		user_avatar: {
			image: infoUtenteObject.pathImagine,
			width: 100,
			height: 100
		},
		user_first_name: {
			text: infoUtenteObject.nomeUtente,
			color: 'black',
			width: Ti.UI.SIZE
		},
		user_last_name: {
			text: infoUtenteObject.cognome,
			color: 'black',
			width: Ti.UI.SIZE,
		}
	}
	return item;
}
function gestisciClickLista(e){
	// Get the section of the clicked item
	var section = $.listaUtenti.sections[e.sectionIndex];
	// Get the clicked item from that section
	var item = section.getItemAt(e.itemIndex);

	var nomeUtenteClicked = item.user_first_name.text;

	entityUtente = utenteDao.getUtenteByUserName(nomeUtenteClicked);

	vaiAllaPaginaUser();
	Ti.API.info("Clickato item: "+JSON.stringify(item));


}


$.group.open();
