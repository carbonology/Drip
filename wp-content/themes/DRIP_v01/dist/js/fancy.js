function execute(){
	const menuButton = document.getElementById("menu-js");
	const menu = document.getElementsByClassName("menu")[0];
	const closeButton = document.getElementsByClassName("menu__close-button")[0];
	const menuChildren = menu.children;
	const searchEl = document.getElementsByClassName('search__icon')[0];
	
	menuButton.addEventListener('click', openClose);
	closeButton.addEventListener('click', openClose);
	searchEl.addEventListener('click', searchMove);
	
	//Controller for the mobile-nav menu
	let isMenuOpen = false;
	// function openClose(){
	
	// 	if (!isMenuOpen){
	// 		//Actions when the mobile nav is OPEN
	// 		menu.classList.remove('menu-slide-out');
	// 		menu.classList.add('menu-slide-in');

	// 		document.getElementsByClassName('menu__list').firstChild.style.display = 'block';
			
	// 		for (let i = 0; i < menuChildren.length; i++){
	// 			menuChildren[i].style.display = 'block';
	// 			menuChildren[i].classList.remove('fadeOut');
	// 			menuChildren[i].classList.add('fadeIn');
	// 		}
	// 		document.getElementById('menu-test-menu').style.display = 'flex';
	// 		document.getElementById('menu-test-menu').classList.add('fadeIn');

			
	// 		isMenuOpen = true;
	// 	}else{
	// 		//Actions when the mobile nav is CLOSED
	// 		menu.classList.remove('menu-slide-in');
	// 		menu.classList.add('menu-slide-out');
			
	// 		document.getElementsByClassName('menu__list').firstChild.style.display = 'none';


	// 		for (let i = 0; i < menuChildren.length; i++){
	// 			menuChildren[i].classList.remove('fadeIn');
	// 			menuChildren[i].classList.add('fadeOut');
	// 			menuChildren[i].style.display = 'none';
	// 		}
	// 		isMenuOpen = false;
	// 	}
	// }

	function openClose(){
	
		if (!isMenuOpen){
			//Actions when the mobile nav is OPEN
			menu.classList.remove('menu-slide-out');
			menu.classList.add('menu-slide-in');

			// document.getElementsByClassName('menu__list').firstChild.style.display = 'block';
			document.getElementsByClassName('menu')[0].style.display = 'block';
			// for (let i = 0; i < menuChildren.length; i++){
			// 	menuChildren[i].style.display = 'block';
			// 	menuChildren[i].classList.remove('fadeOut');
			// 	menuChildren[i].classList.add('fadeIn');
			// }
			// document.getElementById('menu-test-menu').style.display = 'flex';
			// document.getElementById('menu-test-menu').classList.add('fadeIn');

			
			isMenuOpen = true;
		}else{
			//Actions when the mobile nav is CLOSED
			menu.classList.remove('menu-slide-in');
			menu.classList.add('menu-slide-out');
			
			// document.getElementsByClassName('menu__list').firstChild.style.display = 'none';
			setTimeout(function(){document.getElementsByClassName('menu')[0].style.display = 'none';}, 250);


			// for (let i = 0; i < menuChildren.length; i++){
			// 	menuChildren[i].classList.remove('fadeIn');
			// 	menuChildren[i].classList.add('fadeOut');
			// 	menuChildren[i].style.display = 'none';
			// }
			isMenuOpen = false;
		}
	}
	
	const searchInput = document.getElementsByClassName('search__input')[0];
	const searchButton = document.getElementsByClassName('search__button')[0];
	let isSearchOpen = false;
	function searchMove(){
		console.log('Menu activated');
	
		if (!isSearchOpen){
		
			searchInput.classList.remove('search-implode');
			searchInput.classList.add('search-explode');
			searchInput.focus();
			
			setTimeout(function(){
				searchButton.style.display = 'block';
			}, 350);
			
	
			isSearchOpen = true;
		} else {
			searchInput.classList.remove('search-explode');
			searchInput.classList.add('search-implode');
			searchInput.focus();
	
			searchButton.style.display = 'none';
	
			isSearchOpen = false;
		}
	}
	
	//if search becomes unfocused, close the search bar
	if ((isSearchOpen == true) && (searchInput.focus() == false)){
		searchMove;
	}
}

document.addEventListener("DOMContentLoaded", function(){
    execute();
});


