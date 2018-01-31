$(document).ready(function(){
	$('#bt-login').click(function(){
		var email	=	$('#adminEmail').val();
		var pwd		=	$('#adminPassword').val();

		if(!email.replace(/\s/g, '').length){
			alert('Email should be filled');
		}else if(!emailvalid(email)){
			alert('Email invalid');
		}else if(!pwd.replace(/\s/g, '').length){
			alert('Password should be filled');
		}
	});
});

function emailvalid(email){
	var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if(filter.test(email)){
		return true;
	}else{
		return false;
	}
}