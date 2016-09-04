/*Made by David Libeau (DavidLibeau.fr). Under CC-BY*/

/** Customization **/
var lang="ENG"; // "ENG" or "FR"
var tooltip="Verified";
if(lang=="ENG"){
	tooltip="Verified account to be a Twitter account";
}else if(lang=="FR"){
	tooltip="Compte certifié d'être un compte Twitter";
}

/** Extension **/
function verified(){
	
	//For profil
	$(".ProfileHeaderCard-name, .DashboardProfileCard-name").each(function(){
		if($(this).children(".ProfileHeaderCard-badges").length==0){
			$(this).append("<span class=\"ProfileHeaderCard-badges ProfileHeaderCard-badges--1\"><a href=\"/help/verified\" class=\"js-tooltip\" target=\"_blank\" data-placement=\"right\" data-original-title=\""+tooltip+"\"><span class=\"Icon Icon--verified\" style=\"margin-left:22px\"><span class=\"u-hiddenVisually\">"+tooltip+"</span></span></a></span>");
		}
	});
	
	//For WhoToFollow
	$(".WhoToFollow-users .account-group-inner").each(function(){
		if($(this).children(".Icon--verified ").length==0){
			$(this).children(".fullname").after("<span class=\"Icon Icon--verified Icon--small\"><span class=\"u-hiddenVisually\">"+tooltip+"</span></span>");
		}
	});
	
	//For "account hover popup"
	//not working
	/*$(".ProfileNameTruncated").each(function(){
		if($(this).children(".u-textTruncate>.ProfileNameTruncated-badges").length==0){
			$(this).children(".u-textTruncate").addclass("ProfileNameTruncated-withBadges").append("<div class=\"ProfileNameTruncated-badges\"><a href=\"\" class=\"js-tooltip\" target=\"_blank\" title=\""+tooltip+"\" data-placement=\"right\"><span class=\"Icon Icon--verified\"><span class=\"u-hiddenVisually\">"+tooltip+"</span></span></a></div>");
		}
	});*/
}

setInterval(verified, 100);