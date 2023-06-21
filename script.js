let theme = localStorage.getItem('theme')

setTheme( theme ? theme : 'light' )

let themeDots = document.getElementsByClassName('theme-dot')

Array.prototype.forEach.call(themeDots, element => {
	element.addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
});

function setTheme(mode){
	switch (mode) {
		case 'light':
			document.getElementById('theme-style').href = 'default.css'
			break;
		case 'blue':
			document.getElementById('theme-style').href = 'blue.css'
			break;
		case 'green':
			document.getElementById('theme-style').href = 'green.css'
			break;
		case 'purple':
			document.getElementById('theme-style').href = 'purple.css'
			break;
		default:
			document.getElementById('theme-style').href = 'default.css'
			break;
	}

	localStorage.setItem('theme', mode)
}