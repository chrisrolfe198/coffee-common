var DragImage = function() {
	this.init();
};

DragImage.prototype.init = function() {
	var draggableItems = document.querySelectorAll('.drag-image');

	for (var i = draggableItems.length - 1; i >= 0; i--) {
		draggableItems[i].addEventListener('dragstart', function(e) {
			e.dataTransfer.setData('text/plain', 'This text may be dragged');
			this.style.opacity = 0.5;
			console.log(e.dataTransfer);
		});
		draggableItems[i].addEventListener('dragend', function(e) {
			console.log(this.src);
			var images = document.querySelectorAll('.rich-textarea img[src="' + this.src + '"]');

			if (!images) {
				this.style.opacity = 1;
			} else {
				for (var i = images.length - 1; i >= 0; i--) {
					images[i].style.opacity = 1;1
				};
			}
		});
	};

	var dragTargets = document.querySelectorAll('.drop-image');

	for (var i = dragTargets.length - 1; i >= 0; i--) {
		dragTargets[i].addEventListener('drop', function(e) {
			console.log('ended');
			console.log(e.dataTransfer);
		});
	};

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.removedNodes.length) {
				console.log(mutation.removedNodes);
				[].forEach.call(mutation.removedNodes, function(node) {
					if (node.classList.contains('drag-image', 'wiki-image-thumbnail')) {
						document.querySelector('.snappy-content img[src="'+node.src.replace(window.location.origin, '')+'"]').style.opacity = 1;
					}
				});
			}
		});
	});
	var config = { attributes: true, childList: true, characterData: true };
	observer.observe(document.querySelector('.rich-textarea'), config);


};

new DragImage();