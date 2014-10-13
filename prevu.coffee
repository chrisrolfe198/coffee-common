PreVu = (->
  PreVu = (selector) ->
    @selector = selector
    @results = document.querySelector(".results")
    if @selector
      @selector = document.querySelector(@selector)
      @load_item()
    return
  PreVu::load_item = ->
    @selector.addEventListener "click", @listener.bind(this)
    document.querySelector(".signature-nav").addEventListener "click", @clear_node(@results)

  PreVu::listener = ->
    preview_img = undefined
    selected = undefined
    selected = document.querySelector("option[value=" + @selector.value + "]")  if @selector
    preview_img = document.createElement("img")
    preview_img.src = selected.dataset["previewUrl"]
    @clear_node @results
    @results.appendChild preview_img

  PreVu::clear_node = (node) ->
    _results = undefined
    _results = []
    _results.push node.removeChild(node.firstChild)  while node.firstChild
    _results

  PreVu::preview = (type, data, extra) ->
    itemToAppend = undefined
    @type = type
    @data = data
    @extra = extra
    if @type is "image"
      itemToAppend = document.createElement("img")
      itemToAppend.src = @data
    else if @type is "text"
      itemToAppend = document.createElement("p")
      itemToAppend.innerHTML = @data
    @clear_node @results
    @results.appendChild itemToAppend
    @results.appendChild @extra  if @extra?

  PreVu
)()