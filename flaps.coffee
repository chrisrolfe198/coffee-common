class Flaps
	constructor: () ->
		@getTabs()
		@setListeners()
		@current = 1;

	getTabs: () ->
		@tabheaders = document.querySelectorAll('.flap-title')
		@tabcontent = document.querySelectorAll('.flap')

	setListeners: () ->
		tab.addEventListener('click', @eventListener) for tab in @tabheaders

	eventListener: () ->
		item = @.dataset.itemPosition

