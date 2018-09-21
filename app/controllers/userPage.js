// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var mArgs = $.args;
var nomeString = Alloy.Globals.nomeString;
var cognomeString = Alloy.Globals.cognomeString;
var emailString = Alloy.Globals.emailString;
var mUserContainer = $.user_container;

function init(){
	Ti.API.info('dif caratteri'+cognomeString.length - nomeString.length);
	//var spazioInPiu = " ".repeat(3);
	var entityBeanUtente = mArgs;
	var userAvatar = $.user_avatar;
	userAvatar.setImage(entityBeanUtente.pathImagine);
	var userFirstName = $.user_first_name;

	var maxLine1String = "maxLines=1".repeat(50);
	var senzaMaxLine = "senzaMaxLine".repeat(50);

	userFirstName.setText(nomeString+": "+entityBeanUtente.nomeUtente);
	var userLastName = $.user_last_name;
	userLastName.setText(cognomeString+": " + entityBeanUtente.cognome);
	var userEmail = $.user_email;
	userEmail.setText(emailString+": "+entityBeanUtente.indirzzo);

	Ti.API.info("EntityUtente: "+JSON.stringify(entityBeanUtente));
}

mUserContainer.addEventListener('click',function(e){
	// box is a Ti.UI.View, when clicked, it fades out of view in 2 seconds, then fades back into view

	mUserContainer.animate({
			opacity: 0,
			duration: 2000
	}, function(){
			mUserContainer.animate({
					opacity: 1,
					duration: 2000
			});
	});
	setTimeout(function(){
   mUserContainer.backgroundColor='blue';
	}, 2000);

});
init();
$.userPage.open();
