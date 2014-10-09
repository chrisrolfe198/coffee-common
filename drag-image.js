var DragImage = function() {
	this.init();
};

DragImage.prototype.init = function() {
	var draggableItems = document.querySelectorAll('.drag-image');

	for (var i = draggableItems.length - 1; i >= 0; i--) {
		draggableItems[i].addEventListener('dragstart', function(e) {
			e.dataTransfer.setData('text/plain', 'This text may be dragged');
			console.log(e.dataTransfer);
		});
	};

	var dragTargets = document.querySelectorAll('.drop-image');

	for (var i = dragTargets.length - 1; i >= 0; i--) {
		dragTargets[i].addEventListener('drop', function(e) {
			console.log('ended');
			console.log(e.dataTransfer);
		});
	};
};

new DragImage();