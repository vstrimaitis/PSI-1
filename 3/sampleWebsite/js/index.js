$(document).ready(function(){
	"use strict";
	var id = localStorage.getItem(USER_ID_STORAGE_KEY);
	if(id === null){
        $('.loggedIn').remove();
    }else{
        $('.loggedOut').remove();
		var usr = getUserInfo(id);
		if(!usr.IsAdmin)
			$('.adminItem').remove();
		document.getElementById('welcome_username').innerHTML = usr.FirstName + " " + usr.LastName;
		$('#idea_sender_name').prop("value", usr.FirstName + " "  + usr.LastName);
		$('#idea_sender_email').prop("value", usr.Email);
		$('#idea_sender_name').prop("disabled", true);
		$('#idea_sender_email').prop("disabled", true);
    }
	
	$('.about_us_button').click(function(){
		$('html, body').animate({
			scrollTop: $('#about_us_header').offset().top
		}, 1000);
	});
	
	$('.events_button').click(function(){
		$('html, body').animate({
			scrollTop: $('#events_header').offset().top
		}, 1000);
	});
	$('.videos_button').click(function(){
		$('html, body').animate({
			scrollTop: $('#videos_header').offset().top
		}, 1000);
	});
	$('.jobs_button').click(function(){
		$('html, body').animate({
			scrollTop: $('#jobs_header').offset().top
		}, 1000);
	});
	
	$('.link_to_sending_idea').click(function(){
		$('html, body').animate({
			scrollTop: $('#idea_header').offset().top
		}, 1000);
	});
	
	fillEvents();
	fillVideos();
	fillJobs();
	
	var menu = $('.menu');
	var origOffsetY = menu.offset().top;

	function scroll() {
		if ($(window).scrollTop() >= origOffsetY) {
			$('.menu').addClass('sticky');
			$('.content').addClass('menu-padding');
		} else {
			$('.menu').removeClass('sticky');
			$('.content').removeClass('menu-padding');
		}
	}

	document.onscroll = scroll;
});

function fillJobs(){
	"use strict";
	for(var i = 0; i < JOB_LISTINGS.length; i++){
		var job = JOB_LISTINGS[i];
		var msg = 'Nuoroda į darbo aplikaciją.';
		if(localStorage.getItem(USER_ID_STORAGE_KEY) == null)
			msg = 'Turite būti prisijungęs, jei norite aplikuoti į šią poziciją!';
		var html = '<div class="col-lg-6">'+
			'<h3>'+job.Position+'</h3>'+
			'<p> <em class="icon-desktop "></em>Sporto šaka: '+job.Sport+'</p>'+
			'<p> <em class="icon-desktop "></em>Laisvų vietų skaičius: '+job.FreeSpots+'</p>'+
			'<p> <em class="icon-desktop "></em>Alga: '+job.Salary+' €</p>'+
			'<p> <em class="icon-desktop "></em>Data: nuo '+job.StartDate+' iki '+job.EndDate+'</p>'+
			'<p><a class="btn btn-default" onclick="alert(\''+msg+'\')">Aplikuoti »</a></p>' + 
		  '</div>';
		$('#jobs_row').append(html);
	}
}

function fillEvents(){
	"use strict";
	for(var i = 0; i < EVENTS.length; i++){
		var msg = 'Nuoroda į prekybą bilietais.';
		if(localStorage.getItem(USER_ID_STORAGE_KEY) == null)
			msg = 'Turite būti prisijungęs, jei norite pirkti bilietą!';
		var html = '<div class="col-lg-6">'+
			'<h3><a onclick="alert(\'Nuoroda į pilną renginio aprašą\')">'+EVENTS[i].Name+'</a></h3>'+
			'<p> <em class="icon-desktop "></em>'+EVENTS[i].Description+'</p>'+
			'<p><a class="btn btn-default" onclick="alert(\''+msg+'\')">Pirkti bilietus »</a></p>' + 
		  '</div>';
		$('#events_row').append(html);
	}
}

function fillVideos(){
	"user strict";
	for(var i = 0; i < EVENTS.length; i++){
		var videos = EVENTS[i].Videos;
		for(var j = 0; j < videos.length; j++){
			var v = videos[j];
			var html = '<div class="col-lg-6">'+
			'<h3>'+v.Name+'</h3>'+
			'<embed width="420" height="315"'+
			'src="'+v.Link+'">' + 
		  '</div>'
			$('#videos_row').append(html);
		}
	}
}

function login(){
	"use strict";
	var email = document.getElementById('email_field').value;
	var pass = document.getElementById('password_field').value;
	// send a login request to the server and retrieve the id
	if(email === USER1.Email && pass === USER1.Password){
		localStorage.setItem(USER_ID_STORAGE_KEY, USER1.Id);
		location.reload();
	}
	else if(email === USER2.Email && pass===USER2.Password){
		localStorage.setItem(USER_ID_STORAGE_KEY, USER2.Id);
		location.reload();
	}
	else{
		alert('Login attempt unsuccessful');	
	}
}

function logout(){
	"use strict";
	localStorage.removeItem(USER_ID_STORAGE_KEY);
	location.reload();
}

function getUserInfo(id){
	"use strict";
	if(id === USER1.Id){
		return USER1;
	}
	else if(id === USER2.Id){
		return USER2;
	}
	return null;
}

function sendIdea(){
	var name = document.getElementById('idea_sender_name').value;
	var email = document.getElementById('idea_sender_email').value;
	var content = document.getElementById('idea_content').value;
	alert("Bus nusiųstas pasiūlymas:\nNuo: "+name+"\nSiuntėjo el. paštas: "+email+"\nPasiūlymas: "+content);
}