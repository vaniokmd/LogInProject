// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var mArgs = $.args;
var nomeString = Alloy.Globals.nomeString;
var cognomeString = Alloy.Globals.cognomeString;
var emailString = Alloy.Globals.emailString;

function init(){
	Ti.API.info('dif caratteri'+cognomeString.length - nomeString.length);
	//var spazioInPiu = " ".repeat(3);
	var entityBeanUtente = mArgs;
	var userAvatar = $.user_avatar1;
	userAvatar.setImage(entityBeanUtente.pathImagine);
	var userFirstName = $.user_first_name1;
	
	var maxLine1String = "maxLines=1".repeat(50);
	var senzaMaxLine = "senzaMaxLine".repeat(50);
	
	userFirstName.setText(nomeString+": "+entityBeanUtente.nomeUtente);
	var userLastName = $.user_last_name1;
	userLastName.setText(cognomeString+": " + entityBeanUtente.cognome);
	var userEmail = $.user_email1;
	userEmail.setText(emailString+": "+entityBeanUtente.indirzzo);
	
	Ti.API.info("EntityUtente: "+JSON.stringify(entityBeanUtente));
}
init();
$.userPageComposite.open();