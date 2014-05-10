class Ajax
	constructor: ->
		@xhr = new XMLHttpRequest()

	request: (type, location, data, success, error) ->
		if not success?
			return false

		@xhr.open(type, location, true)
		@xhr.onreadystatechange = ->
			if @readyState is 4
				if @status is 200
					(success)(@responseText)
				else
					if not error
						return false
					(error)(@responseText)
		@xhr.send(data)
