var PreVu;

PreVu = (function() {
  function PreVu(selector) {
    this.selector = selector;
    this.results = document.querySelector('.results');
    if (this.selector) {
      this.selector = document.querySelector(this.selector);
      this.load_item();
    }
  }

  PreVu.prototype.load_item = function() {
    this.selector.addEventListener('click', this.listener.bind(this));
    return document.querySelector('.signature-nav').addEventListener('click', this.clear_node(this.results));
  };

  PreVu.prototype.listener = function() {
    var preview_img, selected;
    if (this.selector) {
      selected = document.querySelector('option[value=' + this.selector.value + ']');
    }
    preview_img = document.createElement('img');
    preview_img.src = selected.dataset['previewUrl'];
    this.clear_node(this.results);
    return this.results.appendChild(preview_img);
  };

  PreVu.prototype.clear_node = function(node) {
    var _results;
    _results = [];
    while (node.firstChild) {
      _results.push(node.removeChild(node.firstChild));
    }
    return _results;
  };

  PreVu.prototype.preview = function(type, data, extra) {
    var itemToAppend;
    this.type = type;
    this.data = data;
    this.extra = extra;
    if (this.type === 'image') {
      itemToAppend = document.createElement('img');
      itemToAppend.src = this.data;
    } else if (this.type === 'text') {
      itemToAppend = document.createElement('p');
      itemToAppend.innerHTML = this.data;
    }
    this.clear_node(this.results);
    this.results.appendChild(itemToAppend);
    if ((this.extra != null)) {
      return this.results.appendChild(this.extra);
    }
  };

  return PreVu;

})();
