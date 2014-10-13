var Snappy = function(triggerSelector, untriggerSelector) {
	this.triggerSelector = triggerSelector;
	this.untriggerSelector = untriggerSelector;
	this.attachListeners();
}

Snappy.prototype.attachListeners = function() {
	if (this.triggerSelector) {
		var trigger = document.querySelectorAll(this.triggerSelector);
	} else {
		var trigger = document.querySelectorAll('.snappy-btn');
	}

	for(i = 0; i< trigger.length; i++) {
		trigger[i].addEventListener('click', function(e) {
			console.log(e.currentTarget);
			e.currentTarget.parentNode.classList.toggle('snappy-open');
		})
	};
}