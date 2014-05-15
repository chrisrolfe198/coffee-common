class Flaps
	constructor: () ->
		@getTabs()
		@setListeners()
		@current = 1;

	getTabs: () ->
		@tabheaders = document.querySelectorAll('.flap-title')
		@tabcontent = document.querySelectorAll('.flap')

	setListeners: () ->
		tab.addEventListener('click', @eventListener.bind(@)) for tab in @tabheaders

	eventListener: (e) ->
		item = e.toElement.dataset.itemPosition

		if item != @current
			current = document.querySelector('.flap:nth-of-type('+@current+')')
			newCurrent = document.querySelector('.flap:nth-of-type('+item+')')
			current.classList.add('flap-closed');
			newCurrent.classList.remove('flap-closed');
			@current = item