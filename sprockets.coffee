class Sprockets
	constructor: (@next, @previous, @selector, @callback) ->
		@selector = 'step-' if not @selector
		@all_steps = document.querySelectorAll('[class*='+@selector+']')
		@step = 1
		@turn()

	turn: ->
		@next.addEventListener('click', @forward.bind(this))
		@previous.addEventListener('click', @backward.bind(this))
		@set_step()

	forward: (e) ->
		e.preventDefault()
		@callback() if (@step + 1) > @all_steps.length && @callback
		@step++ if @step < @all_steps.length
		@set_step()
	
	backward: (e) ->
		e.preventDefault()
		@step-- if @step > 1
		@set_step()

	set_step: ->
		for step in @all_steps
			step.classList.remove('show')
		current_step = document.querySelector('.'+@selector+@step)
		current_step.classList.add('show')
