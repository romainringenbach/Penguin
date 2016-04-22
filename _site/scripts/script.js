var normalizeMainCategory = function(){
	var mainCategory = document.getElementsByClassName('firstcatbloc');
	mainCategory[0].className = "catbloc nav_button";
	var nav = document.getElementById('nav');
	nav.removeEventListener('click',normalizeMainCategory);
}


var nav = document.getElementById('nav');
nav.addEventListener('click',normalizeMainCategory);
